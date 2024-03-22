// src/chat/chat.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'; // Import HttpService from @nestjs/axios
import { AxiosResponse } from 'axios';
const apiKey = process.env.OPENAI_API_KEY;

@Controller('chat')
export class ChatController {
  constructor(private httpService: HttpService) {}

  @Post()
  async handleMessage(@Body() userPrompt: string): Promise<any> {
    const instructions =
      'Instructions:\n\n' +
      'Begin by searching for patterns commonly associated with property addresses. These patterns often include a combination of numbers, street names, city names, state abbreviations, and postal codes.\n\n' +
      'Recognize that property addresses typically consist of a street number followed by the name of the street, then the city, state, and postal code.\n\n' +
      'Utilize regular expressions to identify potential property addresses within the text input. Regular expressions can help match patterns like "123 Main St, City, State, Postal Code".\n\n' +
      'Ensure that the identified address follows a logical structure, such as numerical street numbers, valid city and state names, and a valid postal code format.\n\n' +
      'Extract the identified addresses from the text input and store them as elements in an array.\n\n' +
      'Present the extracted addresses as an array, with each element representing a distinct property address.\n\n' +
      'Validate the extracted addresses to avoid including false positives or inaccuracies.\n\n';

    const combinedPrompt = instructions + '\n\n' + userPrompt;

    try {
      const response = await this.httpService
        .post(
          'https://api.openai.com/v1/completions',
          {
            prompt: 'Hi Chat',
            model: 'gpt-3.5-turbo-1106',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: apiKey,
            },
          },
        )
        .toPromise();

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error calling ChatGPT API:', error.response.data);
      throw error.response.data;
    }
  }
}

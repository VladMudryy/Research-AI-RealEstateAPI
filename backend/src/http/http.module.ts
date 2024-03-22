// http/http.module.ts
import { Module } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Module({
  providers: [
    {
      provide: HttpService,
      useValue: new HttpService(
        axios.create({
          // Configure Axios options here if needed
        }),
      ),
    },
  ],
  exports: [HttpService], // Export HttpService to be used in other modules
})
export class HttpModule {}

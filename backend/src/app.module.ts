// app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from './http/http.module'; // Import HttpModule
import { ChatController } from './chat/chat.controller';

@Module({
  imports: [HttpModule], // Import HttpModule here
  controllers: [ChatController],
})
export class AppModule {}

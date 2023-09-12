import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestService } from './request.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestService],
})
export class AppModule {}

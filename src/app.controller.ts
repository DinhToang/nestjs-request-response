import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FreezePipe } from './pipes/freeze.pipe';
import { HttpExceptionFilter } from './filters/http-eception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@UseFilters(HttpExceptionFilter)
  getHello(): string {
    return this.appService.getHello();
  }
  // @Post()
  // @UseGuards(FreezePipe)
  // examplePost(@Body(new FreezePipe()) body: any) {
  //   body.test = 32;
  // }
}

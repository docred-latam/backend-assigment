import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Back End Test By Jorge Montenegro';
  }
}

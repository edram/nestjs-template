import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  private count = 0;

  getHello(): string {
    this.count++;
    return `Hello World! ${this.count}`;
  }
}

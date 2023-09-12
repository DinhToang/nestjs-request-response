import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST }) 
/*scope: each request come to the system will get a new request service
 where userId is unique which will make the request safe*/
export class RequestService {
  private userId: string;

  setUserId(userId: string) {
    this.userId = userId;
  }

  getUserId() {
    return this.userId;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageNotServiceService {
  subject: Subject<string>;

  constructor() {
    this.subject = new BehaviorSubject<string>('def Val');
  }

  sendMessage(message: string) {
    this.subject.next(message);
  }
}

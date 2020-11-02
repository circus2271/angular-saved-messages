import { Injectable } from "@angular/core";
import { Message } from "../message";
import { MESSAGES } from "../mock-messages";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = MESSAGES;
  recentMessages = this.messages.slice(0, 5);
  recentMessages$ = new BehaviorSubject(this.recentMessages);

  getRecentMessages(): BehaviorSubject<Message[]> {
    return this.recentMessages$;
  }

  addMessage({username, message}): void {
    this.messages.unshift({username, message})
    this.recentMessages = this.messages.slice(0, 5);
    this.recentMessages$.next(this.recentMessages);
  }
}


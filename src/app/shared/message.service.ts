import { Injectable } from "@angular/core";
import { Message } from "../message";
import { MESSAGES } from "../mock-messages";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  getRecentMessages(): Observable<Message[]> {
    return of(MESSAGES.splice(0, 5));
  }
}


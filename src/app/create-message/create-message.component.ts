import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService} from "../shared/message.service";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent {
  newMessageForm = new FormGroup({
    username: new FormControl(''),
    message: new FormControl('')
  })
  constructor(private messageService: MessageService) { }

  onSubmit():void {
    const {username, message} = this.newMessageForm.controls;

    this.messageService.addMessage({
      username: username.value,
      message: message.value
    });
  }
}

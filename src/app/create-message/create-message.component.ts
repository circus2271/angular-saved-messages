import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from "../shared/message.service";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  newMessageForm: FormGroup;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.newMessageForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    })
  }

  get username() { return this.newMessageForm.get('username'); }
  get message() { return this.newMessageForm.get('message'); }

  onSubmit(f: NgForm):void {
    const {username, message} = this.newMessageForm.controls;

    this.messageService.addMessage({
      username: username.value,
      message: message.value
    });

    f.resetForm();
  }
}

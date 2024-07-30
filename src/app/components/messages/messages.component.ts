import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService){}
}

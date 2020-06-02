import { Component, OnInit, Input } from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() contacts: any;
  newMessage = '';
  pullNewMessage = '';
  currentContact = null;
  messages = [];
  constructor(private chatService: ChatService) { }
  ngOnInit(): void {
    this.chatService.onNewMessage().subscribe(pullNewMessage => {
      this.pullNewMessage = pullNewMessage;
      this.messages.push(this.pullNewMessage);
      console.log(this.messages);
    });
  }
  sendMessage(): void{
    this.chatService.sendMessage(this.currentContact.id, this.newMessage);
    this.newMessage = '';
  }
}

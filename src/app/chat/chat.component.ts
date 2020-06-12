import { Component, OnInit, Input } from '@angular/core';
import {ChatService} from '../services/chat.service';
import * as $ from 'jquery';

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

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatService.onNewMessage().subscribe(pullNewMessage => {
      this.pullNewMessage = pullNewMessage;
      this.messages.push(this.pullNewMessage);
      console.log(this.messages);
    });
  }

  sendMessage(): void {
    if (this.newMessage.length > 0 && this.newMessage.match(/\w{1,1000}/g)) {
      this.chatService.sendMessage(this.currentContact.id, this.newMessage);
      this.newMessage = '';
      $('#textarea').css('height', '50');
    }
  }

  textarea(): void {
    const textar = document.querySelector('#textarea');
    textar.addEventListener('keyup', function() {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + 'px';
      }
    });
  }

  sendMessageEnter(event): void {
    this.sendMessage();
  }

  messageEnter(event): void {
    /*$('#textarea').prepend('</br');*/
     function getCaretPosition(obj){
       $(obj).focus();
       return $(obj).selectionStart;
     }
     const text = $('#textarea').val();
     $('#textarea').val(text.substring(0, getCaretPosition('#textarea')) + '\r\n');
  }
}















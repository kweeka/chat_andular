import {Component, OnInit} from '@angular/core';
import {ChatService} from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  contacts = [];
  constructor(private chatService: ChatService) {}
  ngOnInit(): void {
    this.chatService.onContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}

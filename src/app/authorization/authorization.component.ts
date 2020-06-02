import { Component, OnInit, Input } from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  @Input() userName: string;
  @Input() userEmail: string;

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
  }

  authorization(): void {
    this.chatService.authorization(this.userName, this.userEmail);
  }
}

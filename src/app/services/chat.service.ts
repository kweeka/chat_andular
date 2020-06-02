import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from 'rxjs/index';


@Injectable({
    providedIn: 'root'
})

export class ChatService {
    constructor(private socket: Socket) {}

    authorization(userName: string, userEmail: string) {
        this.socket.emit('auth', {name: userName, email: userEmail});
    }
    sendMessage(recipientId: string, message: string) {
        this.socket.emit('message', {recipientId, message});
    }
    onContacts() {
        return new Observable<any>(contacts => {
            this.socket.on('contacts', (data: any) => {
                contacts.next(data);
                contacts.complete();
            });
        });
    }
    onNewMessage() {
        return new Observable<any>(newMessage => {
            this.socket.on('new_message', (data: any) => {
                newMessage.next(data);
                console.log(data);
            });
        });
    }
}

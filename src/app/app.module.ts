import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';

const config: SocketIoConfig = {url: 'http://192.168.1.150:8082', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

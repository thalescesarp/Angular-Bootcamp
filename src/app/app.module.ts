import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatService } from './chat/chat.service';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { routing } from "./app.routes";
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

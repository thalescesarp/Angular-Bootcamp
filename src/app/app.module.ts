import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatService } from './chat/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

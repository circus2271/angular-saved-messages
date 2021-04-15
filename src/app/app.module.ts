import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RecentMessagesComponent } from './recent-messages/recent-messages.component';
import { InitialsPipe } from "./shared/initials.pipe";
import { CreateMessageComponent } from './create-message/create-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        RecentMessagesComponent,
        InitialsPipe,
        CreateMessageComponent,
        NavigationMenuComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { InitialsPipe } from "./shared/initials.pipe";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list'
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { BreedsListComponent } from './breeds-list/breeds-list.component';

@NgModule({
    declarations: [
        AppComponent,
        InitialsPipe,
        HomeComponent,
        BreedsListComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

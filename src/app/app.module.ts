import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InitialsPipe } from "./shared/initials.pipe";
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { BreedsListComponent } from './breeds-list/breeds-list.component';
import {AppMaterialModule} from "./app-material.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BreedsListComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

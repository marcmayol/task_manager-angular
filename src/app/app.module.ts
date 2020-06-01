import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';

import { CreateComponent } from './task/create/create.component';
import { UpdateComponent } from './task/update/update.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TaskService} from "./services/task.service";

import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent,
    UpdateComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

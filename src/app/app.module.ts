import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from "app/login.guard";
import { ClassicComponent } from './forms/classic/classic.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    CardsComponent,
    LoginComponent,
    LayoutComponent,
    ClassicComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

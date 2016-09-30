import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list';
import { DashboardModule } from './dashboard';
import { LoginModule } from './login';

import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    TodoListModule,
    DashboardModule,
    LoginModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

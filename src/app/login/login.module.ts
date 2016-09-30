import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        loginRouting
    ],
    providers: [],
    bootstrap: [LoginComponent]
})

export class LoginModule {}
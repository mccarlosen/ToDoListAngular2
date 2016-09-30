import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = 'testing.cero@gmail.com';
  password: string = '123456';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe( data => this.onValueChanged(data) );
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; } // check if form exist
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    email: '',
    password: ''
  };

  validationMessages = {
    email: {
      'required': 'Email es requerido.'
    },
    password: {
      'required': 'Contraseña es requerida'
    }
  };

  onSubmit() {
    let form = this.loginForm;
    let cEmail = form.get('email');
    let cPasswd = form.get('password');
    
    if(cEmail.value == this.email && cPasswd.value == this.password) {
      if(this.authService.login()) { 
        this.router.navigate([this.authService.redirectUrl]); 
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../providers/auth/auth-firebase.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(
    private auth: AuthFirebaseService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  error: boolean = false;

  ngOnInit(): void {}

  // login(email: String, password: String) {
  //   this.auth.signInWithEmail(email, password);
  // }
  async login(formData, $event)  {
    $event.preventDefault();
    console.log(formData);
    try {
      await this.auth.signInWithEmail(formData.email, formData.password);
      this.router.navigateByUrl('/admin');


    } catch (error) {
      error=true;
      console.error('auth',error);

    }
  }
}

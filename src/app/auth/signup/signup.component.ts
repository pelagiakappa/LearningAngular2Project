import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // -->251 Signing Users Up<--
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  // -->249 Creating a Signup Page and Route<--
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    // -->251 Signing Users Up<--
    this.authService.signupUser(email, password);
  }

}

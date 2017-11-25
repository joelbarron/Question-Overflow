import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupScreenComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password, name, lastName } = this.signupForm.value;

      const user = new User(email, password, name, lastName);

      this.authService.signup(user)
        .subscribe(
          this.authService.login,
          this.authService.handleError
        );

    } else {
      console.log('err');
    }

  }

}

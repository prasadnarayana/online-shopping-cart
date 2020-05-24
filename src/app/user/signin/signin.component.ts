import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;
  public serverErrorMsg: string = null;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _shopService: ShopService
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onLoginFormSubmit() {
    const userCredentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this._shopService.signInUser(userCredentials).subscribe(
      (res) => {
        if (res.success) {
          this.loginForm.reset();
          localStorage.setItem("access_token", res.token);
          this._router.navigate(["user/profile"]);
        } else {
          this.serverErrorMsg = res.message;
          setTimeout(() => this.serverErrorMsg = null);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

}

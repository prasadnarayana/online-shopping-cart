import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public serverSuccessMsg: string = null;
  public serverErrorMsg: string = null;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _shopService: ShopService
  ) { }

  ngOnInit() {
    this.signupForm = this._fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onSignupFormSubmit() {
    const newUser = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }

    this._shopService.signupUser(newUser).subscribe(
      (res) => {
        if (res.success) {
          this.signupForm.reset();
          this.serverSuccessMsg = res.message;
          setTimeout(() => {
            this.serverSuccessMsg = null;
            this._router.navigate(["user/signin"]);
          }, 3000);
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

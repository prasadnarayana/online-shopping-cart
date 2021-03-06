import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './shop/home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { ProfileComponent } from './user/profile/profile.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "user/signup", component: SignupComponent },
  { path: "user/signin", component: SigninComponent },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [
      AuthGuard
    ]
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
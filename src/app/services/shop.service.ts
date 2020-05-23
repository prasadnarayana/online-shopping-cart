import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  readonly baseURL: string = "http://localhost:3000/";

  constructor(
    private _http: HttpClient
    // private _jwtHelperService: JwtHelperService,
  ) { }

  getAllProducts(): Observable<any> {
    return this._http.get(this.baseURL + "get-all-products");
  }

  signupUser(newUser): Observable<any> {
    return this._http.post(this.baseURL + "user/signup", newUser);
  }
}

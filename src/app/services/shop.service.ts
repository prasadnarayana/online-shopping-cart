import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  readonly baseURL: string = "http://localhost:3000/";

  constructor(
    private _http: HttpClient,
    private _jwtHelperService: JwtHelperService
  ) { }

  getAllProducts(): Observable<any> {
    return this._http.get(this.baseURL + "get-all-products");
  }

  signupUser(newUser: any): Observable<any> {
    return this._http.post(this.baseURL + "user/signup", newUser);
  }

  signInUser(userCredentials: any): Observable<any> {
    return this._http.post(this.baseURL + "user/signin", userCredentials);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get isloggedIn(): boolean {
    // get token from local storage or state management
    const token = localStorage.getItem("access_token");

    if (token !== null) {
      // decode token to read the payload details
      const decodeToken = this._jwtHelperService.decodeToken(token);
    
      // check if it was decoded successfully, if not the token is not valid, deny access
      if (!decodeToken) {
        console.log("Inavlid Token");
        return false;
      }

      return true;
    } else
      return false;
  }

  public get currentUser(): any {
    try {
      let tokenInfo = this._jwtHelperService.decodeToken(localStorage.getItem('access_token'));
      return tokenInfo
    } catch(error){
      console.log(error);
    }
  }
}

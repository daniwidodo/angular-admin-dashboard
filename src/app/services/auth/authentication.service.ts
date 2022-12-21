import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { base_url } from '../../../environments/environment';

interface IAuth {
  username?: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  auth_url = base_url + '/auth/';
  header = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  login(postBody: IAuth) {
    return this.http.post(this.auth_url + 'login', postBody, {
      headers: this.header,
    });
  }

  register(postBody: IAuth) {
    return this.http.post(this.auth_url + 'register', postBody, {
      headers: this.header,
    });
  }
}

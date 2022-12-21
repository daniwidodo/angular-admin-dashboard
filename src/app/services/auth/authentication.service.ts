import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { base_url } from '../../../environments/environment';

export interface IAuth {
  username?: string | null | undefined;
  email: string | null | undefined;
  password: string | null | undefined;
}

export interface IUser {
id?: number;
username?: string;
email?: string;
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

  getUser(){
    const newObject: any = localStorage.getItem('user');
    const obj = JSON.parse(newObject);
    return obj
  }
}

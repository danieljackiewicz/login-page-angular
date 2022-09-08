import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _httpClient: HttpClient) {}

  sendFormData(loginData: any) {
    //TODO: tutaj umieść połączenie ze sztucznym serwerem przez serwis HttpClient
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    return this._httpClient.post<any>(API_URL, {
      email: loginData.email,
      password: loginData.password,
    });
  }
}

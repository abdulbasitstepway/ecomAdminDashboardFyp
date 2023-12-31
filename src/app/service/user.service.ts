import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _url = environment.baseUrl;
  constructor(private http :HttpClient) { }

  getUser(){
    let url = `${this._url}/getUser`
    return this.http.get(url)
  }

}

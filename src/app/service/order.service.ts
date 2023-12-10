import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
_url = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getOrder(){
    let url = `${this._url}/orderDetails`
    return this.http.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    _url = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getProduct(){
    let url = `${this._url}/product`
    return this.http.get(url)
  }

  postProduct(obj :any){
    let url = `${this._url}/product/image`
    return this.http.post(url,  obj)
  }

  deleteProducts(id:any){
    let url = `${this._url}/product/${id}`
    return this.http.delete(url);
  }

  uploadImage(FormData:any){
    let url = `${this._url}/image`
    return this.http.post(url, FormData,{responseType: 'text'})
    
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  _url = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllCategory(){
    let url = `${this._url}/category`
    return this.http.get(url)
  }
  postCategory(obj:any){
    let url = `${this._url}/category`
    return this.http.post(url,obj)
  }
  deleteCategorys(id :any){
    let url = `${this._url}/category/${id}`
    return this.http.delete(url);
  }
  updateCategory(id:any ,obj:any){
    let url = `${this._url}/category/${id}`
    return this.http.put(url,obj)
  }
  getCategoryById(id:any) {
    let url = `${this._url}/categoryId/${id}`
    return this.http.get(url);
  }
}

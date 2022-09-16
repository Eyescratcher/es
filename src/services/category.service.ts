import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL = 'https://localhost:44330/api/ServiceCategory'

  constructor(private http:HttpClient) { }

  getServCategory(){
    return this.http.get(this.URL);
  }
}

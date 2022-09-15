import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = 'https://localhost:44330/api/User'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.URL);
  }
}

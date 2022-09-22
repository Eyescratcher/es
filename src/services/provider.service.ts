import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private URL = 'https://localhost:44330/api/Provider'

  constructor(private http:HttpClient) { }

  getProviders(){
    return this.http.get(this.URL);
  }

  getProvById(id:number){
   // let params={}.append
    return this.http.get(this.URL + `${id}`)
  }
}

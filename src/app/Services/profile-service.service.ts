import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  apiurl: any = 'http://139.59.47.49:4004/api/'

  constructor(private http:HttpClient) { }
  gatData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  uploadImage(event: any) {
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file)
    return this.http.post(this.apiurl + 'upload/image', formData)
  }
  loginApi(data: any) {
    return this.http.post(this.apiurl + "account/login", data);
  }
  UserProfileGetApi() {
    return this.http.get(this.apiurl + "profile")
  }
  changePasswordApi(data:any){
    return this.http.put(this.apiurl+"account/change/password",data)
  }
}

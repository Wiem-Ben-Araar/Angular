import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//Injection pour utiliser les methodes cruds 
  constructor(private http:HttpClient) { }
  getUserList(){
    return this.http.get("http://localhost:3000/users");
  }

  getUserById(id:any){
    return this.http.get("http://localhost:3000/users/"+id);
  }
  removeUser(id:any){
    return this.http.delete("http://localhost:3000/users/"+id)
  }
}

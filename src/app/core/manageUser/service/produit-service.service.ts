import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
//Injection pour utiliser les methodes cruds 
constructor(private http:HttpClient) { }
getProduitList(){
  return this.http.get("http://localhost:3000/products");
}

getProduitById(id:any){
  return this.http.get("http://localhost:3000/products/"+id);
}
removeProduit(id:any){
  return this.http.delete("http://localhost:3000/products/"+id)
}

}

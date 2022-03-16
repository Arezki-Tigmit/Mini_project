import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../Model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  url="http://localhost:3000/produit";

  constructor(private http: HttpClient) { }

  getProduit(){
    return this.http.get<Produit[]>(this.url);
  }
  postProduit(p: Produit){

    return this.http.post(this.url,p);
  }
  putProduit(p: Produit){
    return this.http.put(this.url,JSON.stringify(p));}
}

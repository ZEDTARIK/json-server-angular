import { Product } from './../models/product';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  // get all products from db.json
  getAllProducts(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products");
  }


  getSelectedProducts(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?Selected=true");
  }

  getAvailableProducts(): Observable<Product[]> {
    let host = environment.host;
    return this.http.get<Product[]>(host + "/products?Available=true");
  }

}

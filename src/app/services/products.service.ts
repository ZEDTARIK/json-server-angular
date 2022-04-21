import { Product } from './../models/product';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host = (Math.random() > 0.1) ? environment.host : environment.unreachableHost;
  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.host + '/products');
  }

  getSelectedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?Selected=true');
  }

  getAvailableProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?Available=true');
  }

}

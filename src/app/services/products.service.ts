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

  SearchProducts(keyword): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + '/products?ProductName_like=' + keyword);
  }

  changeSelectedProduct(product: Product): Observable<Product> {
    product.Selected = !product.Selected;
    return this.http.put<Product>(this.host + '/products/' + product.id, product);
  }

  DeleteProduct(product: Product): Observable<void> {
    return this.http.delete<void>(this.host + '/products/' + product.id);
  }

  SaveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.host + '/products', product);
  }

}

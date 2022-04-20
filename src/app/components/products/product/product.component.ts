import { DataStateEnum, AppDataState } from './../../../state/state';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products$: Observable<AppDataState<Product>> | null = null;
  readonly DataStateEnum = DataStateEnum;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProduct() {
    this.products$ = this.productsService.getAllProducts()
      .pipe(
        map((data) => ({
          dataState: DataStateEnum.LOADED,
          data: data
        })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }

  onGetSelectedProduct() {
    this.products$ = this.productsService.getSelectedProducts()
      .pipe(
        map((data) => ({
          dataState: DataStateEnum.LOADED,
          data: data
        })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }


  onGetAvailableProduct() {
    this.products$ = this.productsService.getAvailableProducts()
      .pipe(
        map((data) => ({
          dataState: DataStateEnum.LOADED,
          data: data
        })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({
          dataState: DataStateEnum.ERROR,
          errorMessage: err.message
        }))
      );
  }



}

import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFrmGroup?: FormGroup;

  constructor(private productsService: ProductsService, private frmBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productFrmGroup = this.frmBuilder.group({
      ProductName: ['', Validators.required],
      Price: ['', Validators.required],
      Quantity: ['0', Validators.required],
      Selected: [true],
      Available: [true],
    });
  }

  onSubmit() {
    this.productsService.SaveProduct(this.productFrmGroup.value)
    .subscribe(() => {
      alert('add success');
    });
  }

}

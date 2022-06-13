import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  ProductArray: Product[] = [];
  constructor(service: ProductService) {
    this.ProductArray=service.getProduct();
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productArray! : Product[];
  constructor(public productService : ProductService) {
    
    this.productService.getData().subscribe(data => {
      this.productArray = data;
    }
    )}

  ngOnInit(): void {
  }

}

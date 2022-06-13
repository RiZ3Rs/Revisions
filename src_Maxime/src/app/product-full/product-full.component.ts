import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-full',
  templateUrl: './product-full.component.html',
  styleUrls: ['./product-full.component.css']
})
export class ProductFullComponent implements OnInit {

  product! : Product;
  constructor(public activeroute : ActivatedRoute, public productService : ProductService) {  
    const index = parseInt(this.activeroute.snapshot.paramMap.get('id')||'0');
   }

  ngOnInit(): void {
  }

}

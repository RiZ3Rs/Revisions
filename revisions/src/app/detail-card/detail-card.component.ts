import { ProductService } from './../service/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  product:Product;
  constructor(public activeroute : ActivatedRoute, public productService : ProductService) {
    const index = parseInt(this.activeroute.snapshot.paramMap.get('id')||'0');
    this.product = this.productService.getProductById(index-1);
   }

  ngOnInit(): void {
  }

}

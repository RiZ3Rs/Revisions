import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product!: Product;
  isliked: boolean = false;
  nbLike: number = 0;

  constructor(private router:Router) { }
  afficheProd(): void {
    this.router.navigate(['/market/product',this.product.productID]);
    
  }
  ngOnInit(): void {
    
  }

  fav(): void {
    if(this.isliked === true) {
      this.isliked = false;
    }else{
      this.isliked = true;
    }
  }
  

}

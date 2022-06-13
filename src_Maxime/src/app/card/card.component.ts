import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()  product! : Product;  


  constructor(public router : Router , public service : ProductService) { 
    
   }

  ngOnInit(): void {
  }

  updateLike(){
    this.product.like++;
    this.service.updateLikes(this.product).subscribe(
     
    );
  }

  updateDislike(){
    if(this.product.like > 0){
      this.product.like--;
    }
  }

  updateQuantity(){
    window.alert(this.product.quantity)
    if(this.product.quantity == 5){
      this.product.quantity = this.product.quantity * 2;
    }
  }

  getInformations(){
    this.router.navigate(['/test/product-full', this.product.id]);
  }
}

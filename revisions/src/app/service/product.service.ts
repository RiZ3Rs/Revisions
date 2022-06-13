import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  array:Product[] = [];
  getProduct(): Product[]{
    this.array.push(new Product(1,"choqué woula", "Je m'attendais à rien et je suis quand même déçu" ,1, "Sroÿce et Mino corp", "choqué.jpg"));
    this.array.push(new Product(2,"choqué woula", "Je m'attendais à rien et je suis quand même déçu" ,0, "Sroÿce et Mino corp", "choqué.jpg"));
    this.array.push(new Product(3,"choqué woula", "Je m'attendais à rien et je suis quand même déçu" ,1, "Sroÿce et Mino corp", "choqué.jpg"));
    return this.array
  }
  getProductById(id : number) : Product {
    return this.array[id];
  }
  constructor() { }
}

import { HttpClient } from '@angular/common/http';
import { Product } from './../classes/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product!: Product

  constructor(private http : HttpClient) {
   }

   getData() : Observable<Product[]>{
     return this.http.get<Product[]>('http://localhost:3000/product/');
   }

  

      updateLikes(product : Product) : Observable<Product>{
        return this.http.put<Product>('http://localhost:3000/product/'+product.id, product)
        
      }

  
}

import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProductFullComponent } from './product-full/product-full.component';

const routes: Routes = [
 
  {path : 'test' , component : NavbarComponent,
children : [
  {path : 'marketplace', component : ProductListComponent},
  {path : 'myaccount' , component : MyaccountComponent},
  {path : 'product-full/:id' , component : ProductFullComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DollarsPipe } from './pipes/dollars.pipe';
import { ImagePipe } from './pipes/image.pipe';
import { IconPipe } from './pipes/icon.pipe';
import { FormsModule } from '@angular/forms';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductFullComponent } from './product-full/product-full.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductListComponent,
    DollarsPipe,
    ImagePipe,
    IconPipe,
    MyaccountComponent,
    NavbarComponent,
    ProductFullComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

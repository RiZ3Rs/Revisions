import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PrixPipe } from './pipes/prix.pipe';
import { ImgPipe } from './pipes/img.pipe';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailCardComponent } from './detail-card/detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProductListComponent,
    PrixPipe,
    ImgPipe,
    NavbarComponent,
    DetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

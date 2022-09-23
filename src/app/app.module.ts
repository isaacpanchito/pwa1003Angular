import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';

import {FormsModule} from '@angular/forms'; //agregar esto para el ngModel
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    ProductListComponent,
    ProductoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //esto tabie para el ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

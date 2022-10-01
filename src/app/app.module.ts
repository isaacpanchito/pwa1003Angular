import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';

import {FormsModule} from '@angular/forms'; //agregar esto para el ngModel
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    ProductListComponent,
    ProductoFilterPipe,
    MenuComponent,
    TablaComponent,
    CinepolisComponent,
    ResistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //esto tabie para el ngModel
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

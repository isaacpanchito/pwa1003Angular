import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaComponent } from './calculos/suma/suma.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'suma', component:SumaComponent},
  {path:'tabla', component:TablaComponent},
  {path:'cinepolis',component:CinepolisComponent},
  {path: 'resistencias', component:ResistenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

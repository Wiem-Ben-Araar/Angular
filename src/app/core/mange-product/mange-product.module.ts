import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangeProductRoutingModule } from './mange-product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteProduitComponent } from './deleteProduit/delete-produit/delete-produit.component';


@NgModule({
  declarations: [
    AddproductComponent,
    DeleteProduitComponent
  ],
  imports: [
    CommonModule,
    MangeProductRoutingModule
  ]
})
export class MangeProductModule { }

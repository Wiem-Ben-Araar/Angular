import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ListusersComponent } from './listusers/listusers.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BackgroundColorChangeDirective } from './background-color-change.directive';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthModule } from './core/manageUser/auth/auth.module';
import { MangeProductModule } from './core/mange-product/mange-product.module';
import { HttpClientModule } from '@angular/common/http';
import { ListProduitComponent } from './list-produit/list-produit/list-produit.component';
import { ShowProduitComponent } from './list-produit/show-produit/show-produit.component';
import { ProduitByIdComponent } from './produit-by-id/produit-by-id/produit-by-id.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListusersComponent,
    ListUserComponent,
    BackgroundColorChangeDirective,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    ListProduitComponent,
    ShowProduitComponent,
    ProduitByIdComponent,
    AddProductTDComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    MangeProductModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

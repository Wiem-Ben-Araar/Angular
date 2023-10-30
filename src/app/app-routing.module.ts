import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';
import {DeleteUserComponent} from "./core/manageUser/delete-user/delete-user.component";
import { ShowProduitComponent } from './list-produit/show-produit/show-produit.component';
import { ProduitByIdComponent } from './produit-by-id/produit-by-id/produit-by-id.component';
import { DeleteProduitComponent } from './core/mange-product/deleteProduit/delete-produit/delete-produit.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';

const routes: Routes = [
 // {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
  {path:'test',component:ListUserComponent},
  {path:'first', component:FirstComponent},
  {path:'users', component:ShowUsersComponent},
  {path:'remove/:id', component:DeleteUserComponent},
  {path:'produits', component:ShowProduitComponent},
  {path:'remove/:id', component:DeleteUserComponent},
  {path:'produit/:id', component:ProduitByIdComponent},
  {path:'removeP/:id', component:DeleteProduitComponent},
  {path:'formulaire', component:AddProductTDComponent},

  {path:'p',loadChildren:()=>import('../app/core/manageUser/auth/auth.module').then((t)=>t.AuthModule)},
 
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitComponent} from './produit/produit.component';
import {LoginComponent} from './login/login.component';
import {AdminCatComponent} from './admin-cat/admin-cat.component';
import {AdminProdComponent} from './admin-prod/admin-prod.component';
import {InscriptionComponent} from './inscription/inscription.component';

const routes: Routes = [
  {path : 'produits/:p1/:p2' , component : ProduitComponent },
  {path :'login' , component : LoginComponent},
  {path :'adminCat' , component : AdminCatComponent},
  {path :'adminProd' , component : AdminProdComponent},
  {path :'inscrire' , component : InscriptionComponent},
  {path : '' ,
        redirectTo : 'produits/1/0' ,
        pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

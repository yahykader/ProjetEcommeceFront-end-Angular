import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule, MatInputModule} from '@angular/material';
import { CategorieComponent } from './categorie/categorie.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './login/login.component';
import {FormControl, FormsModule} from '@angular/forms';
import { AdminCatComponent } from './admin-cat/admin-cat.component';
import { AdminProdComponent } from './admin-prod/admin-prod.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategorieComponent,
    FooterComponent,
    ProduitComponent,
    LoginComponent,
    AdminCatComponent,
    AdminProdComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule, FormsModule,
    HttpClientModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

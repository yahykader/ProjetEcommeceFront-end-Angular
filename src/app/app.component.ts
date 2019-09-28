import {Component, OnInit} from '@angular/core';
import {PanierService} from "./panier.service";
import {CategorieService} from "./categorie.service";
import {AuthentificationService} from "./authentification.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ProjetMaterial';

  constructor(public panierService:PanierService, public catService: CategorieService,
              public authService: AuthentificationService,){

  }
  ngOnInit(): void {
      this.authService.loadToken();
      this.panierService.getCurrentPanier();
      this.panierService.savePaniers();
  }
}

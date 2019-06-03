import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../authentification.service';
import {CategorieService} from '../categorie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public currentCategorie ;
  private listProduitsselected: any;
  public motCle: any;

  constructor( private router: Router, public authService: AuthentificationService, public catService: CategorieService) { }

  ngOnInit() {
    this.authService.loadToken();
  }
  public onSelectedProduit() {
    this.currentCategorie = undefined;
    this.router.navigateByUrl("/produits/1/0");
  }

  public onPromotionProduit() {
    this.currentCategorie = undefined;
    this.router.navigateByUrl("/produits/3/0");
  }
  public onDisponibleProduit() {
    this.currentCategorie = undefined;
    this.router.navigateByUrl("/produits/4/0");
  }
  public onGetSearch(motCle) {
    console.log(motCle);
   this.onGetProduitByMCle(motCle);
    this.router.navigateByUrl("/produits/5/0");

  }

  public isAdmin() {
    return this.authService.isAdmin();
  }
  public isUser() {
    return this.authService.isUser();
  }
  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  public onLogout() {
    this.authService.onLogout();
  }


private onGetProduitByMCle(motCle) {
    let url = this.catService.host + "/produits/search/cherchermotCle?mc="+motCle;
    this.catService.getR(url)
      .subscribe(data=> {
        this.listProduitsselected = data;
        console.log(data);
      },err => {
        console.log(err);
      });
  }

}

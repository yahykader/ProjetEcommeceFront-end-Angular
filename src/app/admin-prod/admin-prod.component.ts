import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../categorie.service';

@Component({
  selector: 'app-admin-prod',
  templateUrl: './admin-prod.component.html',
  styleUrls: ['./admin-prod.component.css']
})
export class AdminProdComponent implements OnInit {

  public listProduits;
  public listCategories;
  public mode;


  constructor(public catService: CategorieService) { }

  ngOnInit() {
    this.onGetAllProduits();
  }
  // pour faire l'acualisation achaque fois on supprimer ou ajouter ou editer
  public onGetAllProduits() {
    this.catService.getRessource("/produits")
      .subscribe(data => {
        this.listProduits = data;
        this.mode = 'list';
      }, err => {
        console.log(err);
      });

  }

  public onDeleteProd(prod) {
    let p= confirm("Etes vous sure de vouloir supprimez");
    if (!p) return;
    this.catService.deleteRessource(prod._links.self.href)
      .subscribe(data => {
        this.onGetAllProduits();
      }, err => {
        console.log(err);
      });
  }

  public onNewProduit(prod) {

    this.mode = 'newProduit';
    // pour charger les categories dans le select
    this.catService.getRessource("/categories")
      .subscribe(data=> {
        this.listCategories = data;
      },err=> {
        console.log(err);
      });
  }

  public onSaveProduit(data) {
    let url = this.catService.host + "/produits";
    this.catService.postRessource(url, data)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllProduits();
      }, err => {
        console.log(err);
      });
    console.log(data);
  }

}

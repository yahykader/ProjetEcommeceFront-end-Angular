import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../categorie.service';

@Component({
  selector: 'app-admin-cat',
  templateUrl: './admin-cat.component.html',
  styleUrls: ['./admin-cat.component.css']
})
export class AdminCatComponent implements OnInit {
  public listCategorie;
  public mode;


  constructor(public catService: CategorieService) { }

  ngOnInit() {
    this.onGetAllCategories();
  }

  // pour faire l'acualisation achaque fois on supprimer ou ajouter ou editer
  public onGetAllCategories() {
    this.catService.getRessource("/categories")
      .subscribe(data => {
        this.listCategorie = data;
        this.mode = 'list';
      }, err => {
        console.log(err);
      });

  }

  public onDeleteCat(cat) {
    let c = confirm("Etes vous sure de vouloir supprimez");
    if (!c) return;
    this.catService.deleteRessource(cat._links.self.href)
      .subscribe(data => {
        this.onGetAllCategories();
      }, err => {
        console.log(err);
      });
  }

  public onNewCategorie(cat) {

    this.mode = 'newCategorie';
  }

  public onSaveCategorie(data) {
    let url = this.catService.host + "/categories";
    this.catService.postRessource(url, data)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, err => {
        console.log(err);
      });
    console.log(data);
  }

  public onUpdateCategorie(data) {
    let url = this.currentcategorie._links.self.href;
    this.catService.putRessource(url, data)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, err => {
        console.log(err);
      });
    console.log(data);
  }

  public currentcategorie;

  public onEditCategories(cat) {

    let url = cat._links.self.href;
    this.catService.getR(url)
      .subscribe(data => {
        this.currentcategorie = data;
        this.mode = 'editCategorie';
      }, err => {
        console.log(err);
      });
  }
}



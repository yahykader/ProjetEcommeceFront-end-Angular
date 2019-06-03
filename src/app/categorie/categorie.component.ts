import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../categorie.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public listCategories :any;
  public currentCategorie ;
  constructor(private catService: CategorieService , private router: Router) { }

  ngOnInit() {
    this.getAllCategories();

  }
  public  getAllCategories() {

    this.catService.getRessource("/categories")
         .subscribe(data=> {
             this.listCategories = data;
         },err => {
              console.log(err);
      });
  }


  public getProduitByCat(c) {
    this.currentCategorie = c;
    this.router.navigateByUrl("/produits/2/"+c.idCategorie);

  }

}

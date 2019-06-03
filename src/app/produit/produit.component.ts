import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../categorie.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  private listProduitsselected: any;
 public motCle: string;
  private title: string;

  constructor(public catService: CategorieService, public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {

    this.router.events.subscribe((val)=> {
      if (val instanceof NavigationEnd) {
        let url =val.url;
        console.log(url);

        let p1 = this .route.snapshot.params.p1;
        if (p1 == 1 ) {
          this.title ="Les Produits Selectionées  ";
          this.getProduits('/produits/search/selectedProduit');
        }
        else
        if (p1 == 2) {
          let idCategorie = this.route.snapshot.params.p2;
          this.title ="Les Produits de la Categorié ";
          this.getProduits('/categories/'+idCategorie+'/produits');
        }
        else if (p1 == 3) {
          this.title ="Les Produits en Promotions ";
          this.getProduits('/produits/search/promotionProduit');
        }
        else if (p1 == 4) {
          this.title ="Les Produits Disponbles ";
          this.getProduits('/produits/search/disponibleProduit');
        }
        else if (p1 == 5) {
          this.title ="Recherche du produit  ";
          //this.getProduits('/produits/search/cherchermotCle&mc='+motCle);
          this.onGetProduitByMCle(this.motCle);
        }
      }
    });

    let p1 = this .route.snapshot.params.p1;
    if (p1 == 1 ) {
      this.title ="Les Produits Selectionées  ";
      this.getProduits('/produits/search/selectedProduit');
    }

  }
  private onGetProduitByMCle(motCle) {
    let url = this.catService.host + "/produits/search/cherchermotCle?mc="+motCle;
       this.getProduits(url);
  }


  private getProduits(url) {
    this.catService.getRessource(url)
      .subscribe(data=> {
         this.listProduitsselected = data;
      },err => {
         console.log(err);
      });
  }

}

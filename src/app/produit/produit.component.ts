import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../categorie.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {AuthentificationService} from "../authentification.service";
import {Produit} from "../model/Produit.model";
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  private listProduitsselected: any;
  public motCle: string;
  private title: string;
  public editPhoto: boolean;
  public currentProduit: any;
  private selectedFile: any;
  public progress: number;
  private currentFileUpload: any;
  private timestamp:number=0;

  constructor(public catService: CategorieService, public authService: AuthentificationService,
              public route: ActivatedRoute, public router: Router,public panierService:PanierService) {
  }

  ngOnInit() {

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);

        let p1 = this.route.snapshot.params.p1;
        if (p1 == 1) {
          this.title = "Les Produits Selectionées  ";
          this.getProduits('/produits/search/selectedProduit');
        } else if (p1 == 2) {
          let idCategorie = this.route.snapshot.params.p2;
          this.title = "Les Produits de la Categorié ";
          this.getProduits('/categories/' + idCategorie + '/produits');
        } else if (p1 == 3) {
          this.title = "Les Produits en Promotions ";
          this.getProduits('/produits/search/promotionProduit');
        } else if (p1 == 4) {
          this.title = "Les Produits Disponbles ";
          this.getProduits('/produits/search/disponibleProduit');
        } else if (p1 == 5) {
          this.title = "Recherche du produit  ";
          //this.getProduits('/produits/search/cherchermotCle&mc='+motCle);
          this.onGetProduitByMCle(this.motCle);
        }
      }
    });

    let p1 = this.route.snapshot.params.p1;
    if (p1 == 1) {
      this.title = "Les Produits Selectionées  ";
      this.getProduits('/produits/search/selectedProduit');
    }

  }

  private onGetProduitByMCle(motCle) {
    let url = this.catService.host + "/produits/search/cherchermotCle?mc=" + motCle;
    this.getProduits(url);
  }


  private getProduits(url) {
    this.catService.getRessource(url)
      .subscribe(data => {
        this.listProduitsselected = data;
      }, err => {
        console.log(err);
      });
  }

  private onEditPhoto(p) {
    this.currentProduit = p;
    this.editPhoto = true;
  }

  private onSelectedFile(event) {
    this.selectedFile = event.target.files;
  }

  private upLoadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFile.item(0);
    this.catService.uploadPhotoProduit(this.currentFileUpload, this.currentProduit.idProduit).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
           this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
          alert("bien de chargement");
          this.timestamp=Date.now();
      }
    }, err => {
          alert("Problème de chargement");
    })
        this.selectedFile=undefined
  }

  public getTS() {
    return this.timestamp;
  }

  public onAddProductToCaddy(p:Produit) {
      this.panierService.addProduitToPanier(p);
  }

  public onProductDetails(p: Produit) {
     let url=btoa(p._links.produit.href);
     this.router.navigateByUrl("produit-detail/"+url);
  }
}

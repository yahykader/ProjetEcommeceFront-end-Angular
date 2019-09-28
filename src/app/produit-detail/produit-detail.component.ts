import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieService} from "../categorie.service";
import {Produit} from "../model/Produit.model";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  public currentProduit:Produit;
  public mode: number=0;
  private title: string;
  public editPhoto: boolean;
  private selectedFile: any;
  public progress: number;
  private currentFileUpload: any;
  private timestamp:number=0;

  constructor(private router:Router,private route:ActivatedRoute,
              public catService: CategorieService,public authService: AuthentificationService,) { }

  ngOnInit() {
     this.getDetails();
  }

  public getDetails(){
    let url= atob(this.route.snapshot.params.url);
    console.log(url);
      this.catService.getProduit(url).subscribe(data=>{
      this.currentProduit=data;
    },error1 => console.log("produit introuvable !!!"))
  }

  public onAddProductToCaddy(currentProduit: Produit) {

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


  public onEditProduct() {
    this.mode=1;
  }

  public onUpdateProduct(data){
    let url=this.currentProduit._links.self.href;
    this.catService.patchProduit(url,data)
      .subscribe(d=>{
        this.currentProduit=d;
        this.mode=0;
      },err=>{
        console.log(err);
      })
  }
}

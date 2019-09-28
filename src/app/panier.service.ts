import { Injectable } from '@angular/core';
import {Panier} from "./model/Panier.model";
import {ItemProduit} from "./model/ItemProduit.model";
import {Produit} from "./model/Produit.model";
import {keyframes} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
   public currentPanierName:string="Panier 1";
   public paniers: Map<string,Panier>=new Map();


  constructor() {
   let paniers=localStorage.getItem('myPanier');
    if(paniers){
      this.paniers=JSON.parse(paniers);
    }else {
      let panier=new Panier(this.currentPanierName);
      this.paniers[this.currentPanierName]=panier;
     // this.paniers.set(this.currentPanierName,panier);
    }
   // let panier=new Panier(this.currentPanierName);
   // this.paniers.set(this.currentPanierName,panier);
    /* let paniers=localStorage.getItem("myPanier");
    //this.paniers=JSON.parse(paniers);
    console.log(paniers);
   if(paniers){
       this.paniers=JSON.parse(paniers);
    }else {
      let panier=new Panier(this.currentPanierName);
      this.paniers.set(this.currentPanierName,panier)
    }*/
  }

  public addProduitToPanier(produit:Produit):void{
       this.addProductToPanier(produit);
       this.savePaniers();
  }

  private addProductToPanier(produit:Produit):void{
      let panier=this.paniers.get(this.currentPanierName);// recuperer le panier qu'on va dans l'ajouter
      let produitItem:ItemProduit=panier.items.get(produit.idProduit);// recuperer et verifier si le produit exist dans le panier

      if(produitItem){
        produitItem.quantity+=produit.quantity;
      }else {
        produitItem = new ItemProduit();
        produitItem.prix = produit.prix;
        produitItem.quantity = produit.quantity;
        produitItem.produit = produit;
        panier.items.set(produit.idProduit, produitItem);
      }
  }
  public savePaniers(){
    localStorage.setItem('myPanier',JSON.stringify(this.paniers));
  }
  public getCurrentPanier(){
      return this.paniers.get(this.currentPanierName);
  }

  public getTotalPrix():number{
    let total =0;
    let panier:IterableIterator<ItemProduit>=this.getCurrentPanier().items.values();
    console.log(panier);
    for(let pi of panier){
      total+=pi.prix*pi.quantity;
    }
    return  total;
    console.log(total);
  }

  public getTotalQuantite():number{
    let total =0;
    let panier:IterableIterator<ItemProduit>=this.getCurrentPanier().items.values();
    console.log(panier);
    for(let pi of panier){
      total+=pi.quantity;
    }
    return  total;
    console.log(total);
  }


}

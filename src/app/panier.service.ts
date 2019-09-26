import { Injectable } from '@angular/core';
import {Panier} from "./model/Panier.model";
import {ItemProduit} from "./model/ItemProduit.model";
import {Produit} from "./model/Produit.model";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
   public currentPanierName:string="Panier 1";
   public paniers: Map<string,Panier>=new Map();


  constructor() {
    let panier=new Panier(this.currentPanierName);
    this.paniers.set(this.currentPanierName,panier);
  }


  public addProduitToPanier(produit:Produit){
    let panier=this.paniers.get(this.currentPanierName);// recuperer le panier qu'on va dans l'ajouter
    let produitItem:ItemProduit=panier.items.get(produit.idProduit);// recuperer et verifier si le produit exist dans le panier

    if(produitItem){
      produitItem.quantity+=produit.quantity;
    }else {
       produitItem=new ItemProduit();
       produitItem.prix=produit.prix;
       produitItem.quantity=produit.quantity;
       produitItem.produit=produit;
       panier.items.set(produit.idProduit,produitItem);
    }
  }


  public getCurrentPanier():Panier{
    return this.paniers.get(this.currentPanierName);
  }
}

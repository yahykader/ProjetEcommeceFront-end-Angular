import {Client} from "./Client.model";
import {ItemProduit} from "./ItemProduit.model";

export class Panier{

  public name:string;
  public items:Map<number,ItemProduit>=new Map();
  public client:Client;

  constructor(name:string){
      this.name=name;
  }
}

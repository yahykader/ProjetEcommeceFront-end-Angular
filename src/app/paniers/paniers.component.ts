import { Component, OnInit } from '@angular/core';
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-paniers',
  templateUrl: './paniers.component.html',
  styleUrls: ['./paniers.component.css']
})
export class PaniersComponent implements OnInit {

  constructor(public panierService:PanierService) { }

  ngOnInit() {
    //this.panierService.savePaniers();
  }

  public onRemoveProductFromPanier(value: any) {

  }

  public onNewOrder() {

  }
}

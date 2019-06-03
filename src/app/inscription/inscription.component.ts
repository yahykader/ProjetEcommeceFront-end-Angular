import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import {CategorieService} from '../categorie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(public authService: AuthentificationService, public router: Router) { }

  ngOnInit() {
  }


  public onSaveClient(data) {
    let url = this.authService.host + "/register";
    this.authService.onClient(url, data)
      .subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/produits/1/0');

      }, err => {
         console.log(err);
      });
  }
}

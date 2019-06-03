import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor( public authService: AuthentificationService, public router: Router) { }

  ngOnInit() {
  }
  /*Recuperer le token */

  public onLogin(data) {
    //console.log(data);
    this.authService.Login(data)
      .subscribe(resp=>{
        //console.log(resp.headers.get('Authorization'));
        let jwt = resp.headers.get('Authorization');
        this.authService.saveToken(jwt);
        this.router.navigateByUrl('/');
      },err=>{
        console.log(err);
      });
  }
}

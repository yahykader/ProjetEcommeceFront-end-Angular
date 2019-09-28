import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {CategorieService} from './categorie.service';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public host: string = "http://localhost:8070";
  public jwt: string;
  public userName: string;
  public roles: Array<any>;

  constructor(public http: HttpClient) { }

  public Login(data) {
    return this.http.post(this.host + "/login", data,{observe :'response'});

  }
  public onClient(url,data) {
    return this.http.post(this.host + "/register", data);
  }

  public saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  public parseJWT() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    console.log(objJWT);
    this.userName =  objJWT.obj;
    console.log(this.userName);
    this.roles = objJWT.roles;
    console.log(this.roles);
  }

  public isAdmin(){
    for(let r of this.roles){
      if (r.authority == 'ADMIN') return true;
    }
  }
  public isUser() {
    for(let r of this.roles){
      if (r.authority == 'USER') return true;
    }
  }
  public isAuthenticated() {
    return this.roles && (this.isAdmin());
  }
  /*public isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser());
  }*/
  // pour que ne se'authentifier a chaque fois
  public loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
  public onLogout() {
    localStorage.removeItem('token');
    this.initParams();
  }
  public initParams() {
    this.userName = undefined;
    this.jwt = undefined;
    this.roles = undefined;
  }

}

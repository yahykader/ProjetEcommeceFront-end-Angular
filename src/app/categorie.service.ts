import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

   public  host: string = "http://localhost:8080";
   public motCle: string;

  constructor( private http: HttpClient, private authService: AuthentificationService) { }

  public  getRessource(url) {

      return this.http.get(this.host + url);
  }
  public getR(url) {

    return this.http.get(url);
  }


  public deleteRessource(url) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.delete(url,{'headers': headers});
  }
  public postRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.post(url,data, {'headers': headers});
  }
  public putRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.put(url,data, {'headers': headers});
  }
  public patchRessource(url,data) {
    let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.patch(url,data, {'headers': headers});
  }


}

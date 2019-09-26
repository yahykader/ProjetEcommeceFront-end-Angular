import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthentificationService} from './authentification.service';
import {Observable} from "rxjs";
import {Produit} from "./model/Produit.model";

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
  public getProduit(url):Observable<Produit> {
    return this.http.get<Produit>(url);
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
  public patchRess(url,data):Observable<Produit> {
    //let headers = new HttpHeaders({'Authorization':'Bearer '+this.authService.jwt})
    return this.http.patch<Produit>(url,data);
  }


  public uploadPhotoProduit(file: File, idProduit): Observable<HttpEvent<{}>> {
      let formdata: FormData = new FormData();
      formdata.append('file', file);
     if(this.authService.jwt==null) this.authService.loadToken();
      const req = new HttpRequest('POST', this.host+'/uploadPhoto/'+idProduit, formdata, {
        reportProgress: true,
        responseType: 'text',
        headers: new HttpHeaders({'Authorization':this.authService.jwt})
    });

    return this.http.request(req);
  }
}

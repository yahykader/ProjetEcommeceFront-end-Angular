export interface Categorie{
  idCategorie:string;
  nomCategorie:string;
  photo:string;
  description:string;
  nomPhoto:string;
  _links:{
    self:{
      href:string;
    },
    categorie:{
      href:string
    },
    produits:{
      href:string;
    }
  }
}

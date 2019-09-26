export interface Produit {

  idProduit: number;
  description: string;
  nom: string;
  prix: number;
  selected: boolean;
  promotion: boolean;
  disponible: boolean;
  photo: string;
  quantity: number;
  _links: {
    self: {
      href: string
    },
    produit: {
      href: string
    },
    categorie: {
      href: string
    }
  }
}

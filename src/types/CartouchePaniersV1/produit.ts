export class Produit {
  type: "Produit" = "Produit";

  id!: number;
  idRayon!: number;
  idFamille!: number;
  idSousFamille!: number;

  libelle!: string;
  quantite!: number;

  prixUnitaire!: string;
  prixParUnite!: string;
  totalAPayer!: string;

  qteDisponible!: number;

  urlImage!: string;
  urlPageProduit!: string;

  estBRIIActif!: boolean;
  estAntiGaspi!: boolean;

  origine!: string;
  categorie!: string;
}

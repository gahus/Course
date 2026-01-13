import type { Element } from "./element";

export class Panier {
  id!: string;
  type!: string;

  pointLivraison!: string;

  estPanierCourant!: boolean;
  estVide!: boolean;
  estDrive!: boolean;

  cssUnivers!: string;

  quantite!: number;

  totalHorsReductions!: string;
  totalAPayer!: string;
  montantEconomies!: string;

  gainsBrii!: number;
  reductionsAntiGaspi!: number;

  dateProchainRetrait!: string;
  dateModif!: string;
  dateRechargement!: string;

  nbProduitsIndisponibles!: number;

  libelleEntete!: string;

  elements!: Element[];
}

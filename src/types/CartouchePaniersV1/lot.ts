import { Produit } from "./produit";

export class Lot {
  type: "Lot" = "Lot";

  id!: string;
  idRayon!: number;

  quantite!: number;
  nbGratuits!: number;
  nbProduitsManquants!: number;

  gainsBrii!: number;
  quantiteRequise!: number;
  nbLotsRealises!: number;

  totalAPayer!: string;
  gainsBriiAffiche!: string;

  codeBrii!: number;
  communicationGains!: boolean;
  communicationProduitsManquants!: boolean;
  estBriiProgressif!: boolean;

  urlLogoBrii!: string;

  produits!: Produit[];
}

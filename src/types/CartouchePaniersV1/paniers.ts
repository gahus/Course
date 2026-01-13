import { Panier } from "./panier";

export class Paniers {
  id!: string;
  type!: string;

  totalAPayer!: string;
  montantEconomies!: string;
  quantiteTotale!: number;

  monoUnivers!: boolean;
  masquagePanierVide!: boolean;
  forcerAffichageCompteurTel!: boolean;

  montantTel!: number;

  paniers!: Panier[];
}

import type { LigneArticle, Panier } from "./types/panier";
type ActionPanier =
  | { type: "ajouterProduit"; idProduit: number; quantite: number }
  | { type: "supprimerProduit"; idProduit: number }
  | { type: "modifierProduit"; idProduit: number; quantite: number };

const panierReducer = (panier: Panier, action: ActionPanier) => {
  switch (action.type) {
    case "ajouterProduit": //idProduit et quantité
      const newLigneArticle: LigneArticle = {
        idProduit: action.idProduit,
        quantite: action.quantite,
      };
      return [...panier, newLigneArticle];
      break;
    case "supprimerProduit": //idProduit
      console.log("Supprimer ligne article panier", action.idProduit);
      return panier.filter(({ idProduit }) => idProduit != action.idProduit);
      break;
    case "modifierProduit": // idProduit et quantité
      return panier.map((ligneArticle) =>
        ligneArticle.idProduit == action.idProduit
          ? { ...ligneArticle, quantite: action.quantite }
          : ligneArticle
      );
      break;
  }
};

export { panierReducer, type ActionPanier };

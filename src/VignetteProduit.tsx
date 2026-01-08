import { useContext, type FC } from "react";
import type { Produit } from "./types/produit";
import "./VignetteProduit.css";
import { ContextCompteur } from "./main";
import { usePanier } from "./Contextes/ContextPanier";

type VignetteProduitProps = {
  produit: Produit;
  /*handlAddProduit: (idProduit: number, quantite: number) => void;
  handleRemoveProduit: (idProduitToRemove: number) => void;*/
};

/* Composant vignette produit */
const VignetteProduit: FC<VignetteProduitProps> = ({
  produit
}) => {
  const {panier, dispatch} = usePanier()

  // Juste pour tester la portée du context
  const compteur = useContext(ContextCompteur)
  return (
    <div className="produits">
      <div className="">
        <img src={produit.PhotoListe} alt={produit.Libelle}></img>
      </div>
      <div className="compteurTestContext">Compteur: {compteur}</div>
      <div className="libelle">{produit.Libelle}</div>
      <div>{produit.Prix}€</div>
      {produit.FiltresLabelsQualite.length > 0 && (
        <div className="qualite">qualité</div>
      )}
      {produit.FiltresNutriscore.length > 0 ? (
        <div className="nutriscore">{produit.FiltresNutriscore[0]}</div>
      ) : (
        <div className="nutriscore">0</div>
      )}
      {/*<PlusMoins />*/}
      <button onClick={() => dispatch({
        type: 'supprimerProduit',
        idProduit: produit.Id
      }) }>Del</button>
      <button onClick={() => 
          {dispatch({
          type: "ajouterProduit",
          idProduit: produit.Id,
          quantite: 1,
          });}
      }>Add</button>
    </div>
  );
};

export default VignetteProduit;
export { type VignetteProduitProps };

/*
formulation abandonnée au profit de FC 
function VignetteProduit(produit:Produit){
    return null
}*/

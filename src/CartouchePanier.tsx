import type { FC } from "react";
import "./CartouchePanier.css";
import type { Panier } from "./types/panier";
import { usePanier } from "./Contextes/ContextPanier";
import type { Produit } from "./types/produit";
import { LigneArticle } from "./LigneArticle";
//import produitsData from "./data/produits.json";

//type CartouchePanierprops = {
  /*panier: Panier;
  handleRemoveProduit: (idProduitToRemove: number) => void;*/
//};

/* Composant vignette produit */
//const CartouchePanier: FC<CartouchePanierprops> = () => {

//const {panier, dispatch} = usePanier()
/*
const getProduit = (idProduit: number):Produit|undefined =>
{
  return produitsData.find(p => p.Id == idProduit)
}


type LigneArticleProduit = {
  idProduit: number
  quantite: number
}

  const LigneArticle = ({idProduit, quantite}: LigneArticle, i: number) => {


  return <div></div>

}
*/

const CartouchePanier = () => {
    const {panier} = usePanier()
    return (
        <div className="cartouchepanier">
            <div>Cartouche Panier</div>
            <div>Nombre d'articles: {panier.length}</div>
            {
                panier.map(({idProduit, quantite}, i) => 
                    <LigneArticle idProduit={idProduit} quantite={quantite} index={i} />
                )
            }
        </div>
    )
} 


export default CartouchePanier;

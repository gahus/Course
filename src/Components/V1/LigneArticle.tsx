import type {FC} from "react";
import type {Produit} from "../../types/CartouchePaniersV1/produit";

type LigneArticleProps = {
  produit: Produit;
  /*handlAddProduit: (idProduit: number, quantite: number) => void;
  handleRemoveProduit: (idProduitToRemove: number) => void;*/
};

const LigneArticle: FC<LigneArticleProps> = (produitProp) => {

    return (
        <div key={produitProp.produit.id}>
            {produitProp.produit.libelle} X{produitProp.produit.quantite} {produitProp.produit.prixUnitaire}
        </div>
    )

};

export default LigneArticle;


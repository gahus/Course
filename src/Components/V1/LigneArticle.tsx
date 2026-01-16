import type {FC} from "react";
import type {Produit} from "../../types/CartouchePaniersV1/produit";

const LigneArticle: FC<Produit> = (produit) => {

    return (
        <div key={produit.id}>
            {produit.libelle} X{produit.quantite} {produit.prixUnitaire}
        </div>
    )

};

export default LigneArticle;


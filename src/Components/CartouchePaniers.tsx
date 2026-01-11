// src/components/CartouchePaniers.tsx
import type { FC } from "react";
import { usePaniers } from "../hooks/usePanier";
import type { PaniersComplets, PanierCartouche } from "../types/paniers";
import "./CartouchePaniers.css";

const CartouchePaniers: FC = () => {

// { paniers: PaniersComplets, total: number, loading: boolean, error: string, actualiser }
const {paniers, total, loading, error, actualiser } = usePaniers();

  if (loading) return <p>Chargement du panier...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="paniers">
        <h2>Mon Panier</h2>
        <button onClick={() => actualiser()}>
                  Actualiser
        </button>
        <div>
            {paniers?.objElement.sId
            }
            {paniers?.lstEnfants.length}
            {
            paniers?.lstEnfants.map(x=> 
                <div className="panierUnivers" key={x.objElement.sId}>
                {x.objElement.sId}
                {x.lstEnfants?.map((y) => (
                <div className="panierElement" key={y.objElement.sId}>
                    {y.objElement.sId}
                </div>
                ))}
                </div>
            )
            }
        </div>
        <div className="total">
        <strong>Total : {total} paniers</strong>
      </div>

    </div>
  );

};


export default CartouchePaniers;




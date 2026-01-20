import {useState, useEffect} from "react";
import type {FC} from "react";
import { getAllPaniers, addProduit } from "../../Services/CartouchePaniersServiceV1"
import "./CartouchePanier.css";
import type {Paniers} from "../../types/CartouchePaniersV1/paniers";
import type {Lot} from "../../types/CartouchePaniersV1/lot";
import type {Produit} from "../../types/CartouchePaniersV1/produit";
import LotComponent from "./Lot"
import LigneArticle from "./LigneArticle";
import CookiesComponent from "./Cookies";

const CartouchePaniers: FC = () => {

    const [data, setData] = useState<Paniers|null>(null);

    useEffect(() => {
            reload();
        }, []);


    async function reload() {
        const d = await getAllPaniers();
        setData(d);
    }


    async function ajouter(){
        const d = await addProduit("Panier999901",{
        type: "Produit",
        id: 999,
        libelle: "Nouveau produit",
        quantite: 1,
        prixUnitaire: "1,00 €",
        totalAPayer: "1,00 €"
        });

        setData(d);
    }

    function renderElement(y:Lot|Produit) { 
        switch (y.type) { 
        case "Produit": return <LigneArticle produit={y} />  
        case "Lot": return <LotComponent lot={y} /> 
        default: return <LigneArticle produit={y} /> 
        } 
    }

  return (
    <div>
    <div>
        <button className="boutonPlus" onClick={ajouter}>Ajouter produit</button>
    </div>
    <div className="paniers">
        <h2>Mon Panier</h2>
 
        {data?.paniers.map(x=> <div className={x.cssUnivers} key={x.id} >
            {x.id}
            {x.elements.length}

            {x.elements.map(y=>
            <div className="panierElement" key={y.id}>
                {y.type} {y.id} {y.quantite} {y.totalAPayer}
                {renderElement(y)}
            </div>
            
            


        )
            }

        </div>)}

        <pre>{JSON.stringify(data, null, 2)}</pre>

        <CookiesComponent/>

    </div>
    </div>
  );

};

export default CartouchePaniers;
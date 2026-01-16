import { useContext, useEffect, useReducer, useState, type ChangeEvent } from "react";
import _produitsData from "../data/produits.json";
import "./App.css";
import CartouchePanier from "./CartouchePanier";
import VignetteProduit from "./VignetteProduit";
import { panierReducer } from "./panierReducer";
import {ContextPanier, usePanier} from "./Contextes/ContextPanier";
import type { LigneArticle } from "./types/panier";
import { range } from "./utils";
import { ContextCompteur } from "./main";
import type { Produit } from "./types/produit";
import { loadPage } from "./Services/catalogueService";
// Component Cartouche Panier
import CartouchePaniers from "./Components/V1/CartouchePaniers";

function App() {

  const [produitsData, setProduitsData] = useState<Produit[]>([])

  // taille de page
  // num Page
  //useState pour gérer ce qui est lié à l'affichage
  const [nbProduitPage, setNbproduitpage] = useState<number>(10);
  const [numPage, setNumPage] = useState<number>(1);
  const compteur = useContext(ContextCompteur);
  //const [panier, setPanier] = useState<Panier>([]);
  //const [panier, dispatch] = useReducer(panierReducer, []);
  // version sans Hook personnalisé
  /*const contextPanier = useContext(ContextPanier);
  if(!contextPanier){
    throw new Error("Utilisation du panier sans la mise en place du provider")
  }
  const {panier, dispatch} = contextPanier*/
  // passage par un Hook personnalisé
  const {panier, dispatch} = usePanier()

  // data recalculées à chaque re-rendering déclenché par un changement de state
  const firstIndexProduit = (numPage - 1) * nbProduitPage;
  const lastIndexProduit = numPage * nbProduitPage;
  const nbPage = Math.ceil(produitsData.length / nbProduitPage);
  //const pages;

  const produitsDisplay = produitsData.slice(
    firstIndexProduit,
    lastIndexProduit
  );

  // log de l'état
  console.log(
    `Display produits page=${numPage} de ${firstIndexProduit} à ${lastIndexProduit}`
  );



useEffect(()=>{
// chargement de la donnée
console.log('Chargement des donneés 0')

loadPage(numPage,nbProduitPage)
.forEach(
  newProduitData => setProduitsData(newProduitData)
),[nbProduitPage,numPage]

setProduitsData(_produitsData.slice(0,20))
return () => console.log('déchargement des données')
  },[nbProduitPage] //ce qui va demander un rechargement
)

/*
useEffect(() => {
 //Phase 1 fait quand le useEffect est joué
  const intervalId = setInterval(() => {
  console.log('Chargement des donneés - refresh')
  setProduitsData(_produitsData.slice(0,20))
  }, 5000)
//Phase 2 : fait avant de rejouer l'effet
  return () => clearInterval(intervalId)
},[produitsData])
*/

  const handleChangeNbproduitPage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newNbproduitPage = Number(e.target.value);
    setNbproduitpage(newNbproduitPage);
    setNumPage(1);
    console.log(
      `Changement du nb de produits par page ${newNbproduitPage} ${nbProduitPage}`
    );
  };

  const handleChangementPage = (numPage: number) => {
    setNumPage(numPage);
  };

  /*
  const handleAddProduit = (idProduit: number, quantite: number) => {
    // NE PAS FAIRE : modifier sur place un object ou array
    setPanier((panier) => [
      ...panier,
      { idProduit: idProduit, quantite: quantite },
    ]);
  };
  */
/*
  const handleAddProduit = (idProduit: number, quantite: number) => {
    dispatch({
      type: "ajouterProduit",
      idProduit: idProduit,
      quantite: quantite,
    });
  };
  const handleRemoveProduit = (idProduitToRemove: number) => {
    dispatch({
      type: "supprimerProduit",
      idProduit: idProduitToRemove,
    });
  };*/

  /*
  const handleRemoveProduit = (idProduitToRemove: number) => {
    setPanier((panier) =>
      panier.filter(({ idProduit }) => idProduit != idProduitToRemove)
    );
  };*/

  return (
    <div>
      <div className="entete">
        <a href="https://www.leclercdrive.fr" target="_blank">
          <img
            src="https://www.leclercdrive.fr/_res/release/_imgLoc/fr-FR/icone-drive-orange.svg"
            className="logo"
            alt="Courses E.Leclerc"
          />
          <p>COURSES</p>
        </a>
        <div className="panier">
          Panier: Nb:{panier.length}{" "}
          {panier.map((ligne: LigneArticle) => (
            <div>
              ({ligne.idProduit},{ligne.quantite})
            </div>
          ))}
        </div>
        <CartouchePanier/>
        <CartouchePaniers/>
      </div>
      <div className="taillePage">
        <select value={nbProduitPage} onChange={handleChangeNbproduitPage}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="navigation">
        Numero de page: {numPage}
        Naviguer:
        <div className="choix">
          {range(nbPage, 1).map((numPage) => (
            <button
              onClick={() => handleChangementPage(numPage)}
              key={`page_${numPage}`}
            >
              {numPage}
            </button>
          ))}
        </div>
      </div>
      <div className="listeProduit">
        {produitsDisplay.map((p, index) => (
          <VignetteProduit
            key={`vgntprod${index}`}
            produit={p}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//import type { Panier } from "./types/panier.ts";
import { ContextPanierProvider } from "./Contextes/ContextPanier.tsx";
 //import{panierReducer} from "./panierReducer" ne peux être fait dans main

const ContextCompteur = createContext<number>(0);

//const ContextPanier = createContext<Panier|undefined>(undefined)

createRoot(document.getElementById("root")!).render(
  // strict mode (en principe qu'en dév): chaque composant est monté 2 fois
  // pour vérifier qu'il correspond bien à une fonction pure
  <StrictMode>
    <ContextPanierProvider>
    <ContextCompteur.Provider value={2}>
    <App />
    </ContextCompteur.Provider>
    </ContextPanierProvider>
  </StrictMode>
);

export {ContextCompteur}
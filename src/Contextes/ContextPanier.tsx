import { createContext, useContext, useReducer, type ActionDispatch } from "react";
import type { Panier } from "../types/panier";
import { panierReducer, type ActionPanier } from "../panierReducer";

type ContextPanierProviderProps ={
    children: React.ReactNode
}

type ContextPanierValue = {
    panier: Panier
    dispatch: ActionDispatch<[action: ActionPanier]>
}

const ContextPanier= createContext<ContextPanierValue|undefined>(undefined)

//const ContextPanierProvider = ({child}:{child: React.ReactNode}) => {

//Le composant react permet de mettre en place le hook reducer
const ContextPanierProvider = ({children}:ContextPanierProviderProps) => {
    const [panier, dispatch] = useReducer(panierReducer, [])
    return(
        <ContextPanier.Provider value={{panier,dispatch}}>
            {children}
        </ContextPanier.Provider>
    )
}

// Custom Hook pour récupérer le panier si disponible

function usePanier():ContextPanierValue {
const contextPanier = useContext(ContextPanier)
if (!contextPanier){
    throw new Error("Utilisation du panier sans la mise en place du provider")
}
return contextPanier

}


export {ContextPanier, ContextPanierProvider, usePanier}
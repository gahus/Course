// src/hooks/usePanier.ts

import { useState, useEffect } from "react";

// Service panier pour le cartouche paniers
import { panierService } from "../Services/panierService";

import type {PaniersComplets} from '../types/paniers'

// Le hook personnalisé Paniers (cartouche paniers)
export const usePaniers = () => {

  // Etat du loader
  const [loading, setLoading] = useState<boolean>(false);
  // Gestionnaire d'erreur
  const [error, setError] = useState<string | null>(null);

  // premier indicateur panier
  const [total, setTotal] = useState<number>(0);

  // la donnée
  const [paniers, setPaniers] = useState<PaniersComplets|null>(null);

  const calculerTotal = (paniers: PaniersComplets) => {
    const somme = paniers.lstEnfants.length
    //articles.reduce((acc, article) => acc + article.quantite, 0);
    setTotal(somme);
  };

  // Appel au service 
  const fetchPanier = async () => {
    // Affichage du loader
    setLoading(true);
    try {
      const data = await panierService.getPaniers();
      setPaniers(data);
      calculerTotal(data);
    } catch (err) {

      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      // retrait du loader
      setLoading(false);
    };

  }

  // Pour test Mise à jour
  const actualiser = async () => {
    try {
      await fetchPanier();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    }
  };





  return { paniers, total, loading, error, actualiser };
};
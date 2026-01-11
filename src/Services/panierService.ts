import type {PaniersComplets} from '../types/paniers'

const API_URL = "http://localhost:3002/paniers";

export const panierService = {

    async getPaniers(): Promise<PaniersComplets> {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Erreur lors de la récupération du panier");
        return response.json();
    },

    async supprimerArticle(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        });
        if (!response.ok) throw new Error("Erreur lors de la suppression de l'article");
    },

}
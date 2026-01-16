const API_URL = "http://localhost:3002/paniers";

// ---------------------------------------------------------
// 1) Lecture complète
// ---------------------------------------------------------
export async function getAllPaniers() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erreur API");
  return res.json();
}

// ---------------------------------------------------------
// 2) Ajout d’un produit dans un panier
// ---------------------------------------------------------
export async function addProduit(panierId: string, produit: any) {
  const data = await getAllPaniers();

  const panier = data.paniers.find((p: any) => p.id === panierId);
  if (!panier) throw new Error("Panier introuvable");

  panier.elements.push(produit);

  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Erreur API");

  return getAllPaniers(); // relecture complète
}

// ---------------------------------------------------------
// 3) Modification d’un produit dans un panier
// ---------------------------------------------------------
export async function updateProduit(
  panierId: string,
  produitId: number,
  updatedFields: any
) {
  const data = await getAllPaniers();

  const panier = data.paniers.find((p: any) => p.id === panierId);
  if (!panier) throw new Error("Panier introuvable");

  const index = panier.elements.findIndex(
    (e: any) => e.type === "Produit" && e.id === produitId
  );

  if (index === -1) throw new Error("Produit introuvable");

  panier.elements[index] = {
    ...panier.elements[index],
    ...updatedFields
  };

  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Erreur API");

  return getAllPaniers();
}

// ---------------------------------------------------------
// 4) Suppression d’un produit dans un panier
// ---------------------------------------------------------
export async function deleteProduit(panierId: string, produitId: number) {
  const data = await getAllPaniers();

  const panier = data.paniers.find((p: any) => p.id === panierId);
  if (!panier) throw new Error("Panier introuvable");

  panier.elements = panier.elements.filter(
    (e: any) => !(e.type === "Produit" && e.id === produitId)
  );

  const res = await fetch(API_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Erreur API");

  return getAllPaniers();
}

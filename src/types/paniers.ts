// Interface pour les produits
interface ProduitPanier {
  sNoPointLivraison: string;
  iIdProduit: number;
  iIdRayon: number;
  iIdFamille: number;
  niIdSousFamille: number;
  sType: string;
  sId: string;
  niIdPhotoEnLigne: number;
  eIncitationLot: number;
  sIdUniqueRayon: string;
  sIdUniquePanier: string;
  iIdElementPresentation: number;
  sLibelleLigne1: string;
  sLibelleLigne2: string;
  iQteDisponible: number;
  sPrixUnitaire: string;
  fAfficherPrixUnitaire: boolean;
  nrPVBRIIDeduit?: number;
  nrPVUnitaireTTC: number;
  sPrixPromo: string;
  sPrixParUniteDeMesure: string;
  fAfficherPrixParUniteMesure: boolean;
  nrPVParUniteDeMesureTTC: number;
  sUrlVignetteProduit: string;
  fEstBRIIActifEtDisponible: boolean;
  fBriiAffichageSticker: boolean;
  sUrlLogoBrii: string;
  sUrlStickerCampagne: string;
  sTexteLogoBRII: string;
  sTexteTooltipLot: string;
  fEstVisiblePictoPromoTEL: boolean;
  sCodeLotHeterogene: string;
  sUrlLogoTEL: string;
  sTexteLogoTel: string;
  sLibellePictoAjouterProduit: string;
  sLibelleUrlNaviguerRayon: string;
  iQuantitePanier: number;
  rTotalAPayer: number;
  sTotalAPayer: string;
  sOrigineZoneDepeche: string;
  fVoirRayon: boolean;
  sUrlVoirRayon: string;
  sUrlRemplacerProduit: string;
  eDisponibilite: number;
  neTypeLotBrii?: number;
  iIdElementPresentationPrincipale: number;
  nfBriiDispo?: boolean;
  fProduitSubstitution: boolean;
  sTexteEcoParticipationPrix: string;
  fAppartientAUneListe: boolean;
  sMsgHeaderPopinAuthen: string;
  fAfficherTexteProduitIndispo: boolean;
  sTexteProduitIndispo: string;
  sTexteProduitIndispoCarte: string;
  fGainsBRD: boolean;
  eTypeComposition: number;
  eTypeProduit: number;
  sCategorie: string;
  sUrlPageProduit: string;
  iQteMinPanier: number;
  iQteMaxPanier: number;
  fEstProduitCategorieCommerciale: boolean;
  dDateLimiteConsoPopinAg: string;
  fEstAntiGaspi: boolean;
  fEstPanierAntiGaspi: boolean;
  sMotifAntiGaspi: string;
  sUrlLogoTexteAntiGaspi: string;
  sUrlLogoReductionAntiGaspi: string;
  sUniteMesureTotale: string;
  sUniteMesure: string;
  nrContenanceUnitaire: number;
  nrContenanceTotale: number;
  sIdUnique: string;
  nrMontantEcoParticipation?: number;
  sDateDisponibleMin?: string;
  ndDateDisponibleMin?: string;
}

// Interface pour les BRII hétérogènes
interface BriiHeterogene {
  sType: string;
  sId: string;
  iIdRayon: number;
  iQuantitePanier: number;
  iNbGratuits: number;
  iNbProduitsManquants: number;
  iNbUniteProduitsManquants: number;
  rGainsBrii: number;
  sIdUniquePanier: string;
  sNoPointLivraison: string;
  fEstBriiDispo: boolean;
  sIdUniqueRayon: string;
  iCodeBrii: number;
  iQuantiteRequise: number;
  eCommunicationGains: number;
  eIncitationLot: number;
  iNbLotsRealises: number;
  sTotalAPayer: string;
  sGainsBrii: string;
  sUrlLogoBrii: string;
  fCommunicationNbProduitsManquants: boolean;
  fCommunicationGains: boolean;
  fEstBRIIProgessif: boolean;
  fBriiAffichageSticker: boolean;
  sIdUnique: string;
}

// Interface pour les paniers
interface PanierCartouche {
  fEstPanierCourant: boolean;
  fEstVide: boolean;
  sNoPointLivraison: string;
  sType: string;
  sId: string;
  fSynchronisationPanierDriveAvecPanierCentral?: boolean;
  sCssUnivers: string;
  dModifDateHeure: string;
  dRechargementCompletDateHeure: string;
  ndDateHeureActualisationContexteBRD?: string;
  ndDateHeureActualisationContexteCoupon?: string;
  fClientPorteur: boolean;
  iQuantitePanier: number;
  sTotalHorsReductions: string;
  sTotalAPayer: string;
  rGainsBrii: number;
  rReductionsAntiGaspi: number;
  rMontantEconomies: number;
  sMontantEconomies: string;
  dTotalReductionBRD: number;
  sTotalReductionBRD: string;
  rMontantTEL: number;
  fEstDrive: boolean;
  sGainsTel: string;
  rNBrNbArticlesMarqueRepereSurPalierSuivant: number;
  rMontantAvantageMarqueRepereSurPalierSuivant: number;
  fDernierPalierMRAtteint: boolean;
  sDateProchainRetraitDisponible: string;
  fAfficherTexteProduitIndispo: boolean;
  fQuantiteDisponibleDepassee: boolean;
  sLibelleEntetePanier: string;
  iNbProduitIndisponible: number;
  iNbProduitAntiGaspiIndisponible: number;
  sIdUnique: string;
  ndDateHeureRetrait?: string;
  sDateRetrait?: string;
  ndDateMinDispo?: string;
  ndDateMinDispoPartielle?: string;
  lstProduitsLight?: Array<{
    iIdProduit: number;
    iQtePanier: number;
    iQteDisponible: number;
    fQuantiteMax: boolean;
    rTotalAPayer: number;
    niIdElementPresentationPrincipal: number;
  }>;
}

// Interface pour les éléments avec enfants
interface ElementAvecEnfants<T> {
  objElement: T;
  lstEnfants: ElementAvecEnfants<any>[];
}

// Interface pour la racine
interface PaniersComplets {
  objElement: {
    fMasquagePanierVide: boolean;
    fMonoUnivers: boolean;
    fForcerAffichageCompteurTel: boolean;
    sTotalAPayer: string;
    sMontantEconomies: string;
    iQuantitePanier: number;
    sType: string;
    sId: string;
    lstPanier: PanierCartouche[];
    rMontantTel: number;
    sIdUnique: string;
  };
  lstEnfants: ElementAvecEnfants<PanierCartouche | BriiHeterogene | ProduitPanier>[];
}


export { type PaniersComplets, type PanierCartouche, type ProduitPanier, type BriiHeterogene, type ElementAvecEnfants};
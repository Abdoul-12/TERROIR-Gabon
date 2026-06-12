// ===== DONNÉES COMMANDES PAR DÉFAUT =====
const COMMANDES_DEFAUT = [
  {
    id: 1,
    client: 'Jean-Pierre Nzamba',
    image: '/src/image/miel.png',
    resume: 'Miel sauvage ×2, Masque bwiti ×1',
    date: '12/01/2025',
    paiement: 'Airtel Money',
    total: 57780,
    netProducteur: 49220,
    commission: 4280,
    statut: 'en_attente',
  },
  {
    id: 2,
    client: 'Aïcha Moukagni',
    image: '/src/image/beurre.png',
    resume: 'Beurre de karité ×2, Savon naturel ×1',
    date: '11/01/2025',
    paiement: 'Moov Money',
    total: 21980,
    netProducteur: 20220,
    commission: 1760,
    statut: 'verse',
  },
  {
    id: 3,
    client: 'Patrick Obiang',
    image: '/src/image/masque.png',
    resume: 'Sculpture okoumé ×1',
    date: '10/01/2025',
    paiement: 'Airtel Money',
    total: 48600,
    netProducteur: 41400,
    commission: 3600,
    statut: 'en_attente',
  },
  {
    id: 4,
    client: 'Rose Bengone',
    image: '/src/image/artisanal.png',
    resume: 'Panier tressé ×3',
    date: '09/01/2025',
    paiement: 'Moov Money',
    total: 39960,
    netProducteur: 33120,
    commission: 2880,
    statut: 'verse',
  },
  {
    id: 5,
    client: 'Mireille Nkoghe',
    image: '/src/image/piment.png',
    resume: 'Piment okoumé ×4',
    date: '08/01/2025',
    paiement: 'Airtel Money',
    total: 18400,
    netProducteur: 16928,
    commission: 1472,
    statut: 'en_attente',
  },
  {
    id: 6,
    client: 'Brice Mapangou',
    image: '/src/image/cosmetique.png',
    resume: 'Huile naturelle ×2',
    date: '07/01/2025',
    paiement: 'Moov Money',
    total: 32600,
    netProducteur: 29992,
    commission: 2608,
    statut: 'verse',
  },
  {
    id: 7,
    client: 'Nadia Ella',
    image: '/src/image/miel.png',
    resume: 'Miel sauvage ×3',
    date: '06/01/2025',
    paiement: 'Airtel Money',
    total: 42000,
    netProducteur: 38640,
    commission: 3360,
    statut: 'verse',
  },
  {
    id: 8,
    client: 'Arnaud Mba',
    image: '/src/image/masque.png',
    resume: 'Masque bwiti ×1',
    date: '05/01/2025',
    paiement: 'Moov Money',
    total: 35000,
    netProducteur: 32200,
    commission: 2800,
    statut: 'en_attente',
  },
  {
    id: 9,
    client: 'Carine Mintsa',
    image: '/src/image/beurre.png',
    resume: 'Beurre de karité ×3',
    date: '04/01/2025',
    paiement: 'Airtel Money',
    total: 25500,
    netProducteur: 23460,
    commission: 2040,
    statut: 'verse',
  },
  {
    id: 10,
    client: 'Fabrice Ndong',
    image: '/src/image/agricol.png',
    resume: 'Produits agricoles ×2',
    date: '03/01/2025',
    paiement: 'Moov Money',
    total: 56000,
    netProducteur: 51520,
    commission: 4480,
    statut: 'verse',
  },
  {
    id: 11,
    client: 'Laure Akoue',
    image: '/src/image/cosmetique.png',
    resume: 'Cosmétique naturel ×2',
    date: '02/01/2025',
    paiement: 'Airtel Money',
    total: 39400,
    netProducteur: 36248,
    commission: 3152,
    statut: 'verse',
  },
  {
    id: 12,
    client: 'Didier Mouele',
    image: '/src/image/artisanal.png',
    resume: 'Article artisanal ×2',
    date: '01/01/2025',
    paiement: 'Moov Money',
    total: 70000,
    netProducteur: 64400,
    commission: 5600,
    statut: 'verse',
  },
]

// ===== INITIALISATION =====
initialiserCommandes()
afficherDashboard()
mettreAJourCompteurPanier()
gererVersements()

// ===== AFFICHAGE DASHBOARD =====
function afficherDashboard() {
  const commandes = lireCommandes().map(normaliserCommande)

  afficherStatistiques(commandes)
}

// ===== AFFICHAGE STATISTIQUES =====
function afficherStatistiques(commandes) {
  const totalCommandes = commandes.length
  const revenus = commandes.reduce((total, commande) => total + commande.total, 0)
  const commissions = commandes.reduce((total, commande) => total + commande.commission, 0)
  const enAttente = commandes.filter((commande) => commande.statut === 'en_attente').length

  document.querySelector('[data-total-commandes]').textContent = totalCommandes
  document.querySelector('[data-revenus]').textContent = `${Math.round(revenus / 1000)}k F`
  document.querySelector('[data-en-attente]').textContent = enAttente
  document.querySelector('[data-commissions]').textContent = `${Math.round(commissions / 1000)}k F`
}

// ===== AFFICHAGE COMMANDES RÉCENTES =====
function afficherCommandesRecentes(commandes) {
  const conteneur = document.querySelector('[data-commandes-liste]')

  if (commandes.length === 0) {
    conteneur.innerHTML = '<p class="commandes-vide">Aucune commande enregistrée.</p>'
    return
  }

  conteneur.innerHTML = commandes.map(creerLigneCommande).join('')
}

// ===== CRÉATION LIGNE COMMANDE =====
function creerLigneCommande(commande) {
  const estVersee = commande.statut === 'verse'
  const statutClasse = estVersee ? 'verse' : 'attente'
  const statutTexte = estVersee ? 'Versé' : 'En attente'
  const boutonVersement = estVersee
    ? ''
    : `<button class="btn-verser" type="button" data-verser="${commande.cle}">Verser au producteur →</button>`

  return `
    <article class="commande-ligne">
      <div class="commande-image">
        <img src="${commande.image}" alt="${commande.resume}" />
      </div>

      <div class="commande-infos">
        <h3>${commande.client}</h3>
        <p>${commande.resume} · ${commande.date} · ${commande.paiement}</p>

        <div class="commande-actions">
          <span class="badge-commande ${statutClasse}">
            ${estVersee ? '✓' : ''}
            ${statutTexte}
          </span>
          ${boutonVersement}
        </div>
      </div>

      <div class="commande-montants">
        <strong class="commande-total">${formaterPrix(commande.total)}</strong>
        <span class="commande-net">Net producteur : ${formaterPrix(commande.netProducteur)}</span>
        <span class="commande-commission">Commission : ${formaterPrix(commande.commission)}</span>
      </div>
    </article>
  `
}

// ===== GESTION VERSEMENTS =====
function gererVersements() {
  const listeCommandes = document.querySelector('[data-commandes-liste]')

  if (!listeCommandes) return

  listeCommandes.addEventListener('click', (event) => {
    const bouton = event.target.closest('[data-verser]')

    if (!bouton) return

    verserAuProducteur(bouton.dataset.verser)
  })
}

// ===== VERSEMENT PRODUCTEUR =====
function verserAuProducteur(cleCommande) {
  const commandes = lireCommandes()
  const indexCommande = commandes.findIndex((commande, index) => obtenirCleCommande(commande, index) === cleCommande)

  if (indexCommande === -1) return

  commandes[indexCommande].statut = 'verse'
  commandes[indexCommande].versement_statut = 'verse'
  commandes[indexCommande].date_versement = new Date().toISOString()

  ecrireCommandes(commandes)
  afficherDashboard()
  afficherNotification('Versement au producteur confirmé')
}

// ===== NORMALISATION COMMANDE =====
function normaliserCommande(commande, index) {
  const panier = commande.panier || []
  const client = typeof commande.client === 'string'
    ? commande.client
    : `${commande.client?.prenom || 'Client'} ${commande.client?.nom || ''}`.trim()
  const montants = commande.montants || {}

  return {
    cle: obtenirCleCommande(commande, index),
    client,
    image: commande.image || panier[0]?.image || '/src/image/miel.png',
    resume: commande.resume || creerResumePanier(panier),
    date: formaterDateCommande(commande.date),
    paiement: commande.paiement?.moyen || commande.paiement || 'Mobile Money',
    total: Number(commande.total || montants.totalClient || 0),
    netProducteur: Number(commande.netProducteur || montants.netProd || 0),
    commission: Number(commande.commission || montants.commission || 0),
    statut: commande.versement_statut || commande.statut || 'en_attente',
  }
}

// ===== CLÉ COMMANDE =====
function obtenirCleCommande(commande, index) {
  return String(commande.reference || commande.id || index)
}

// ===== RÉSUMÉ PANIER =====
function creerResumePanier(panier) {
  if (panier.length === 0) {
    return 'Commande sans détail'
  }

  return panier.map((produit) => `${produit.nom} ×${produit.quantite}`).join(', ')
}

// ===== FORMATAGE DATE COMMANDE =====
function formaterDateCommande(date) {
  if (!date || date.includes('/')) {
    return date || ''
  }

  return new Date(date).toLocaleDateString('fr-FR')
}

// ===== NOTIFICATION DASHBOARD =====
function afficherNotification(message) {
  const notification = document.querySelector('[data-notification-dashboard]')
  const texte = document.querySelector('[data-notification-message]')

  texte.textContent = message
  notification.classList.add('visible')

  setTimeout(() => {
    notification.classList.remove('visible')
  }, 3000)
}

// ===== COMPTEUR PANIER =====
function mettreAJourCompteurPanier() {
  const panier = JSON.parse(localStorage.getItem('tg_panier')) || []
  const total = panier.reduce((somme, produit) => somme + (produit.quantite || 0), 0)

  document.querySelector('[data-compteur-panier]').textContent = total
}

// ===== LECTURE COMMANDES =====
function lireCommandes() {
  return JSON.parse(localStorage.getItem('tg_commandes')) || []
}

// ===== ÉCRITURE COMMANDES =====
function ecrireCommandes(commandes) {
  localStorage.setItem('tg_commandes', JSON.stringify(commandes))
}

// ===== INITIALISATION COMMANDES =====
function initialiserCommandes() {
  if (!localStorage.getItem('tg_commandes')) {
    ecrireCommandes(COMMANDES_DEFAUT)
  }
}

// ===== FORMATAGE PRIX =====
function formaterPrix(prix) {
  return `${Number(prix).toLocaleString('fr-FR')} FCFA`
}

// ===== DONNÉES INITIALES DES ONGLET =====
const PRODUITS_ADMIN_DEFAUT = [
  {
    id: 1,
    nom: 'Miel sauvage',
    prix: 5000,
    description: 'Miel naturel récolté en forêt.',
    categorie: 'agricole',
    producteur: 'Jean Moussavou',
    ville: 'Lambaréné',
    province: 'Moyen-Ogooué',
    statut: 'publie',
  },
  {
    id: 2,
    nom: 'Masque bwiti',
    prix: 35000,
    description: 'Masque artisanal inspiré du patrimoine gabonais.',
    categorie: 'artisanal',
    producteur: 'Marie Ondo',
    ville: 'Lastoursville',
    province: 'Ogooué-Lolo',
    statut: 'publie',
  },
  {
    id: 3,
    nom: 'Beurre de karité',
    prix: 8500,
    description: 'Soin naturel pour la peau.',
    categorie: 'cosmetique',
    producteur: 'Sophie Nzamba',
    ville: 'Libreville',
    province: 'Estuaire',
    statut: 'en_attente',
  },
  {
    id: 4,
    nom: 'Piment okoumé',
    prix: 2500,
    description: 'Piment local cultivé au Gabon.',
    categorie: 'agricole',
    producteur: 'Paul Kombila',
    ville: 'Mouila',
    province: 'Ngounié',
    statut: 'publie',
  },
]

const PRODUCTEURS_ADMIN_DEFAUT = [
  {
    id: 1,
    nom: 'Jean Moussavou',
    specialite: 'Apiculture',
    ville: 'Lambaréné',
    province: 'Moyen-Ogooué',
    whatsapp: '+241 07 00 00 01',
    initiales: 'JM',
    couleur_avatar: '#2E7D32',
  },
  {
    id: 2,
    nom: 'Marie Ondo',
    specialite: 'Artisanat',
    ville: 'Lastoursville',
    province: 'Ogooué-Lolo',
    whatsapp: '+241 07 00 00 02',
    initiales: 'MO',
    couleur_avatar: '#F9A825',
  },
  {
    id: 3,
    nom: 'Sophie Nzamba',
    specialite: 'Cosmétique',
    ville: 'Libreville',
    province: 'Estuaire',
    whatsapp: '+241 07 00 00 03',
    initiales: 'SN',
    couleur_avatar: '#1B5E20',
  },
]

const PROVINCES_ADMIN = [
  'Estuaire',
  'Haut-Ogooué',
  'Moyen-Ogooué',
  'Ngounié',
  'Nyanga',
  'Ogooué-Ivindo',
  'Ogooué-Lolo',
  'Ogooué-Maritime',
  'Woleu-Ntem',
]

let filtreProduitActif = 'tous'

// ===== INITIALISATION DES ONGLET =====
initialiserGestionAdmin()
remplirProvincesAdmin()
chargerProducteurs()
chargerProduits()
gererOngletsGestion()
gererFiltresProduits()
gererActionsProduitsAdmin()
gererActionsProducteursAdmin()
gererFormulaireProduitAdmin()
gererBoutonAjouterProducteur()

// ===== GESTION DES ONGLETS =====
function afficherOnglet(nom) {
  document.querySelectorAll('[data-gestion-onglet]').forEach((onglet) => {
    onglet.classList.toggle('actif', onglet.dataset.gestionOnglet === nom)
  })

  document.querySelectorAll('[data-gestion-panneau]').forEach((panneau) => {
    panneau.classList.toggle('actif', panneau.dataset.gestionPanneau === nom)
  })
}

// ===== CHARGEMENT DES PRODUITS =====
function chargerProduits() {
  const produits = lireStorage('tg_produits')
  const produitsFiltres = filtreProduitActif === 'tous'
    ? produits
    : produits.filter((produit) => produit.categorie === filtreProduitActif)
  const conteneur = document.querySelector('[data-liste-produits-admin]')

  if (produitsFiltres.length === 0) {
    conteneur.innerHTML = '<p class="gestion-vide">Aucun produit enregistré.</p>'
    return
  }

  conteneur.innerHTML = produitsFiltres.map(creerLigneProduitAdmin).join('')
}

// ===== FILTRE PAR CATÉGORIE =====
function filtrerProduits(categorie) {
  filtreProduitActif = categorie

  document.querySelectorAll('[data-filtre-produit]').forEach((filtre) => {
    filtre.classList.toggle('actif', filtre.dataset.filtreProduit === categorie)
  })

  chargerProduits()
}

// ===== PUBLIER UN PRODUIT =====
function publierProduit(id) {
  const produits = lireStorage('tg_produits')
  const produit = produits.find((element) => element.id === id)

  if (!produit) return

  produit.statut = 'publie'
  ecrireStorage('tg_produits', produits)
  chargerProduits()
  afficherNotificationGestion('Produit publié avec succès')
}

// ===== DÉPUBLIER UN PRODUIT =====
function depublierProduit(id) {
  const produits = lireStorage('tg_produits')
  const produit = produits.find((element) => element.id === id)

  if (!produit) return

  produit.statut = 'en_attente'
  ecrireStorage('tg_produits', produits)
  chargerProduits()
  afficherNotificationGestion('Produit remis en attente')
}

// ===== SUPPRIMER UN PRODUIT =====
function supprimerProduit(id) {
  const produits = lireStorage('tg_produits').filter((produit) => produit.id !== id)

  ecrireStorage('tg_produits', produits)
  chargerProduits()
  afficherNotificationGestion('Produit supprimé avec succès')
}

// ===== ENREGISTRER UN PRODUIT =====
function enregistrerProduit(event) {
  event.preventDefault()

  const formulaire = event.currentTarget
  const donnees = new FormData(formulaire)
  const nom = donnees.get('nom').trim()
  const prix = Number(donnees.get('prix'))

  if (!nom || !prix) {
    alert('Remplir les champs')
    return
  }

  const produits = lireStorage('tg_produits')
  produits.push({
    id: Date.now(),
    nom,
    prix,
    description: donnees.get('description').trim(),
    categorie: donnees.get('categorie'),
    producteur: donnees.get('producteur'),
    ville: donnees.get('ville').trim(),
    province: donnees.get('province'),
    statut: 'en_attente',
  })

  ecrireStorage('tg_produits', produits)
  formulaire.reset()
  chargerProduits()
  afficherOnglet('produits')
  afficherNotificationGestion('Produit enregistré — en attente de publication')
}

// ===== CHARGEMENT DES PRODUCTEURS =====
function chargerProducteurs() {
  const producteurs = lireStorage('tg_producteurs')
  const conteneur = document.querySelector('[data-liste-producteurs-admin]')

  remplirSelectProducteursAdmin(producteurs)

  if (producteurs.length === 0) {
    conteneur.innerHTML = '<p class="gestion-vide">Aucun producteur enregistré.</p>'
    return
  }

  conteneur.innerHTML = producteurs.map(creerLigneProducteurAdmin).join('')
}

// ===== SUPPRIMER UN PRODUCTEUR =====
function supprimerProducteur(id) {
  const producteurs = lireStorage('tg_producteurs').filter((producteur) => producteur.id !== id)

  ecrireStorage('tg_producteurs', producteurs)
  chargerProducteurs()
  afficherNotificationGestion('Producteur supprimé avec succès')
}

// ===== NOTIFICATION =====
function afficherNotificationGestion(message) {
  const notification = document.querySelector('[data-notification-gestion]')
  const texte = document.querySelector('[data-notification-gestion-message]')

  texte.textContent = message
  notification.classList.add('visible')

  setTimeout(() => {
    notification.classList.remove('visible')
  }, 3000)
}

// ===== UTILITAIRES localStorage =====
function lireStorage(cle) {
  return JSON.parse(localStorage.getItem(cle)) || []
}

// ===== ÉCRITURE localStorage =====
function ecrireStorage(cle, data) {
  localStorage.setItem(cle, JSON.stringify(data))
}

// ===== CRÉATION LIGNE PRODUIT ADMIN =====
function creerLigneProduitAdmin(produit) {
  const publie = produit.statut === 'publie'
  const statutTexte = publie ? 'Publié' : 'En attente'
  const iconeStatut = publie ? 'ti-eye' : 'ti-clock'
  const actionStatut = publie ? 'depublier' : 'publier'
  const iconeAction = publie ? 'ti-eye-off' : 'ti-eye'

  return `
    <article class="gestion-ligne-produit">
      <span class="gestion-icone-categorie ${produit.categorie}">
        <i class="ti ${iconeCategorieAdmin(produit.categorie)}"></i>
      </span>

      <div class="gestion-produit-infos">
        <strong>${produit.nom}</strong>
        <div class="gestion-produit-meta">
          <span><i class="ti ti-map-pin"></i>${produit.ville}, ${produit.province}</span>
          <span><i class="ti ti-user"></i>${produit.producteur}</span>
        </div>
      </div>

      <strong class="gestion-prix-produit">${formaterPrix(produit.prix)}</strong>

      <span class="gestion-badge-statut ${produit.statut}">
        <i class="ti ${iconeStatut}"></i>
        ${statutTexte}
      </span>

      <div class="gestion-actions-ligne">
        <button class="gestion-btn-icone" type="button" aria-label="Modifier ${produit.nom}">
          <i class="ti ti-pencil"></i>
        </button>
        <button class="gestion-btn-icone ${actionStatut}" type="button" data-action-produit-admin="${actionStatut}" data-id="${produit.id}" aria-label="${statutTexte}">
          <i class="ti ${iconeAction}"></i>
        </button>
        <button class="gestion-btn-icone supprimer" type="button" data-action-produit-admin="supprimer" data-id="${produit.id}" aria-label="Supprimer ${produit.nom}">
          <i class="ti ti-trash"></i>
        </button>
      </div>
    </article>
  `
}

// ===== CRÉATION LIGNE PRODUCTEUR ADMIN =====
function creerLigneProducteurAdmin(producteur) {
  return `
    <article class="gestion-ligne-producteur">
      <span class="gestion-avatar-producteur" style="background:${producteur.couleur_avatar || '#2E7D32'}">
        ${obtenirInitiales(producteur)}
      </span>

      <div class="gestion-producteur-infos">
        <strong>${producteur.nom}</strong>
        <div class="gestion-producteur-meta">
          <span><i class="ti ti-map-pin"></i>${producteur.ville}</span>
          <span><i class="ti ti-brand-whatsapp"></i>${producteur.whatsapp}</span>
        </div>
      </div>

      <span class="gestion-badge-specialite">
        <i class="ti ${iconeSpecialiteAdmin(producteur.specialite)}"></i>
        ${producteur.specialite}
      </span>

      <div class="gestion-actions-ligne">
        <span class="gestion-badge-actif">
          <i class="ti ti-circle-check"></i>
          Actif
        </span>
        <button class="gestion-btn-icone" type="button" aria-label="Modifier ${producteur.nom}">
          <i class="ti ti-pencil"></i>
        </button>
        <button class="gestion-btn-icone supprimer" type="button" data-action-producteur-admin="supprimer" data-id="${producteur.id}" aria-label="Supprimer ${producteur.nom}">
          <i class="ti ti-trash"></i>
        </button>
      </div>
    </article>
  `
}

// ===== CLICS ONGLET GESTION =====
function gererOngletsGestion() {
  document.querySelectorAll('[data-gestion-onglet]').forEach((onglet) => {
    onglet.addEventListener('click', () => afficherOnglet(onglet.dataset.gestionOnglet))
  })
}

// ===== CLICS FILTRES PRODUITS =====
function gererFiltresProduits() {
  document.querySelectorAll('[data-filtre-produit]').forEach((filtre) => {
    filtre.addEventListener('click', () => filtrerProduits(filtre.dataset.filtreProduit))
  })
}

// ===== CLICS ACTIONS PRODUITS =====
function gererActionsProduitsAdmin() {
  document.querySelector('[data-liste-produits-admin]').addEventListener('click', (event) => {
    const bouton = event.target.closest('[data-action-produit-admin]')

    if (!bouton) return

    const id = Number(bouton.dataset.id)
    const action = bouton.dataset.actionProduitAdmin

    if (action === 'publier') publierProduit(id)
    if (action === 'depublier') depublierProduit(id)
    if (action === 'supprimer') supprimerProduit(id)
  })
}

// ===== CLICS ACTIONS PRODUCTEURS =====
function gererActionsProducteursAdmin() {
  document.querySelector('[data-liste-producteurs-admin]').addEventListener('click', (event) => {
    const bouton = event.target.closest('[data-action-producteur-admin]')

    if (!bouton) return

    if (bouton.dataset.actionProducteurAdmin === 'supprimer') {
      supprimerProducteur(Number(bouton.dataset.id))
    }
  })
}

// ===== FORMULAIRE PRODUIT ADMIN =====
function gererFormulaireProduitAdmin() {
  document.querySelector('[data-form-produit-admin]').addEventListener('submit', enregistrerProduit)
}

// ===== BOUTON AJOUTER PRODUCTEUR =====
function gererBoutonAjouterProducteur() {
  document.querySelector('[data-ajouter-producteur]').addEventListener('click', () => {
    afficherOnglet('ajouter-produit')
  })
}

// ===== INITIALISATION DONNÉES ADMIN =====
function initialiserGestionAdmin() {
  if (!localStorage.getItem('tg_produits')) {
    ecrireStorage('tg_produits', PRODUITS_ADMIN_DEFAUT)
  }

  if (!localStorage.getItem('tg_producteurs')) {
    ecrireStorage('tg_producteurs', PRODUCTEURS_ADMIN_DEFAUT)
  }
}

// ===== SELECT PROVINCES ADMIN =====
function remplirProvincesAdmin() {
  document.querySelector('[data-select-provinces-admin]').innerHTML = PROVINCES_ADMIN
    .map((province) => `<option value="${province}">${province}</option>`)
    .join('')
}

// ===== SELECT PRODUCTEURS ADMIN =====
function remplirSelectProducteursAdmin(producteurs) {
  document.querySelector('[data-select-producteurs-admin]').innerHTML = producteurs
    .map((producteur) => `<option value="${producteur.nom}">${producteur.nom}</option>`)
    .join('')
}

// ===== ICÔNE CATÉGORIE ADMIN =====
function iconeCategorieAdmin(categorie) {
  if (categorie === 'agricole') return 'ti-plant-2'
  if (categorie === 'artisanal') return 'ti-brush'
  return 'ti-sparkles'
}

// ===== ICÔNE SPÉCIALITÉ ADMIN =====
function iconeSpecialiteAdmin(specialite) {
  const valeur = String(specialite).toLowerCase()

  if (valeur.includes('apiculture') || valeur.includes('agricole')) return 'ti-leaf'
  if (valeur.includes('artisan')) return 'ti-brush'
  if (valeur.includes('cosm')) return 'ti-sparkles'
  if (valeur.includes('épice') || valeur.includes('epice')) return 'ti-plant-2'
  return 'ti-star'
}

// ===== INITIALES PRODUCTEUR =====
function obtenirInitiales(producteur) {
  if (producteur.initiales) {
    return producteur.initiales.slice(0, 2).toUpperCase()
  }

  return producteur.nom
    .split(' ')
    .map((mot) => mot[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

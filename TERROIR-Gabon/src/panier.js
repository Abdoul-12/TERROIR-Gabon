// ===== DONNÉES PAR DÉFAUT DU PANIER =====
const PANIER_DEFAUT = [
  {
    id: 1,
    nom: 'Miel sauvage',
    image: '/src/image/miel.png',
    icone: '🍯',
    prix: 5000,
    quantite: 2,
    origine_ville: 'Lambaréné',
    origine_province: 'Moyen-Ogooué',
    producteur: 'Jean Moussavou',
  },
  {
    id: 2,
    nom: 'Masque bwiti',
    image: '/src/image/masque.png',
    icone: '🪵',
    prix: 35000,
    quantite: 1,
    origine_ville: 'Lastoursville',
    origine_province: 'Ogooué-Lolo',
    producteur: 'Marie Ondo',
  },
  {
    id: 3,
    nom: 'Beurre de karité',
    image: '/src/image/beurre.png',
    icone: '🧴',
    prix: 8500,
    quantite: 1,
    origine_ville: 'Libreville',
    origine_province: 'Estuaire',
    producteur: 'Sophie Nzamba',
  },
]

// ===== FORMATAGE DU PRIX =====
function formaterPrix(prix) {
  return `${prix.toLocaleString('fr-FR')} FCFA`
}

// ===== LECTURE DU PANIER =====
function obtenirPanier() {
  const panierBrut = localStorage.getItem('tg_panier')

  if (panierBrut) {
    return JSON.parse(panierBrut)
  }

  return [...PANIER_DEFAUT]
}

// ===== SAUVEGARDE DU PANIER =====
function sauvegarderPanier(panier) {
  localStorage.setItem('tg_panier', JSON.stringify(panier))
}

// ===== CALCUL DU SOUS-TOTAL =====
function calculerSousTotal(panier) {
  return panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0)
}

// ===== CALCUL DU NOMBRE D'ARTICLES =====
function calculerNombreArticles(panier) {
  return panier.length
}

// ===== CRÉATION IMAGE ARTICLE =====
function creerImageArticle(produit) {
  if (produit.image) {
    return `<img src="${produit.image}" alt="${produit.nom}" />`
  }

  return `<span>${produit.icone || 'Image'}</span>`
}

// ===== AFFICHAGE DES ARTICLES =====
function afficherArticles() {
  const panier = obtenirPanier()
  const conteneur = document.querySelector('[data-panier-liste]')

  if (panier.length === 0) {
    conteneur.innerHTML = `
      <div class="panier-vide">
        Votre panier est vide.
      </div>
    `
    return
  }

  conteneur.innerHTML = panier.map((produit) => `
    <article class="article-panier">
      <!-- ===== IMAGE ARTICLE ===== -->
      <div class="article-image">
        ${creerImageArticle(produit)}
      </div>

      <!-- ===== INFORMATIONS ARTICLE ===== -->
      <div class="article-info">
        <h2>${produit.nom}</h2>
        <p>📍 ${produit.origine_ville}, ${produit.origine_province} · ${produit.producteur || 'Producteur local'}</p>

        <div class="article-quantite">
          <button class="btn-quantite" type="button" data-action="moins" data-id="${produit.id}">−</button>
          <strong>${produit.quantite}</strong>
          <button class="btn-quantite" type="button" data-action="plus" data-id="${produit.id}">+</button>
        </div>
      </div>

      <!-- ===== PRIX ARTICLE ===== -->
      <strong class="article-prix">${formaterPrix(produit.prix * produit.quantite)}</strong>

      <!-- ===== SUPPRIMER ARTICLE ===== -->
      <button class="btn-supprimer" type="button" aria-label="Supprimer ${produit.nom}" data-action="supprimer" data-id="${produit.id}">×</button>
    </article>
  `).join('')
}

// ===== AFFICHAGE RÉCAPITULATIF =====
function afficherRecapitulatif() {
  const panier = obtenirPanier()
  const sousTotal = calculerSousTotal(panier)
  const commission = sousTotal * 0.08
  const totalClient = sousTotal + commission

  document.querySelector('[data-total-articles]').textContent = calculerNombreArticles(panier)
  document.querySelector('[data-compteur-panier]').textContent = calculerNombreArticles(panier)
  document.querySelector('[data-sous-total]').textContent = formaterPrix(sousTotal)
  document.querySelector('[data-commission]').textContent = formaterPrix(commission)
  document.querySelector('[data-total-client]').textContent = formaterPrix(totalClient)

  document.querySelector('[data-recap-lignes]').innerHTML = panier.map((produit) => `
    <div class="recap-ligne">
      <span>${produit.icone || ''} ${produit.nom} ×${produit.quantite}</span>
      <strong>${formaterPrix(produit.prix * produit.quantite)}</strong>
    </div>
  `).join('')
}

// ===== CHANGEMENT DE QUANTITÉ =====
function changerQuantite(idProduit, direction) {
  const panier = obtenirPanier()
  const produit = panier.find((element) => element.id === idProduit)

  if (!produit) return

  if (direction === 'plus') {
    produit.quantite += 1
  }

  if (direction === 'moins' && produit.quantite > 1) {
    produit.quantite -= 1
  }

  sauvegarderPanier(panier)
  afficherPagePanier()
}

// ===== SUPPRESSION D'UN ARTICLE =====
function supprimerDuPanier(idProduit) {
  const panier = obtenirPanier().filter((produit) => produit.id !== idProduit)

  sauvegarderPanier(panier)
  afficherPagePanier()
}

// ===== GESTION DES CLICS PANIER =====
function gererActionsPanier() {
  document.querySelector('[data-panier-liste]').addEventListener('click', (event) => {
    const bouton = event.target.closest('button')

    if (!bouton) return

    const idProduit = Number(bouton.dataset.id)
    const action = bouton.dataset.action

    if (action === 'plus' || action === 'moins') {
      changerQuantite(idProduit, action)
    }

    if (action === 'supprimer') {
      supprimerDuPanier(idProduit)
    }
  })
}

// ===== AFFICHAGE COMPLET PAGE PANIER =====
function afficherPagePanier() {
  afficherArticles()
  afficherRecapitulatif()
}

// ===== INITIALISATION PAGE PANIER =====
afficherPagePanier()
gererActionsPanier()

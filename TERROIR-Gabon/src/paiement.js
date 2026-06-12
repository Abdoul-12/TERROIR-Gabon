// ===== DONNÉES PAR DÉFAUT DU PANIER =====
const PANIER_DEFAUT = [
  {
    id: 1,
    nom: 'Miel',
    icone: '🍯',
    prix: 5000,
    quantite: 2,
  },
  {
    id: 2,
    nom: 'Masque',
    icone: '🪵',
    prix: 35000,
    quantite: 1,
  },
  {
    id: 3,
    nom: 'Karité',
    icone: '🧴',
    prix: 8500,
    quantite: 1,
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

// ===== SAUVEGARDE DES COMMANDES =====
function sauvegarderCommande(commande) {
  const commandes = JSON.parse(localStorage.getItem('tg_commandes')) || []

  commandes.push(commande)
  localStorage.setItem('tg_commandes', JSON.stringify(commandes))
}

// ===== CALCUL DU SOUS-TOTAL =====
function calculerSousTotal(panier) {
  return panier.reduce((total, produit) => total + produit.prix * produit.quantite, 0)
}

// ===== CALCUL DU NOMBRE D'ARTICLES =====
function calculerNombreArticles(panier) {
  return panier.reduce((total, produit) => total + produit.quantite, 0)
}

// ===== CRÉATION DE LA RÉFÉRENCE =====
function creerReferenceCommande() {
  const chiffres = Math.floor(100000 + Math.random() * 900000)

  return `TG-${chiffres}`
}

// ===== AFFICHAGE DU RÉCAPITULATIF =====
function afficherRecapitulatif() {
  const panier = obtenirPanier()
  const sousTotal = calculerSousTotal(panier)
  const commission = sousTotal * 0.08
  const totalClient = sousTotal + commission

  document.querySelector('[data-compteur-panier]').textContent = calculerNombreArticles(panier)
  document.querySelector('[data-sous-total]').textContent = formaterPrix(sousTotal)
  document.querySelector('[data-commission]').textContent = formaterPrix(commission)
  document.querySelector('[data-total-client]').textContent = formaterPrix(totalClient)
  document.querySelector('[data-total-bouton]').textContent = formaterPrix(totalClient)

  document.querySelector('[data-recap-lignes]').innerHTML = panier.map((produit) => `
    <div class="paiement-recap-ligne">
      <span>${produit.icone || ''} ${produit.nom} ×${produit.quantite}</span>
      <strong>${formaterPrix(produit.prix * produit.quantite)}</strong>
    </div>
  `).join('')
}

// ===== MISE À JOUR MÉTHODE ACTIVE =====
function gererMethodesPaiement() {
  document.querySelectorAll('.methode-paiement input').forEach((champ) => {
    champ.addEventListener('change', () => {
      document.querySelectorAll('.methode-paiement').forEach((methode) => {
        methode.classList.remove('active')
      })

      champ.closest('.methode-paiement').classList.add('active')
    })
  })
}

// ===== VALIDATION FORMULAIRE =====
function validerFormulaire(formulaire) {
  const champsObligatoires = ['telephone', 'prenom', 'nom']

  return champsObligatoires.every((nomChamp) => formulaire.elements[nomChamp].value.trim() !== '')
}

// ===== CRÉATION DE LA COMMANDE =====
function creerCommande(formulaire) {
  const panier = obtenirPanier()
  const sousTotal = calculerSousTotal(panier)
  const commission = sousTotal * 0.08
  const totalClient = sousTotal + commission
  const netProd = sousTotal - commission
  const donnees = new FormData(formulaire)

  return {
    reference: creerReferenceCommande(),
    date: new Date().toISOString(),
    panier,
    client: {
      prenom: donnees.get('prenom'),
      nom: donnees.get('nom'),
      email: donnees.get('email'),
      ville: donnees.get('ville'),
      telephone: donnees.get('telephone'),
    },
    paiement: {
      moyen: donnees.get('moyenPaiement'),
      statut: 'payé',
    },
    montants: {
      sousTotal,
      commission,
      totalClient,
      netProd,
    },
  }
}

// ===== SOUMISSION PAIEMENT =====
function gererPaiement() {
  const formulaire = document.querySelector('[data-formulaire-paiement]')
  const bouton = document.querySelector('[data-bouton-paiement]')
  const message = document.querySelector('[data-message-formulaire]')

  formulaire.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!validerFormulaire(formulaire)) {
      message.textContent = 'Veuillez remplir les champs obligatoires.'
      message.classList.add('erreur')
      return
    }

    message.textContent = 'Traitement en cours...'
    message.classList.remove('erreur')
    bouton.disabled = true

    setTimeout(() => {
      const commande = creerCommande(formulaire)

      sauvegarderCommande(commande)
      localStorage.setItem('tg_derniere_commande', JSON.stringify(commande))
      localStorage.setItem('tg_panier', JSON.stringify([]))
      window.location.href = 'confirmation.html'
    }, 2000)
  })
}

// ===== INITIALISATION PAGE PAIEMENT =====
afficherRecapitulatif()
gererMethodesPaiement()
gererPaiement()

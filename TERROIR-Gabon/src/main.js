// ===== IMPORT DU CSS GLOBAL =====
import './style.css'
import logoUrl from './image/logo.png'
import heroUrl from './image/carte.png'
import categorieAgricoleUrl from './image/agricol.png'
import categorieArtisanalUrl from './image/artisanal.png'
import categorieCosmetiqueUrl from './image/cosmetique.png'
import produitMielUrl from './image/miel.png'
import produitMasqueUrl from './image/masque.png'
import produitKariteUrl from './image/beurre.png'
import produitPimentUrl from './image/piment.png'

// ===== CHEMINS DES IMAGES À REMPLACER =====
const IMAGES = {
  hero: heroUrl,
  categories: {
    agricole: categorieAgricoleUrl,
    artisanal: categorieArtisanalUrl,
    cosmetique: categorieCosmetiqueUrl,
  },
  produits: {
    miel: produitMielUrl,
    masque: produitMasqueUrl,
    karite: produitKariteUrl,
    piment: produitPimentUrl,
  },
}

// ===== DONNÉES DES PRODUITS =====
const PRODUITS = [
  {
    id: 1,
    nom: 'Miel sauvage',
    image: IMAGES.produits.miel,
    categorie: 'agricole',
    prix: 5000,
    origine_ville: 'Lambaréné',
    origine_province: 'Moyen-Ogooué',
    producteur_id: 1,
  },
  {
    id: 2,
    nom: 'Masque bwiti',
    image: IMAGES.produits.masque,
    categorie: 'artisanal',
    prix: 35000,
    origine_ville: 'Lastoursville',
    origine_province: 'Ogooué-Lolo',
    producteur_id: 2,
  },
  {
    id: 3,
    nom: 'Beurre de karité',
    image: IMAGES.produits.karite,
    categorie: 'cosmetique',
    prix: 8500,
    origine_ville: 'Libreville',
    origine_province: 'Estuaire',
    producteur_id: 3,
  },
  {
    id: 4,
    nom: 'Piment okoumé',
    image: IMAGES.produits.piment,
    categorie: 'agricole',
    prix: 2500,
    origine_ville: 'Mouila',
    origine_province: 'Ngounié',
    producteur_id: 4,
  },
]

// ===== DONNÉES DES PRODUCTEURS =====
const PRODUCTEURS = [
  {
    id: 1,
    initiales: 'JM',
    couleur_avatar: '#2E7D32',
    nom: 'Jean Moussavou',
    ville: 'Lambaréné',
    province: 'Moyen-Ogooué',
    specialite: 'Apiculture',
    bio: 'Apiculteur depuis 15 ans, Jean récolte un miel sauvage naturel issu des forêts gabonaises.',
    whatsapp: '+24107000001',
    facebook_messenger: 'jeanmoussavou',
  },
  {
    id: 2,
    initiales: 'MN',
    couleur_avatar: '#F9A825',
    nom: 'Mireille Ndong',
    ville: 'Lastoursville',
    province: 'Ogooué-Lolo',
    specialite: 'Artisanat',
    bio: 'Artisane spécialisée dans les objets traditionnels sculptés à la main.',
    whatsapp: '+24107000002',
    facebook_messenger: 'mireillendong',
  },
  {
    id: 3,
    initiales: 'OA',
    couleur_avatar: '#2E7D32',
    nom: 'Odette Angue',
    ville: 'Libreville',
    province: 'Estuaire',
    specialite: 'Cosmétique naturelle',
    bio: 'Productrice de soins naturels inspirés des recettes locales.',
    whatsapp: '+24107000003',
    facebook_messenger: 'odetteangue',
  },
  {
    id: 4,
    initiales: 'PB',
    couleur_avatar: '#1B5E20',
    nom: 'Paul Biyoghe',
    ville: 'Mouila',
    province: 'Ngounié',
    specialite: 'Agriculture',
    bio: 'Agriculteur engagé dans la culture locale et les circuits courts.',
    whatsapp: '+24107000004',
    facebook_messenger: 'paulbiyoghe',
  },
]

// ===== DONNÉES DES CATÉGORIES =====
const CATEGORIES = [
  {
    nom: 'Agricole',
    image: IMAGES.categories.agricole,
    nombre: 8,
    slug: 'agricole',
  },
  {
    nom: 'Artisanal',
    image: IMAGES.categories.artisanal,
    nombre: 10,
    slug: 'artisanal',
  },
  {
    nom: 'Cosmétique',
    image: IMAGES.categories.cosmetique,
    nombre: 6,
    slug: 'cosmetique',
  },
]

// ===== FORMATAGE DU PRIX =====
function formaterPrix(prix) {
  return `${prix.toLocaleString('fr-FR')} FCFA`
}

// ===== LECTURE DU PANIER =====
function obtenirPanier() {
  return JSON.parse(localStorage.getItem('tg_panier')) || []
}

// ===== SAUVEGARDE DU PANIER =====
function sauvegarderPanier(panier) {
  localStorage.setItem('tg_panier', JSON.stringify(panier))
}

// ===== MISE À JOUR COMPTEUR PANIER =====
function mettreAJourCompteurPanier() {
  const compteurs = document.querySelectorAll('[data-compteur-panier]')
  const total = obtenirPanier().reduce((somme, produit) => somme + produit.quantite, 0)

  compteurs.forEach((compteur) => {
    compteur.textContent = total
  })
}

// ===== AJOUT AU PANIER =====
function ajouterAuPanier(idProduit) {
  const produit = PRODUITS.find((element) => element.id === idProduit)
  const panier = obtenirPanier()
  const produitExistant = panier.find((element) => element.id === idProduit)

  if (!produit) return

  if (produitExistant) {
    produitExistant.quantite += 1
  } else {
    panier.push({ ...produit, quantite: 1 })
  }

  sauvegarderPanier(panier)
  mettreAJourCompteurPanier()
}

// ===== CRÉATION D'UNE ZONE IMAGE =====
function creerZoneImage(src, texteAlt, classeImage) {
  if (src) {
    return `<img src="${src}" alt="${texteAlt}" />`
  }

  return `<span class="${classeImage}">Image</span>`
}

// ===== CRÉATION DES CARTES CATÉGORIES =====
function creerCartesCategories() {
  return CATEGORIES.map((categorie) => `
    <a class="categorie-card" href="produits.html?categorie=${categorie.slug}">
      <!-- ===== IMAGE CATÉGORIE : REMPLACER LE CHEMIN DANS IMAGES.categories ===== -->
      <div class="categorie-image">
        ${creerZoneImage(categorie.image, categorie.nom, 'image-vide')}
      </div>

      <!-- ===== TEXTE CATÉGORIE ===== -->
      <div class="categorie-texte">
        <strong>${categorie.nom}</strong>
        <small>${categorie.nombre} produits</small>
      </div>
    </a>
  `).join('')
}

// ===== CRÉATION DES CARTES PRODUITS =====
function creerCartesProduits() {
  return PRODUITS.map((produit) => `
    <article class="produit-card">
      <!-- ===== IMAGE PRODUIT : REMPLACER LE CHEMIN DANS IMAGES.produits ===== -->
      <div class="produit-image produit-image-${produit.categorie}">
        ${creerZoneImage(produit.image, produit.nom, 'image-vide')}
      </div>

      <!-- ===== INFORMATIONS PRODUIT ===== -->
      <div class="produit-contenu">
        <span class="badge badge-${produit.categorie}">${produit.categorie}</span>
        <h3>${produit.nom}</h3>
        <p>📍 ${produit.origine_ville}, ${produit.origine_province}</p>
      </div>

      <!-- ===== ACTIONS PRODUIT ===== -->
      <div class="produit-actions">
        <strong>${formaterPrix(produit.prix)}</strong>
        <button class="btn-ajout" type="button" data-produit-id="${produit.id}">+ Ajouter</button>
      </div>
    </article>
  `).join('')
}

// ===== HTML DE LA PAGE ACCUEIL =====
document.getElementById('app').innerHTML = `
  <!-- ===== HEADER ===== -->
  <header class="header">
    <!-- ===== NAVBAR ===== -->
    <nav class="navbar">
      <a class="marque" href="index.html" aria-label="Accueil TerroirGabon">
        <img class="marque-logo" src="${logoUrl}" alt="Logo TerroirGabon" />
        <span class="marque-nom">Terroir<span>Gabon</span></span>
      </a>

      <div class="nav-liens" aria-label="Navigation principale">
        <a class="actif" href="index.html">Accueil</a>
        <a href="produits.html">Produits</a>
        <a href="producteurs.html">Producteurs</a>
      </div>

      <div class="nav-actions">
        <a class="btn-admin" href="admin.html">⚙ Admin</a>
        <a class="btn-panier" href="panier.html">
          🛒 Panier
          <span data-compteur-panier>0</span>
        </a>
      </div>
    </nav>

    <!-- ===== NAVIGATION MOBILE ===== -->
    <nav class="navigation-mobile" aria-label="Navigation mobile">
      <a class="actif" href="index.html">Accueil</a>
      <a href="produits.html">Produits</a>
      <a href="producteurs.html">Producteurs</a>
      <a href="panier.html">Panier</a>
    </nav>
  </header>

  <!-- ===== MAIN ===== -->
  <main>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <span class="cercle cercle-gauche" aria-hidden="true"></span>

      <!-- ===== IMAGE HERO : REMPLACER LE CHEMIN DANS IMAGES.hero ===== -->
      <div class="hero-image-cercle">
        ${creerZoneImage(IMAGES.hero, 'Image de présentation TerroirGabon', 'image-vide')}
      </div>

      <div class="hero-contenu">
        <p class="label-gabon">🇬🇦 Proudly made in Gabon</p>
        <h1>L'excellence gabonaise <span>à portée de clic</span></h1>
        <p class="hero-texte">
          Découvrez, soutenez et achetez directement auprès des artisans,
          agriculteurs et producteurs locaux du Gabon.
        </p>
        <div class="hero-actions">
          <a class="btn-principal" href="produits.html">🌿 Voir les produits</a>
          <a class="btn-secondaire" href="producteurs.html">Rencontrer les producteurs</a>
        </div>
      </div>
    </section>

    <!-- ===== STATS ===== -->
    <section class="stats">
      <article>
        <strong>24</strong>
        <span>Producteurs</span>
      </article>
      <article>
        <strong>3</strong>
        <span>Catégories</span>
      </article>
      <article>
        <strong>9</strong>
        <span>Provinces</span>
      </article>
      <article>
        <strong>100%</strong>
        <span>Local</span>
      </article>
    </section>

    <!-- ===== CATEGORIES ===== -->
    <section class="categories section-conteneur">
      <div class="titre-section">
        <h2>Catégories</h2>
        <p>Explorez par type de produit</p>
      </div>

      <div class="grille-categories">
        ${creerCartesCategories()}
      </div>
    </section>

    <!-- ===== PRODUITS À LA UNE ===== -->
    <section class="produits-vedette section-conteneur">
      <div class="titre-section ligne">
        <div>
          <h2>Produits à la une</h2>
          <p>Sélection de la semaine</p>
        </div>
        <a href="produits.html">Voir tout →</a>
      </div>

      <div class="grille-produits">
        ${creerCartesProduits()}
      </div>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="footer-contenu">
      <div>
        <a class="footer-marque" href="index.html" aria-label="Accueil TerroirGabon">
          <img class="footer-logo" src="${logoUrl}" alt="Logo TerroirGabon" />
          <span class="footer-nom">Terroir<span>Gabon</span></span>
        </a>
        <p>La plateforme de référence pour découvrir et acheter les produits authentiques du Gabon.</p>
      </div>

      <div>
        <h2>Navigation</h2>
        <a href="index.html">Accueil</a>
        <a href="produits.html">Produits</a>
        <a href="producteurs.html">Producteurs</a>
      </div>

      <div>
        <h2>Catégories</h2>
        <a href="produits.html?categorie=agricole">Agricole</a>
        <a href="produits.html?categorie=artisanal">Artisanal</a>
        <a href="produits.html?categorie=cosmetique">Cosmétique</a>
      </div>
    </div>

    <div class="footer-bas">
      <span>© 2025 TerroirGabon — Valorisons le savoir-faire gabonais</span>
      <span>🇬🇦 Fait au Gabon, pour le monde</span>
    </div>
  </footer>
`

// ===== LOGIQUE JS DE L'ACCUEIL =====
mettreAJourCompteurPanier()

document.querySelectorAll('[data-produit-id]').forEach((bouton) => {
  bouton.addEventListener('click', () => {
    ajouterAuPanier(Number(bouton.dataset.produitId))
  })
})

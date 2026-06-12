import"./modulepreload-polyfill-Dezn_h7o.js";/* empty css              */var e=``+new URL(`logo-DrByG9U0.png`,import.meta.url).href,t=``+new URL(`carte-BSrYAqsj.png`,import.meta.url).href,n=``+new URL(`agricol-DoVH12mg.png`,import.meta.url).href,r=``+new URL(`artisanal-CqIRrxO0.png`,import.meta.url).href,i=``+new URL(`cosmetique-C7NfJV0k.png`,import.meta.url).href,a=``+new URL(`miel-rfn7CIKy.png`,import.meta.url).href,o=``+new URL(`masque-CeJcCjpL.png`,import.meta.url).href,s=``+new URL(`beurre-Krhw02SD.png`,import.meta.url).href,c=``+new URL(`piment-2-b4Qd1N.png`,import.meta.url).href,l={hero:t,categories:{agricole:n,artisanal:r,cosmetique:i},produits:{miel:a,masque:o,karite:s,piment:c}},u=[{id:1,nom:`Miel sauvage`,image:l.produits.miel,categorie:`agricole`,prix:5e3,origine_ville:`Lambaréné`,origine_province:`Moyen-Ogooué`,producteur_id:1},{id:2,nom:`Masque bwiti`,image:l.produits.masque,categorie:`artisanal`,prix:35e3,origine_ville:`Lastoursville`,origine_province:`Ogooué-Lolo`,producteur_id:2},{id:3,nom:`Beurre de karité`,image:l.produits.karite,categorie:`cosmetique`,prix:8500,origine_ville:`Libreville`,origine_province:`Estuaire`,producteur_id:3},{id:4,nom:`Piment okoumé`,image:l.produits.piment,categorie:`agricole`,prix:2500,origine_ville:`Mouila`,origine_province:`Ngounié`,producteur_id:4}],d=[{nom:`Agricole`,image:l.categories.agricole,nombre:8,slug:`agricole`},{nom:`Artisanal`,image:l.categories.artisanal,nombre:10,slug:`artisanal`},{nom:`Cosmétique`,image:l.categories.cosmetique,nombre:6,slug:`cosmetique`}];function f(e){return`${e.toLocaleString(`fr-FR`)} FCFA`}function p(){return JSON.parse(localStorage.getItem(`tg_panier`))||[]}function m(e){localStorage.setItem(`tg_panier`,JSON.stringify(e))}function h(){let e=document.querySelectorAll(`[data-compteur-panier]`),t=p().reduce((e,t)=>e+t.quantite,0);e.forEach(e=>{e.textContent=t})}function g(e){let t=u.find(t=>t.id===e),n=p(),r=n.find(t=>t.id===e);t&&(r?r.quantite+=1:n.push({...t,quantite:1}),m(n),h())}function _(e,t,n){return e?`<img src="${e}" alt="${t}" />`:`<span class="${n}">Image</span>`}function v(){return d.map(e=>`
    <a class="categorie-card" href="produits.html?categorie=${e.slug}">
      <!-- ===== IMAGE CATÉGORIE : REMPLACER LE CHEMIN DANS IMAGES.categories ===== -->
      <div class="categorie-image">
        ${_(e.image,e.nom,`image-vide`)}
      </div>

      <!-- ===== TEXTE CATÉGORIE ===== -->
      <div class="categorie-texte">
        <strong>${e.nom}</strong>
        <small>${e.nombre} produits</small>
      </div>
    </a>
  `).join(``)}function y(){return u.map(e=>`
    <article class="produit-card">
      <!-- ===== IMAGE PRODUIT : REMPLACER LE CHEMIN DANS IMAGES.produits ===== -->
      <div class="produit-image produit-image-${e.categorie}">
        ${_(e.image,e.nom,`image-vide`)}
      </div>

      <!-- ===== INFORMATIONS PRODUIT ===== -->
      <div class="produit-contenu">
        <span class="badge badge-${e.categorie}">${e.categorie}</span>
        <h3>${e.nom}</h3>
        <p>📍 ${e.origine_ville}, ${e.origine_province}</p>
      </div>

      <!-- ===== ACTIONS PRODUIT ===== -->
      <div class="produit-actions">
        <strong>${f(e.prix)}</strong>
        <button class="btn-ajout" type="button" data-produit-id="${e.id}">+ Ajouter</button>
      </div>
    </article>
  `).join(``)}document.getElementById(`app`).innerHTML=`
  <!-- ===== HEADER ===== -->
  <header class="header">
    <!-- ===== NAVBAR ===== -->
    <nav class="navbar">
      <a class="marque" href="index.html" aria-label="Accueil TerroirGabon">
        <img class="marque-logo" src="${e}" alt="Logo TerroirGabon" />
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
        ${_(l.hero,`Image de présentation TerroirGabon`,`image-vide`)}
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
        ${v()}
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
        ${y()}
      </div>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="footer-contenu">
      <div>
        <a class="footer-marque" href="index.html" aria-label="Accueil TerroirGabon">
          <img class="footer-logo" src="${e}" alt="Logo TerroirGabon" />
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
`,h(),document.querySelectorAll(`[data-produit-id]`).forEach(e=>{e.addEventListener(`click`,()=>{g(Number(e.dataset.produitId))})});
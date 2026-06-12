import"./modulepreload-polyfill-Dezn_h7o.js";/* empty css              */var e=[{id:1,client:`Jean-Pierre Nzamba`,image:`/src/image/miel.png`,resume:`Miel sauvage ×2, Masque bwiti ×1`,date:`12/01/2025`,paiement:`Airtel Money`,total:57780,netProducteur:49220,commission:4280,statut:`en_attente`},{id:2,client:`Aïcha Moukagni`,image:`/src/image/beurre.png`,resume:`Beurre de karité ×2, Savon naturel ×1`,date:`11/01/2025`,paiement:`Moov Money`,total:21980,netProducteur:20220,commission:1760,statut:`verse`},{id:3,client:`Patrick Obiang`,image:`/src/image/masque.png`,resume:`Sculpture okoumé ×1`,date:`10/01/2025`,paiement:`Airtel Money`,total:48600,netProducteur:41400,commission:3600,statut:`en_attente`},{id:4,client:`Rose Bengone`,image:`/src/image/artisanal.png`,resume:`Panier tressé ×3`,date:`09/01/2025`,paiement:`Moov Money`,total:39960,netProducteur:33120,commission:2880,statut:`verse`},{id:5,client:`Mireille Nkoghe`,image:`/src/image/piment.png`,resume:`Piment okoumé ×4`,date:`08/01/2025`,paiement:`Airtel Money`,total:18400,netProducteur:16928,commission:1472,statut:`en_attente`},{id:6,client:`Brice Mapangou`,image:`/src/image/cosmetique.png`,resume:`Huile naturelle ×2`,date:`07/01/2025`,paiement:`Moov Money`,total:32600,netProducteur:29992,commission:2608,statut:`verse`},{id:7,client:`Nadia Ella`,image:`/src/image/miel.png`,resume:`Miel sauvage ×3`,date:`06/01/2025`,paiement:`Airtel Money`,total:42e3,netProducteur:38640,commission:3360,statut:`verse`},{id:8,client:`Arnaud Mba`,image:`/src/image/masque.png`,resume:`Masque bwiti ×1`,date:`05/01/2025`,paiement:`Moov Money`,total:35e3,netProducteur:32200,commission:2800,statut:`en_attente`},{id:9,client:`Carine Mintsa`,image:`/src/image/beurre.png`,resume:`Beurre de karité ×3`,date:`04/01/2025`,paiement:`Airtel Money`,total:25500,netProducteur:23460,commission:2040,statut:`verse`},{id:10,client:`Fabrice Ndong`,image:`/src/image/agricol.png`,resume:`Produits agricoles ×2`,date:`03/01/2025`,paiement:`Moov Money`,total:56e3,netProducteur:51520,commission:4480,statut:`verse`},{id:11,client:`Laure Akoue`,image:`/src/image/cosmetique.png`,resume:`Cosmétique naturel ×2`,date:`02/01/2025`,paiement:`Airtel Money`,total:39400,netProducteur:36248,commission:3152,statut:`verse`},{id:12,client:`Didier Mouele`,image:`/src/image/artisanal.png`,resume:`Article artisanal ×2`,date:`01/01/2025`,paiement:`Moov Money`,total:7e4,netProducteur:64400,commission:5600,statut:`verse`}];p(),t(),u(),r();function t(){n(d().map(a))}function n(e){let t=e.length,n=e.reduce((e,t)=>e+t.total,0),r=e.reduce((e,t)=>e+t.commission,0),i=e.filter(e=>e.statut===`en_attente`).length;document.querySelector(`[data-total-commandes]`).textContent=t,document.querySelector(`[data-revenus]`).textContent=`${Math.round(n/1e3)}k F`,document.querySelector(`[data-en-attente]`).textContent=i,document.querySelector(`[data-commissions]`).textContent=`${Math.round(r/1e3)}k F`}function r(){let e=document.querySelector(`[data-commandes-liste]`);e&&e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-verser]`);t&&i(t.dataset.verser)})}function i(e){let n=d(),r=n.findIndex((t,n)=>o(t,n)===e);r!==-1&&(n[r].statut=`verse`,n[r].versement_statut=`verse`,n[r].date_versement=new Date().toISOString(),f(n),t(),l(`Versement au producteur confirmé`))}function a(e,t){let n=e.panier||[],r=typeof e.client==`string`?e.client:`${e.client?.prenom||`Client`} ${e.client?.nom||``}`.trim(),i=e.montants||{};return{cle:o(e,t),client:r,image:e.image||n[0]?.image||`/src/image/miel.png`,resume:e.resume||s(n),date:c(e.date),paiement:e.paiement?.moyen||e.paiement||`Mobile Money`,total:Number(e.total||i.totalClient||0),netProducteur:Number(e.netProducteur||i.netProd||0),commission:Number(e.commission||i.commission||0),statut:e.versement_statut||e.statut||`en_attente`}}function o(e,t){return String(e.reference||e.id||t)}function s(e){return e.length===0?`Commande sans détail`:e.map(e=>`${e.nom} ×${e.quantite}`).join(`, `)}function c(e){return!e||e.includes(`/`)?e||``:new Date(e).toLocaleDateString(`fr-FR`)}function l(e){let t=document.querySelector(`[data-notification-dashboard]`),n=document.querySelector(`[data-notification-message]`);n.textContent=e,t.classList.add(`visible`),setTimeout(()=>{t.classList.remove(`visible`)},3e3)}function u(){let e=(JSON.parse(localStorage.getItem(`tg_panier`))||[]).reduce((e,t)=>e+(t.quantite||0),0);document.querySelector(`[data-compteur-panier]`).textContent=e}function d(){return JSON.parse(localStorage.getItem(`tg_commandes`))||[]}function f(e){localStorage.setItem(`tg_commandes`,JSON.stringify(e))}function p(){localStorage.getItem(`tg_commandes`)||f(e)}function m(e){return`${Number(e).toLocaleString(`fr-FR`)} FCFA`}var h=[{id:1,nom:`Miel sauvage`,prix:5e3,description:`Miel naturel récolté en forêt.`,categorie:`agricole`,producteur:`Jean Moussavou`,ville:`Lambaréné`,province:`Moyen-Ogooué`,statut:`publie`},{id:2,nom:`Masque bwiti`,prix:35e3,description:`Masque artisanal inspiré du patrimoine gabonais.`,categorie:`artisanal`,producteur:`Marie Ondo`,ville:`Lastoursville`,province:`Ogooué-Lolo`,statut:`publie`},{id:3,nom:`Beurre de karité`,prix:8500,description:`Soin naturel pour la peau.`,categorie:`cosmetique`,producteur:`Sophie Nzamba`,ville:`Libreville`,province:`Estuaire`,statut:`en_attente`},{id:4,nom:`Piment okoumé`,prix:2500,description:`Piment local cultivé au Gabon.`,categorie:`agricole`,producteur:`Paul Kombila`,ville:`Mouila`,province:`Ngounié`,statut:`publie`}],g=[{id:1,nom:`Jean Moussavou`,specialite:`Apiculture`,ville:`Lambaréné`,province:`Moyen-Ogooué`,whatsapp:`+241 07 00 00 01`,initiales:`JM`,couleur_avatar:`#2E7D32`},{id:2,nom:`Marie Ondo`,specialite:`Artisanat`,ville:`Lastoursville`,province:`Ogooué-Lolo`,whatsapp:`+241 07 00 00 02`,initiales:`MO`,couleur_avatar:`#F9A825`},{id:3,nom:`Sophie Nzamba`,specialite:`Cosmétique`,ville:`Libreville`,province:`Estuaire`,whatsapp:`+241 07 00 00 03`,initiales:`SN`,couleur_avatar:`#1B5E20`}],_=[`Estuaire`,`Haut-Ogooué`,`Moyen-Ogooué`,`Ngounié`,`Nyanga`,`Ogooué-Ivindo`,`Ogooué-Lolo`,`Ogooué-Maritime`,`Woleu-Ntem`],v=`tous`;z(),B(),E(),b(),N(),P(),F(),I(),L(),R();function y(e){document.querySelectorAll(`[data-gestion-onglet]`).forEach(t=>{t.classList.toggle(`actif`,t.dataset.gestionOnglet===e)}),document.querySelectorAll(`[data-gestion-panneau]`).forEach(t=>{t.classList.toggle(`actif`,t.dataset.gestionPanneau===e)})}function b(){let e=k(`tg_produits`),t=v===`tous`?e:e.filter(e=>e.categorie===v),n=document.querySelector(`[data-liste-produits-admin]`);if(t.length===0){n.innerHTML=`<p class="gestion-vide">Aucun produit enregistré.</p>`;return}n.innerHTML=t.map(j).join(``)}function x(e){v=e,document.querySelectorAll(`[data-filtre-produit]`).forEach(t=>{t.classList.toggle(`actif`,t.dataset.filtreProduit===e)}),b()}function S(e){let t=k(`tg_produits`),n=t.find(t=>t.id===e);n&&(n.statut=`publie`,A(`tg_produits`,t),b(),O(`Produit publié avec succès`))}function C(e){let t=k(`tg_produits`),n=t.find(t=>t.id===e);n&&(n.statut=`en_attente`,A(`tg_produits`,t),b(),O(`Produit remis en attente`))}function w(e){A(`tg_produits`,k(`tg_produits`).filter(t=>t.id!==e)),b(),O(`Produit supprimé avec succès`)}function T(e){e.preventDefault();let t=e.currentTarget,n=new FormData(t),r=n.get(`nom`).trim(),i=Number(n.get(`prix`));if(!r||!i){alert(`Remplir les champs`);return}let a=k(`tg_produits`);a.push({id:Date.now(),nom:r,prix:i,description:n.get(`description`).trim(),categorie:n.get(`categorie`),producteur:n.get(`producteur`),ville:n.get(`ville`).trim(),province:n.get(`province`),statut:`en_attente`}),A(`tg_produits`,a),t.reset(),b(),y(`produits`),O(`Produit enregistré — en attente de publication`)}function E(){let e=k(`tg_producteurs`),t=document.querySelector(`[data-liste-producteurs-admin]`);if(V(e),e.length===0){t.innerHTML=`<p class="gestion-vide">Aucun producteur enregistré.</p>`;return}t.innerHTML=e.map(M).join(``)}function D(e){A(`tg_producteurs`,k(`tg_producteurs`).filter(t=>t.id!==e)),E(),O(`Producteur supprimé avec succès`)}function O(e){let t=document.querySelector(`[data-notification-gestion]`),n=document.querySelector(`[data-notification-gestion-message]`);n.textContent=e,t.classList.add(`visible`),setTimeout(()=>{t.classList.remove(`visible`)},3e3)}function k(e){return JSON.parse(localStorage.getItem(e))||[]}function A(e,t){localStorage.setItem(e,JSON.stringify(t))}function j(e){let t=e.statut===`publie`,n=t?`Publié`:`En attente`,r=t?`ti-eye`:`ti-clock`,i=t?`depublier`:`publier`,a=t?`ti-eye-off`:`ti-eye`;return`
    <article class="gestion-ligne-produit">
      <span class="gestion-icone-categorie ${e.categorie}">
        <i class="ti ${H(e.categorie)}"></i>
      </span>

      <div class="gestion-produit-infos">
        <strong>${e.nom}</strong>
        <div class="gestion-produit-meta">
          <span><i class="ti ti-map-pin"></i>${e.ville}, ${e.province}</span>
          <span><i class="ti ti-user"></i>${e.producteur}</span>
        </div>
      </div>

      <strong class="gestion-prix-produit">${m(e.prix)}</strong>

      <span class="gestion-badge-statut ${e.statut}">
        <i class="ti ${r}"></i>
        ${n}
      </span>

      <div class="gestion-actions-ligne">
        <button class="gestion-btn-icone" type="button" aria-label="Modifier ${e.nom}">
          <i class="ti ti-pencil"></i>
        </button>
        <button class="gestion-btn-icone ${i}" type="button" data-action-produit-admin="${i}" data-id="${e.id}" aria-label="${n}">
          <i class="ti ${a}"></i>
        </button>
        <button class="gestion-btn-icone supprimer" type="button" data-action-produit-admin="supprimer" data-id="${e.id}" aria-label="Supprimer ${e.nom}">
          <i class="ti ti-trash"></i>
        </button>
      </div>
    </article>
  `}function M(e){return`
    <article class="gestion-ligne-producteur">
      <span class="gestion-avatar-producteur" style="background:${e.couleur_avatar||`#2E7D32`}">
        ${W(e)}
      </span>

      <div class="gestion-producteur-infos">
        <strong>${e.nom}</strong>
        <div class="gestion-producteur-meta">
          <span><i class="ti ti-map-pin"></i>${e.ville}</span>
          <span><i class="ti ti-brand-whatsapp"></i>${e.whatsapp}</span>
        </div>
      </div>

      <span class="gestion-badge-specialite">
        <i class="ti ${U(e.specialite)}"></i>
        ${e.specialite}
      </span>

      <div class="gestion-actions-ligne">
        <span class="gestion-badge-actif">
          <i class="ti ti-circle-check"></i>
          Actif
        </span>
        <button class="gestion-btn-icone" type="button" aria-label="Modifier ${e.nom}">
          <i class="ti ti-pencil"></i>
        </button>
        <button class="gestion-btn-icone supprimer" type="button" data-action-producteur-admin="supprimer" data-id="${e.id}" aria-label="Supprimer ${e.nom}">
          <i class="ti ti-trash"></i>
        </button>
      </div>
    </article>
  `}function N(){document.querySelectorAll(`[data-gestion-onglet]`).forEach(e=>{e.addEventListener(`click`,()=>y(e.dataset.gestionOnglet))})}function P(){document.querySelectorAll(`[data-filtre-produit]`).forEach(e=>{e.addEventListener(`click`,()=>x(e.dataset.filtreProduit))})}function F(){document.querySelector(`[data-liste-produits-admin]`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-action-produit-admin]`);if(!t)return;let n=Number(t.dataset.id),r=t.dataset.actionProduitAdmin;r===`publier`&&S(n),r===`depublier`&&C(n),r===`supprimer`&&w(n)})}function I(){document.querySelector(`[data-liste-producteurs-admin]`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-action-producteur-admin]`);t&&t.dataset.actionProducteurAdmin===`supprimer`&&D(Number(t.dataset.id))})}function L(){document.querySelector(`[data-form-produit-admin]`).addEventListener(`submit`,T)}function R(){document.querySelector(`[data-ajouter-producteur]`).addEventListener(`click`,()=>{y(`ajouter-produit`)})}function z(){localStorage.getItem(`tg_produits`)||A(`tg_produits`,h),localStorage.getItem(`tg_producteurs`)||A(`tg_producteurs`,g)}function B(){document.querySelector(`[data-select-provinces-admin]`).innerHTML=_.map(e=>`<option value="${e}">${e}</option>`).join(``)}function V(e){document.querySelector(`[data-select-producteurs-admin]`).innerHTML=e.map(e=>`<option value="${e.nom}">${e.nom}</option>`).join(``)}function H(e){return e===`agricole`?`ti-plant-2`:e===`artisanal`?`ti-brush`:`ti-sparkles`}function U(e){let t=String(e).toLowerCase();return t.includes(`apiculture`)||t.includes(`agricole`)?`ti-leaf`:t.includes(`artisan`)?`ti-brush`:t.includes(`cosm`)?`ti-sparkles`:t.includes(`épice`)||t.includes(`epice`)?`ti-plant-2`:`ti-star`}function W(e){return e.initiales?e.initiales.slice(0,2).toUpperCase():e.nom.split(` `).map(e=>e[0]).join(``).slice(0,2).toUpperCase()}
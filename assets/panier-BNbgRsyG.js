import"./modulepreload-polyfill-Dezn_h7o.js";/* empty css              */var e=[{id:1,nom:`Miel sauvage`,image:`/src/image/miel.png`,icone:`🍯`,prix:5e3,quantite:2,origine_ville:`Lambaréné`,origine_province:`Moyen-Ogooué`,producteur:`Jean Moussavou`},{id:2,nom:`Masque bwiti`,image:`/src/image/masque.png`,icone:`🪵`,prix:35e3,quantite:1,origine_ville:`Lastoursville`,origine_province:`Ogooué-Lolo`,producteur:`Marie Ondo`},{id:3,nom:`Beurre de karité`,image:`/src/image/beurre.png`,icone:`🧴`,prix:8500,quantite:1,origine_ville:`Libreville`,origine_province:`Estuaire`,producteur:`Sophie Nzamba`}];function t(e){return`${e.toLocaleString(`fr-FR`)} FCFA`}function n(){let t=localStorage.getItem(`tg_panier`);return t?JSON.parse(t):[...e]}function r(e){localStorage.setItem(`tg_panier`,JSON.stringify(e))}function i(e){return e.reduce((e,t)=>e+t.prix*t.quantite,0)}function a(e){return e.length}function o(e){return e.image?`<img src="${e.image}" alt="${e.nom}" />`:`<span>${e.icone||`Image`}</span>`}function s(){let e=n(),r=document.querySelector(`[data-panier-liste]`);if(e.length===0){r.innerHTML=`
      <div class="panier-vide">
        Votre panier est vide.
      </div>
    `;return}r.innerHTML=e.map(e=>`
    <article class="article-panier">
      <!-- ===== IMAGE ARTICLE ===== -->
      <div class="article-image">
        ${o(e)}
      </div>

      <!-- ===== INFORMATIONS ARTICLE ===== -->
      <div class="article-info">
        <h2>${e.nom}</h2>
        <p>📍 ${e.origine_ville}, ${e.origine_province} · ${e.producteur||`Producteur local`}</p>

        <div class="article-quantite">
          <button class="btn-quantite" type="button" data-action="moins" data-id="${e.id}">−</button>
          <strong>${e.quantite}</strong>
          <button class="btn-quantite" type="button" data-action="plus" data-id="${e.id}">+</button>
        </div>
      </div>

      <!-- ===== PRIX ARTICLE ===== -->
      <strong class="article-prix">${t(e.prix*e.quantite)}</strong>

      <!-- ===== SUPPRIMER ARTICLE ===== -->
      <button class="btn-supprimer" type="button" aria-label="Supprimer ${e.nom}" data-action="supprimer" data-id="${e.id}">×</button>
    </article>
  `).join(``)}function c(){let e=n(),r=i(e),o=r*.08,s=r+o;document.querySelector(`[data-total-articles]`).textContent=a(e),document.querySelector(`[data-compteur-panier]`).textContent=a(e),document.querySelector(`[data-sous-total]`).textContent=t(r),document.querySelector(`[data-commission]`).textContent=t(o),document.querySelector(`[data-total-client]`).textContent=t(s),document.querySelector(`[data-recap-lignes]`).innerHTML=e.map(e=>`
    <div class="recap-ligne">
      <span>${e.icone||``} ${e.nom} ×${e.quantite}</span>
      <strong>${t(e.prix*e.quantite)}</strong>
    </div>
  `).join(``)}function l(e,t){let i=n(),a=i.find(t=>t.id===e);a&&(t===`plus`&&(a.quantite+=1),t===`moins`&&a.quantite>1&&--a.quantite,r(i),f())}function u(e){r(n().filter(t=>t.id!==e)),f()}function d(){document.querySelector(`[data-panier-liste]`).addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=Number(t.dataset.id),r=t.dataset.action;(r===`plus`||r===`moins`)&&l(n,r),r===`supprimer`&&u(n)})}function f(){s(),c()}f(),d();
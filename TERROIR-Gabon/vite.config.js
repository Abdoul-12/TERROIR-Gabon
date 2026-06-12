import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        produits: resolve(__dirname, 'produits.html'),
        producteurs: resolve(__dirname, 'producteurs.html'),
        panier: resolve(__dirname, 'panier.html'),
        paiement: resolve(__dirname, 'paiement.html'),
        admin: resolve(__dirname, 'admin.html'),
      },
    },
  },
})

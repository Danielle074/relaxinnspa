<template>
  <div class="min-h-screen bg-secondary text-primary ">

   

    <!-- ============================================= -->
    <!-- HERO MINI AVEC TITRE                          -->
    <!-- ============================================= -->
    <section class="relative h-[30vh] md:h-[40vh] w-full overflow-hidden">
      <img
        :src="heroImage"
        alt="Favoris"
        class="w-full h-full object-cover"
      />
      <!-- Dégradé linéaire avec les couleurs -->
      <div class="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/40 to-transparent flex flex-col justify-center items-center text-center px-6">
        <span class="text-quaternary/80 text-xs uppercase tracking-[0.3em] mt-32 animate-fade-down">Mes favoris</span>
        <h1 class="text-quaternary text-4xl md:text-5xl font-light leading-tight">
          Mes Produits Coup de Cœur
        </h1>
        <p class="text-quaternary/70 text-sm max-w-md mt-8 tracking-widest">Retrouvez ici les produits que vous avez aimés</p>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- CONTENU FAVORIS                              -->
    <!-- ============================================= -->
    <main class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

      <!-- Si la liste des favoris est vide -->
      <div v-if="favorites.length === 0" class="text-center py-20">
        <div class="text-7xl mb-6 text-tertiary/30">
          <i class="bx bx-heart"></i>
        </div>
        <h2 class="text-3xl font-light text-primary">Vous n'avez pas encore de favoris</h2>
        <p class="text-primary/60 mt-2">Parcourez notre boutique et ajoutez vos produits préférés.</p>
        <router-link
          to="/boutique"
          class="inline-block mt-8 px-8 py-3 bg-secondary text-quaternary hover:bg-tertiary hover:text-quaternary transition duration-300 rounded-full text-xs uppercase tracking-widest"
        >
          Découvrir la boutique
        </router-link>
      </div>

      <!-- Liste des favoris -->
      <div v-else>
        <!-- En-tête avec le nombre de favoris -->
        <div class="flex justify-between items-center mb-8">
          <p class="text-sm text-primary/60">
            {{ favorites.length }} produit<span v-if="favorites.length > 1">s</span> dans vos favoris
          </p>
          <button
            @click="clearFavorites"
            class="text-xs uppercase tracking-widest text-tertiary hover:text-primary transition-colors"
          >
            Tout supprimer
          </button>
        </div>

        <!-- Grille des favoris -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div
            v-for="product in favorites"
            :key="product.id"
            class="group flex flex-col items-center text-center bg-quaternary/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4"
          >
            <!-- Image -->
            <router-link
              :to="`/${product.link}`"
              class="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-3 block bg-secondary"
            >
              <img
                :src="product.image"
                :alt="product.name"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400 ease-out"
              />

              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
                <span
                  v-if="product.isSale"
                  class="bg-tertiary text-quaternary text-[8px] uppercase tracking-widest px-2 py-0.5 rounded"
                >
                  -20%
                </span>
                <span
                  v-if="product.isNew"
                  class="bg-secondary text-quaternary text-[8px] uppercase tracking-widest px-2 py-0.5 rounded"
                >
                  New
                </span>
              </div>

              <!-- Overlay avec bouton supprimer des favoris -->
              <div class="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <button
                  @click.stop="removeFavorite(product)"
                  class="w-9 h-9 rounded-full bg-quaternary text-tertiary flex items-center justify-center hover:bg-tertiary hover:text-quaternary transition-all duration-300 shadow-lg hover:scale-110"
                  title="Retirer des favoris"
                >
                  <i class="bx bx-heart text-sm"></i>
                </button>
              </div>
            </router-link>

            <!-- Étoiles -->
            <div class="flex items-center text-amber-500/80 text-[10px] mb-1.5">
              <span v-for="star in 5" :key="star">
                {{ star <= product.rating ? '★' : '☆' }}
              </span>
            </div>

            <!-- Nom -->
            <router-link
              :to="`/${product.link}`"
              class="text-xs font-medium text-primary tracking-wide mb-1 line-clamp-1 hover:text-tertiary transition-colors"
            >
              {{ product.name }}
            </router-link>

            <!-- Prix -->
            <p class="text-sm font-light text-primary/80">
              {{ product.price }}
            </p>

            <!-- Bouton ajouter au panier -->
            <button
              @click="addToCart(product)"
              class="mt-3 w-full py-2 border border-primary/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-quaternary transition duration-300"
            >
              Ajouter au panier
            </button>
          </div>
        </div>

        <!-- Retour boutique -->
        <div class="text-center mt-16">
          <router-link
            to="/boutique"
            class="inline-flex items-center gap-2 px-8 py-3 border border-primary/20 rounded-full text-xs uppercase tracking-widest hover:bg-secondary hover:text-quaternary hover:border-secondary transition-all duration-300"
          >
            <i class="bx bx-arrow-left"></i>
            Continuer mes achats
          </router-link>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// =============================================
// IMPORTS
// =============================================
import heroImage from '@/assets/images/header.jpg';

// Import des produits
import prod1 from '@/assets/images/serum1.png';
import prod2 from '@/assets/images/serum2.png';
import prod3 from '@/assets/images/serum3.png';
import prod4 from '@/assets/images/serum4.jpg';
import prod5 from '@/assets/images/serum5.jpg';

// =============================================
// ANIMATION OVERLAY
// =============================================
const showAnimation = ref(true);

onMounted(() => {
  setTimeout(() => {
    showAnimation.value = false;
  }, 3500);

  loadFavorites();
});

// =============================================
// TYPES
// =============================================
interface Product {
  id: number;
  name: string;
  link: string;
  price: string;
  rawPrice: number;
  rating: number;
  image: string;
  isSale?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
}

// =============================================
// LISTE DE TOUS LES PRODUITS DISPONIBLES
// =============================================
const allProducts = ref<Product[]>([
  { id: 1, name: 'Universal Cream', price: '15.000 F', rawPrice: 15000, rating: 4, image: prod1, link: 'serum1' },
  { id: 2, name: 'Citrus Oil', price: '18.000 F', rawPrice: 18000, rating: 4, image: prod2, isSale: true, isNew: true, link: 'serum2' },
  { id: 3, name: 'Citrus Oil', price: '17.000 F', rawPrice: 17000, rating: 5, image: prod3, isSale: true, isNew: true, link: 'serum3' },
  { id: 4, name: 'Hair Strenght Shampoo', price: '15.000 F', rawPrice: 15000, rating: 3, image: prod4, isPopular: true, link: 'serum4' },
  { id: 5, name: 'Moisturizing Face Cream', price: '19.000 F', rawPrice: 19000, rating: 4, image: prod5, isSale: true, link: 'serum5' }
]);

// =============================================
// FAVORIS (stockés dans localStorage)
// =============================================
const favorites = ref<Product[]>([]);

const STORAGE_KEY = 'relaxinn_favorites';

const loadFavorites = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const favIds = JSON.parse(stored) as number[];
      favorites.value = allProducts.value.filter(p => favIds.includes(p.id));
    } catch (e) {
      favorites.value = [];
    }
  }
};

const saveFavorites = () => {
  const ids = favorites.value.map(p => p.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

const addFavorite = (product: Product) => {
  if (!favorites.value.find(p => p.id === product.id)) {
    favorites.value.push(product);
    saveFavorites();
  }
};

const removeFavorite = (product: Product) => {
  favorites.value = favorites.value.filter(p => p.id !== product.id);
  saveFavorites();
};

const clearFavorites = () => {
  if (confirm('Voulez-vous vraiment supprimer tous vos favoris ?')) {
    favorites.value = [];
    saveFavorites();
  }
};

const addToCart = (product: Product) => {
  alert(`🛒 ${product.name} ajouté au panier !`);
};
</script>

<style scoped>
/* ===== VARIABLES CSS ===== */
:root {
  --color-primary: #E8AF9B;    /* rose */
  --color-secondary: #1D3C25;  /* vert foncé */
  --color-tertiary: #C28F66;   /* orange clair */
  --color-quaternary: #FFFFFF; /* blanc */
}

/* ===== CLASSES UTILITAIRES ===== */
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-tertiary { background-color: var(--color-tertiary); }
.bg-quaternary { background-color: var(--color-quaternary); }

.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-tertiary { color: var(--color-tertiary); }
.text-quaternary { color: var(--color-quaternary); }

.border-primary { border-color: var(--color-primary); }
.border-secondary { border-color: var(--color-secondary); }
.border-tertiary { border-color: var(--color-tertiary); }
.border-quaternary { border-color: var(--color-quaternary); }

.hover\:bg-primary:hover { background-color: var(--color-primary); }
.hover\:bg-secondary:hover { background-color: var(--color-secondary); }
.hover\:bg-tertiary:hover { background-color: var(--color-tertiary); }
.hover\:text-primary:hover { color: var(--color-primary); }
.hover\:text-secondary:hover { color: var(--color-secondary); }
.hover\:text-tertiary:hover { color: var(--color-tertiary); }
.hover\:text-quaternary:hover { color: var(--color-quaternary); }
.hover\:border-primary:hover { border-color: var(--color-primary); }
.hover\:border-secondary:hover { border-color: var(--color-secondary); }
.hover\:border-tertiary:hover { border-color: var(--color-tertiary); }

/* ===== DÉGRADÉS LINÉAIRES ===== */
.bg-linear-to-t {
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}
.bg-linear-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-primary { --tw-gradient-from: var(--color-primary); }
.from-secondary { --tw-gradient-from: var(--color-secondary); }
.from-tertiary { --tw-gradient-from: var(--color-tertiary); }
.via-primary { --tw-gradient-via: var(--color-primary); }
.via-secondary { --tw-gradient-via: var(--color-secondary); }
.via-tertiary { --tw-gradient-via: var(--color-tertiary); }
.to-primary { --tw-gradient-to: var(--color-primary); }
.to-secondary { --tw-gradient-to: var(--color-secondary); }
.to-tertiary { --tw-gradient-to: var(--color-tertiary); }
.to-transparent { --tw-gradient-to: transparent; }

/* ===== ANIMATION DU DESSIN SVG ===== */
.draw-path {
  animation: drawLine 2.8s ease forwards;
}
.draw-flower {
  animation: drawLine 3.2s ease forwards 0.3s;
}
@keyframes drawLine {
  0% { stroke-dashoffset: 800; opacity: 0; }
  20% { opacity: 1; }
  100% { stroke-dashoffset: 0; opacity: 1; }
}

/* ===== ÉTOILES ===== */
.sparkle {
  opacity: 0;
  animation: sparkleFade 1.8s ease forwards 1.2s;
}
@keyframes sparkleFade {
  0% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.6; transform: scale(1); }
}

/* ===== FADE DOWN ===== */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-down {
  animation: fadeDown 0.8s ease forwards;
}

/* ===== CARTES ===== */
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}
</style>

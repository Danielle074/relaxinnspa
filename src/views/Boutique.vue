<template>
  <div class="min-h-screen bg-[#FDF2EA] text-primary">


    <!-- ============================================= -->
    <!-- HERO CARROUSEL (PLEINE HAUTEUR)               -->
    <!-- ============================================= -->
    <header class="relative h-screen w-full overflow-hidden">
      <div
        v-for="(media, index) in heroMedia"
        :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100 z-10': currentSlide === index, 'opacity-0 z-0': currentSlide !== index }"
      >
        <video
          v-if="media.type === 'video'"
          :src="media.src"
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        ></video>
        <img
          v-else
          :src="media.src"
          alt="Boutique"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

      <div class="relative z-30 h-full flex flex-col justify-center items-center text-center px-4">
        <span class="text-white/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-down">Collection 2026</span>
        <h1 class="text-white text-5xl md:text-7xl font-light tracking-wide leading-tight">
          La Boutique
        </h1>
        <div class="w-16 h-0.5 bg-white/30 mx-auto my-5"></div>
        <p class="text-white/70 text-sm max-w-md tracking-widest">Des produits d'exception pour sublimer votre beauté</p>
      </div>

      <div class="absolute bottom-8 left-0 w-full z-30 flex justify-center gap-3">
        <button
          v-for="(dot, index) in heroMedia"
          :key="index"
          @click="currentSlide = index"
          class="h-1 rounded-full border border-white/40 transition-all duration-500"
          :class="[currentSlide === index ? 'w-8 bg-white' : 'w-4 bg-white/20']"
        ></button>
      </div>
    </header>

    <!-- ============================================= -->
    <!-- CONTENU PRINCIPAL                            -->
    <!-- ============================================= -->
    <main class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

      <!-- BARRE DE FILTRES + TRI + ICÔNES PANIER/FAVORIS -->
      <div class="flex flex-col md:flex-row justify-between items-center pb-6 border-b border-secondary/10 gap-4">

        <!-- Catégories (gauche) -->
        <div class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest font-medium">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-4 py-2 rounded-full transition-all duration-300"
            :class="activeCategory === category.id ? 'bg-primary text-white' : 'text-secondary hover:text-primary hover:bg-primary/5'"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Tri + Icônes panier/favoris (droite, en ligne horizontale) -->
        <div class="flex items-center gap-4 text-xs uppercase tracking-wider">
          <span class="text-primary/50">Trier :</span>
          <select
            v-model="sortBy"
            class="bg-white/50 border border-primary/10 rounded-full px-4 py-2 text-secondary font-medium focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none cursor-pointer text-xs appearance-none"
          >
            <option value="default">Défaut</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="popular">Plus populaires</option>
          </select>

          <!-- Séparateur -->
          <span class="w-px h-6 bg-primary/10"></span>

          <!-- Icône Favoris -->
          <router-link
            to="/favoris"
            class="bg-white/80 p-2 rounded-full shadow-sm hover:bg-tertiary hover:text-white transition-all duration-300 text-secondary hover:scale-110 flex items-center justify-center"
            title="Mes favoris"
          >
            <i class="bx bx-heart text-base"></i>
          </router-link>

          <!-- Icône Panier -->
          <router-link
            to="/panier"
            class="bg-white/80 p-2 rounded-full shadow-sm hover:bg-tertiary hover:text-white transition-all duration-300 text-secondary hover:scale-110 relative flex items-center justify-center"
            title="Mon panier"
          >
            <i class="bx bx-cart text-base"></i>
            <span class="absolute -top-1 -right-1 bg-tertiary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-md">0</span>
          </router-link>
        </div>
      </div>

      <!-- GRILLE DE PRODUITS AVEC LIENS UNIQUES -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-10">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="group flex flex-col items-center text-center bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 p-4"
        >
          <router-link
            :to="`/${product.link}`"
            class="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-3 block bg-secondary"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div class="absolute top-3 left-3 flex flex-col gap-1 z-10">
              <span
                v-if="product.isSale"
                class="bg-tertiary text-white text-[8px] uppercase tracking-widest px-2 py-0.5 rounded"
              >
                -20%
              </span>
              <span
                v-if="product.isNew"
                class="bg-primary text-white text-[8px] uppercase tracking-widest px-2 py-0.5 rounded"
              >
                New
              </span>
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-center gap-3 pb-4">
              <button
                @click.stop="addToCart(product)"
                class="w-9 h-9 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                title="Ajouter au panier"
              >
                <i class="bx bx-cart text-sm"></i>
              </button>
              <button
                @click.stop="toggleFavorite(product)"
                class="w-9 h-9 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                title="Ajouter aux favoris"
              >
                <i class="bx bx-heart text-sm"></i>
              </button>
            </div>
          </router-link>

          <div class="flex items-center text-amber-500/80 text-[10px] mb-1.5">
            <span v-for="star in 5" :key="star">
              {{ star <= product.rating ? '★' : '☆' }}
            </span>
          </div>

          <router-link
            :to="`/${product.link}`"
            class="text-xs font-medium text-secondary tracking-wide mb-1 line-clamp-1 hover:text-tertiary transition-colors"
          >
            {{ product.name }}
          </router-link>

          <p class="text-sm font-light text-secondary/80">
            {{ product.price }}
          </p>
        </div>
      </div>

      <!-- BOUTON VOIR PLUS -->
      <div class="text-center mt-16">
        <router-link
          to="/boutique/tous"
          class="inline-flex items-center gap-2 px-8 py-3 border border-primary/20 rounded-full text-xs uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
        >
          Voir tous les produits
          <i class="bx bx-arrow-right"></i>
        </router-link>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

// =============================================
// IMPORTS
// =============================================
import video1 from '@/assets/video/videoheader1.mp4';
import video2 from '@/assets/video/videoheader2.mp4';
import video3 from '@/assets/video/videoheader3.mp4';

import prod1 from '@/assets/images/serum1.png';
import prod2 from '@/assets/images/serum2.png';
import prod3 from '@/assets/images/serum3.png';
import prod4 from '@/assets/images/serum4.jpg';
import prod5 from '@/assets/images/serum5.jpg';
import prod6 from '@/assets/images/serum6.jpg';
import prod7 from '@/assets/images/skincarecomplet1.jpg';
import prod8 from '@/assets/images/skincarecomplet2.jpg';
import prod9 from '@/assets/images/creme1.jpg';
import prod10 from '@/assets/images/creme2.jpg';
import prod11 from '@/assets/images/creme3.jpg';
import prod12 from '@/assets/images/spary.jpg';
import prod13 from '@/assets/images/medicube1.jpg';
import prod14 from '@/assets/images/medicube2.jpg';
import prod15 from '@/assets/images/medicube3.jpg';

// =============================================
// ANIMATION OVERLAY
// =============================================
const showAnimation = ref(true);

// =============================================
// CARROUSEL
// =============================================
const heroMedia = ref([
  { src: video1, type: 'video' },
  { src: video2, type: 'video' },
  { src: video3, type: 'video' }
]);

const currentSlide = ref(0);
let slideInterval: any;

onMounted(() => {
  setTimeout(() => {
    showAnimation.value = false;
  }, 3500);

  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroMedia.value.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(slideInterval);
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
// ÉTATS
// =============================================
const activeCategory = ref('all');
const sortBy = ref('default');

const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'new', name: 'Nouveauté' },
  { id: 'sale', name: 'Promo' },
  { id: 'popular', name: 'Populaire' }
];

// =============================================
// PRODUITS
// =============================================
const products = ref<Product[]>([
  { id: 1, name: 'Universal Cream', price: '15.000 F', rawPrice: 15000, rating: 4, image: prod1, link: 'serum1' },
  { id: 2, name: 'Citrus Oil', price: '18.000 F', rawPrice: 18000, rating: 4, image: prod2, isSale: true, isNew: true, link: 'serum2' },
  { id: 3, name: 'Citrus Oil', price: '17.000 F', rawPrice: 17000, rating: 5, image: prod3, isSale: true, isNew: true, link: 'serum3' },
  { id: 4, name: 'Hair Strenght Shampoo', price: '15.000 F', rawPrice: 15000, rating: 3, image: prod4, isPopular: true, link: 'serum4' },
  { id: 5, name: 'Moisturizing Face Cream', price: '19.000 F', rawPrice: 19000, rating: 4, image: prod5, isSale: true, link: 'serum5' },
  { id: 6, name: 'Antiperspirant', price: '21.000 F', rawPrice: 21000, rating: 3, image: prod6, link: 'serum6' },
  { id: 7, name: 'ST Barth Body Oil', price: '5.000 F', rawPrice: 5000, rating: 5, image: prod7, isSale: true, link: 'serum7' },
  { id: 8, name: 'Body Cream Intensive', price: '15.000 F', rawPrice: 15000, rating: 4, image: prod8, isNew: true, link: 'serum8' },
  { id: 9, name: 'Body Cream', price: '25.000 F', rawPrice: 25000, rating: 4, image: prod9, isNew: true, link: 'serum9' },
  { id: 10, name: 'Hair Growth Serum', price: '20.000 F', rawPrice: 20000, rating: 4, image: prod10, link: 'serum10' },
  { id: 11, name: 'Essential Oil', price: '20.000 F', rawPrice: 20000, rating: 5, image: prod11, isSale: true, link: 'serum11' },
  { id: 12, name: 'Hair Strenght Shampoo', price: '20.000 F', rawPrice: 20000, rating: 3, image: prod12, isSale: true, link: 'serum12' },
  { id: 13, name: 'Makeup Fixers', price: '20.000 F', rawPrice: 20000, rating: 3, image: prod13, link: 'serum13' },
  { id: 14, name: 'Makeup Fixers', price: '20.000 F', rawPrice: 20000, rating: 4, image: prod14, link: 'serum14' },
  { id: 15, name: 'Coconut Hand Spray', price: '20.000 F', rawPrice: 20000, rating: 5, image: prod15, isSale: true, isNew: true, link: 'serum15' }
]);

// =============================================
// FILTRAGE & TRI
// =============================================
const filteredProducts = computed(() => {
  let list = [...products.value];

  if (activeCategory.value === 'new') {
    list = list.filter(p => p.isNew);
  } else if (activeCategory.value === 'sale') {
    list = list.filter(p => p.isSale);
  } else if (activeCategory.value === 'popular') {
    list = list.filter(p => p.isPopular || p.rating >= 4);
  }

  if (sortBy.value === 'price-asc') {
    list.sort((a, b) => a.rawPrice - b.rawPrice);
  } else if (sortBy.value === 'price-desc') {
    list.sort((a, b) => b.rawPrice - a.rawPrice);
  } else if (sortBy.value === 'popular') {
    list.sort((a, b) => b.rating - a.rating);
  }

  return list;
});

// =============================================
// ACTIONS
// =============================================
const addToCart = (product: Product) => {
  alert(`🛒 ${product.name} ajouté au panier !`);
};

const toggleFavorite = (product: Product) => {
  alert(`❤️ ${product.name} ajouté aux favoris !`);
};
</script>

<style scoped>
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

/* ===== SELECT PERSONNALISÉ ===== */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%231D3C25' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

/* ===== COULEURS VIA TAILWIND ===== */
/*
   Utilisation des variables de couleur définies dans tailwind.config.js ou dans le fichier CSS global.
   On s'assure que les classes bg-primary, text-primary, bg-secondary, text-secondary, bg-tertiary, text-tertiary sont disponibles.
   Dans ce composant, on utilise les classes Tailwind correspondantes.
*/
</style>

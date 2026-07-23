<template>
  <div class="min-h-screen bg-[#FDF2EA] text-secondary font-sans pb-20">
    <!-- ============================================= -->
    <!-- HERO BANNER (LA BOUTIQUE) -->
    <!-- ============================================= -->
    <section class="relative h-[25vh] md:h-[35vh] w-full overflow-hidden flex items-center justify-center">
      <img
        :src="heroShopImg"
        alt="La Boutique"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/40"></div>
      <h1 class="relative z-10 text-white text-3xl md:text-5xl font-light tracking-wide uppercase">
        La Boutique
      </h1>
    </section>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <!-- ============================================= -->
      <!-- BREADCRUMB & SHOPPING BAG ICON -->
      <!-- ============================================= -->
      <div class="flex justify-between items-center text-[11px] uppercase tracking-widest text-secondary/70 mb-10 pb-4 border-b border-secondary/10">
        <div class="flex items-center space-x-2">
          <RouterLink to="/boutique" class="hover:text-secondary transition-colors">LA BOUTIQUE</RouterLink>
          <span>/</span>
          <span class="text-secondary font-semibold">{{ product.name }}</span>
        </div>
        <button class="text-base text-secondary hover:opacity-75 transition-opacity" title="Panier">
          👜
        </button>
      </div>

      <!-- ============================================= -->
      <!-- SECTION DÉTAILS PRODUIT -->
      <!-- ============================================= -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <!-- Galerie Images (Gauche) -->
        <div class="space-y-4">
          <!-- Image Principale -->
          <div class="w-full aspect-square bg-white overflow-hidden shadow-sm">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          <!-- Miniatures -->
          <div class="grid grid-cols-3 gap-4">
            <button
              v-for="(img, index) in product.gallery"
              :key="index"
              @click="selectedImage = img"
              class="w-full aspect-square bg-white border-2 overflow-hidden transition-all duration-200"
              :class="selectedImage === img ? 'border-secondary' : 'border-transparent opacity-70 hover:opacity-100'"
            >
              <img :src="img" :alt="`Aperçu ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Informations Produit (Droite) -->
        <div class="flex flex-col justify-between">
          <div class="space-y-6">
            <!-- Entête & Favori -->
            <div class="flex justify-between items-start">
              <h2 class="text-2xl md:text-3xl font-light tracking-wide uppercase text-secondary">
                {{ product.name }}
              </h2>
              <button
                @click="isFavorite = !isFavorite"
                class="w-9 h-9 rounded-full border border-secondary/20 flex items-center justify-center text-sm transition-colors"
                :class="isFavorite ? 'bg-red-50 text-red-500 border-red-200' : 'text-secondary hover:bg-white'"
              >
                {{ isFavorite ? '❤️' : '♡' }}
              </button>
            </div>

            <!-- Prix & Disponibilité -->
            <div class="flex items-center space-x-4 text-sm tracking-wider">
              <span class="line-through text-secondary/40">{{ product.oldPrice }}</span>
              <span class="text-primary font-semibold text-base">{{ product.price }}</span>
              <span class="flex items-center gap-1.5 text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                In Stock
              </span>
            </div>

            <!-- Étoiles & Avis -->
            <div class="flex items-center space-x-2 text-xs">
              <div class="flex text-amber-600">
                <span v-for="s in 5" :key="s">{{ s <= product.rating ? '★' : '☆' }}</span>
              </div>
              <span class="text-secondary/60">({{ product.reviewsCount }} reviews)</span>
            </div>

            <!-- Quantité, Volume & Bouton Panier -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <!-- Selecteur Quantité -->
              <div class="flex items-center border border-secondary/30 bg-white/50 px-3 py-1.5 space-x-3 text-xs">
                <button @click="quantity > 1 && quantity--" class="hover:text-primary transition-colors">-</button>
                <span class="w-6 text-center font-medium">{{ quantity }}</span>
                <button @click="quantity++" class="hover:text-primary transition-colors">+</button>
              </div>

              <!-- Selecteur Volume/Taille -->
              <select
                v-model="selectedVolume"
                class="bg-white/50 border border-secondary/30 text-secondary text-xs py-1.5 px-3 uppercase tracking-wider focus:ring-0 cursor-pointer"
              >
                <option v-for="vol in product.volumes" :key="vol" :value="vol">{{ vol }}</option>
              </select>

              <!-- Bouton Ajouter au panier -->
              <button class="bg-secondary text-white text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-[#2b5a3a] transition-colors shadow-sm">
                Ajouter au panier
              </button>
            </div>

            <!-- Caractéristiques techniques -->
            <div class="space-y-1.5 text-[11px] text-secondary/80 pt-4 border-t border-secondary/10 leading-relaxed">
              <p><strong class="font-semibold text-secondary">Marque:</strong> {{ product.specs.brand }}</p>
              <p><strong class="font-semibold text-secondary">Type de produit:</strong> {{ product.specs.type }}</p>
              <p><strong class="font-semibold text-secondary">Volume:</strong> {{ product.specs.volume }}</p>
              <p><strong class="font-semibold text-secondary">Âge:</strong> {{ product.specs.age }}</p>
              <p><strong class="font-semibold text-secondary">Genre:</strong> {{ product.specs.gender }}</p>
              <p><strong class="font-semibold text-secondary">Type de cheveux:</strong> {{ product.specs.hairType }}</p>
              <p><strong class="font-semibold text-secondary">Pays d'origine:</strong> {{ product.specs.origin }}</p>
            </div>

            <!-- Description rapide -->
            <p class="text-xs leading-relaxed text-secondary/70 pt-2 italic">
              {{ product.shortDescription }}
            </p>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- SECTION ONGLETS (DESCRIPTION / INFOS / AVIS) -->
      <!-- ============================================= -->
      <section class="mb-24">
        <!-- Menu des onglets -->
        <div class="flex justify-center border-b border-secondary/10 mb-10 space-x-8 text-xs uppercase tracking-widest">
          <button
            @click="activeTab = 'description'"
            class="pb-3 transition-all relative"
            :class="activeTab === 'description' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-secondary hover:text-secondary'"
          >
            Description
          </button>
          <button
            @click="activeTab = 'info'"
            class="pb-3 transition-all relative"
            :class="activeTab === 'info' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-secondary/50 hover:text-secondary'"
          >
            Information complémentaire
          </button>
          <button
            @click="activeTab = 'reviews'"
            class="pb-3 transition-all relative"
            :class="activeTab === 'reviews' ? 'text-secondary font-bold border-b-2 border-secondary' : 'text-secondary/50 hover:text-secondary'"
          >
            Avis ({{ reviews.length }})
          </button>
        </div>

        <!-- Contenu Onglet: Description -->
        <div v-if="activeTab === 'description'" class="max-w-3xl mx-auto text-xs leading-relaxed text-secondary/80 space-y-4">
          <p>{{ product.fullDescription }}</p>
        </div>

        <!-- Contenu Onglet: Information complémentaire -->
        <div v-if="activeTab === 'info'" class="max-w-2xl mx-auto text-xs leading-relaxed text-secondary/80 space-y-2">
          <div class="grid grid-cols-2 py-2 border-b border-secondary/10">
            <span class="font-semibold">Composition:</span>
            <span>Ingrédients 100% bio et naturels</span>
          </div>
          <div class="grid grid-cols-2 py-2 border-b border-secondary/10">
            <span class="font-semibold">Conseils d'utilisation:</span>
            <span>Appliquer sur cheveux mouillés, masser puis rincer.</span>
          </div>
        </div>

        <!-- Contenu Onglet: Avis -->
        <div v-if="activeTab === 'reviews'" class="max-w-3xl mx-auto space-y-12">
          <!-- Liste des avis -->
          <div class="space-y-6">
            <div v-for="review in reviews" :key="review.id" class="border-b border-secondary/10 pb-6 space-y-2">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="text-xs font-semibold uppercase tracking-wider text-secondary">{{ review.author }}</h4>
                  <p class="text-[10px] text-secondary/50">{{ review.date }}</p>
                </div>
                <div class="flex text-amber-600 text-xs">
                  <span v-for="s in 5" :key="s">{{ s <= review.rating ? '★' : '☆' }}</span>
                </div>
              </div>
              <p class="text-xs text-secondary/80 leading-relaxed">{{ review.comment }}</p>

              <!-- Photos éventuelles jointes à l'avis -->
              <div v-if="review.photos && review.photos.length" class="flex gap-2 pt-2">
                <img
                  v-for="(photo, idx) in review.photos"
                  :key="idx"
                  :src="photo"
                  alt="Avis photo"
                  class="w-12 h-12 object-cover rounded-xs border border-secondary/10"
                />
              </div>
            </div>
          </div>

          <!-- Formulaire Ajouter un Avis -->
          <div class="pt-6 space-y-4">
            <h3 class="text-sm uppercase tracking-widest font-semibold text-secondary">Add Review</h3>

            <form @submit.prevent="submitReview" class="space-y-4 text-xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  v-model="newReview.name"
                  type="text"
                  placeholder="Nom *"
                  required
                  class="w-full bg-transparent border-b border-secondary/30 py-2 px-1 text-xs focus:outline-none focus:border-secondary"
                />
                <input
                  v-model="newReview.email"
                  type="email"
                  placeholder="Your Email *"
                  required
                  class="w-full bg-transparent border-b border-secondary/30 py-2 px-1 text-xs focus:outline-none focus:border-secondary"
                />
              </div>

              <textarea
                v-model="newReview.comment"
                rows="3"
                placeholder="Message *"
                required
                class="w-full bg-transparent border-b border-secondary/30 py-2 px-1 text-xs focus:outline-none focus:border-secondary resize-none"
              ></textarea>

              <div class="flex flex-wrap justify-between items-center gap-4 pt-2">
                <button
                  type="submit"
                  class="bg-secondary text-white text-[11px] uppercase tracking-widest px-6 py-2.5 hover:bg-secondary transition-colors"
                >
                  Laisser un avis
                </button>

                <div class="flex items-center gap-4 text-[11px]">
                  <div class="flex items-center gap-1">
                    <span class="text-secondary/70">Add Rating:</span>
                    <div class="flex text-amber-600 cursor-pointer">
                      <span
                        v-for="s in 5"
                        :key="s"
                        @click="newReview.rating = s"
                      >
                        {{ s <= newReview.rating ? '★' : '☆' }}
                      </span>
                    </div>
                  </div>

                  <label class="cursor-pointer text-secondary/70 underline underline-offset-2 hover:text-secondary">
                    AJOUTER PHOTOS
                    <input type="file" accept="image/*" multiple class="hidden" @change="handlePhotoUpload" />
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- SECTION PRODUITS SIMILAIRES -->
      <!-- ============================================= -->
      <section>
        <h2 class="text-center text-xl md:text-2xl font-light tracking-wide uppercase text- mb-12">
          Products similiares
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div
            v-for="item in similarProducts"
            :key="item.id"
            class="group flex flex-col items-center text-center"
          >
            <!-- Image & Badge -->
            <div class="relative w-full aspect-3/4 bg-white overflow-hidden mb-3">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span
                v-if="item.badge"
                class="absolute top-2 left-2 text-[9px] uppercase tracking-widest px-2 py-0.5 text-white"
                :class="item.badge === 'Sale' ? 'bg-primary' : 'bg-secondary'"
              >
                {{ item.badge }}
              </span>
            </div>

            <!-- Notation -->
            <div class="flex text-amber-600 text-[10px] mb-1">
              <span v-for="s in 5" :key="s">{{ s <= item.rating ? '★' : '☆' }}</span>
            </div>

            <!-- Titre & Prix -->
            <h3 class="text-xs font-medium text-secondary tracking-wide mb-1">{{ item.name }}</h3>
            <p class="text-xs text-secondary/80">{{ item.price }}</p>
          </div>
        </div>

        <!-- Indicateurs de carrousel (Dots) -->
        <div class="flex justify-center items-center space-x-2 mt-8">
          <span class="w-2 h-2 rounded-full bg-secondary"></span>
          <span class="w-2 h-2 rounded-full bg-primary/40"></span>
          <span class="w-2 h-2 rounded-full bg-primary/40"></span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// =============================================
// IMPORTS DES IMAGES DEPUIS ASSETS
// =============================================
import heroShopImg from '@/assets/images/header.jpg';

import mainProduct1 from '@/assets/images/serum1.png';
import mainProduct2 from '@/assets/images/serum1.png';
import mainProduct3 from '@/assets/images/serum1.png';

import reviewPhoto1 from '@/assets/images/serum1.png';

import similar1 from '@/assets/images/serum2.png';
import similar2 from '@/assets/images/serum3.png';
import similar3 from '@/assets/images/serum4.jpg';
import similar4 from '@/assets/images/serum5.jpg';

// TYPES
interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  comment: string;
  photos?: string[];
}

// ÉTATS LOCAUX
const activeTab = ref<'description' | 'info' | 'reviews'>('reviews');
const quantity = ref(1);
const selectedVolume = ref('252 ml');
const isFavorite = ref(false);

// DONNÉES PRODUIT PRINCIPAL
const product = ref({
  name: 'Hair Strenght Shampoo',
  oldPrice: '14.000 F XOF',
  price: '09.000 F XOF',
  rating: 3,
  reviewsCount: 2,
  volumes: ['252 ml', '400 ml', '1000 ml'],
  gallery: [mainProduct1, mainProduct2, mainProduct3],
  specs: {
    brand: 'Biolage',
    type: 'Hair Shampoo',
    volume: '250ml, 400ml, 1000ml',
    age: '18+',
    gender: 'Femme',
    hairType: 'Fin',
    origin: 'Germany'
  },
  shortDescription: 'Quam tot utrosque meos, tamidensis deprendo te, tale vulgas per in. Mutat vivend per ut, fraud nunquam accusamer intellegebat. Doloremque significantque usus, inprimis aliquid tenendinis.',
  fullDescription: 'Le Hair Strenght Shampoo nourrit en profondeur la fibre capillaire, redonne de l’éclat aux cheveux fatigués et fortifie la racine pour limiter la casse. Convient à une utilisation quotidienne.'
});

const selectedImage = ref(product.value.gallery[0]);

// AVIS CLIENTS
const reviews = ref<Review[]>([
  {
    id: 1,
    author: 'Barbara Assélian',
    date: 'Septembre 25, 2024 à 9:32 am',
    rating: 3,
    comment: 'Omne verterem euismod elementum nisi quis eleifend quam. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Pellentesque adipiscing commodo elit at imperdiet.'
  },
  {
    id: 2,
    author: 'Ofeila Kasodio',
    date: 'Juillet 20, 2024 à 11:15 am',
    rating: 4,
    comment: 'Omne verterem euismod elementum nisi quis eleifend quam. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Pellentesque adipiscing commodo elit at imperdiet.',
    photos: [reviewPhoto1]
  }
]);

// FORMULAIRE DE COMMENTAIRE
const newReview = ref({
  name: '',
  email: '',
  comment: '',
  rating: 5,
  photos: [] as string[]
});

const submitReview = () => {
  if (!newReview.value.name || !newReview.value.comment) return;

  reviews.value.unshift({
    id: Date.now(),
    author: newReview.value.name,
    date: 'Aujourd\'hui',
    rating: newReview.value.rating,
    comment: newReview.value.comment,
    photos: [...newReview.value.photos]
  });

  // Réinitialisation du formulaire
  newReview.value.name = '';
  newReview.value.email = '';
  newReview.value.comment = '';
  newReview.value.rating = 5;
  newReview.value.photos = [];
};

const handlePhotoUpload = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files) {
    Array.from(target.files).forEach(file => {
      const url = URL.createObjectURL(file);
      newReview.value.photos.push(url);
    });
  }
};

// PRODUITS SIMILAIRES
const similarProducts = ref([
  { id: 1, name: 'ST Barth Body Oil', price: '15.000 F XOF', rating: 5, image: similar1, badge: 'Sale' },
  { id: 2, name: 'Citrus Oil', price: '18.000 F XOF', rating: 5, image: similar2, badge: 'Sale' },
  { id: 3, name: 'Makeup Fixers', price: '20.000 F XOF', rating: 3, image: similar3 },
  { id: 4, name: 'Body Cream Intensive', price: '15.000 F XOF', rating: 4, image: similar4, badge: 'New' }
]);
</script>

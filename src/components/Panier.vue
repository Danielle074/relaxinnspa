<template>
  <div class="min-h-screen bg-white text-primary ">

  

    <!-- ============================================= -->
    <!-- HERO MINI AVEC TITRE + OVERLAY SOMBRE         -->
    <!-- ============================================= -->
    <section class="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
      <img
        :src="heroImage"
        alt="Panier"
        class="w-full h-full object-cover"
      />
      <!-- Overlay sombre avec dégradé pour améliorer la lisibilité -->
      <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
        <span class="text-white/90 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-down">Votre panier</span>
        <h1 class="text-white text-4xl md:text-6xl font-light leading-tight">
          Mon Panier
        </h1>
        <p class="text-white/80 text-sm max-w-md mt-3 tracking-widest">Retrouvez ici vos produits sélectionnés</p>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- CONTENU PANIER                               -->
    <!-- ============================================= -->
    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      <!-- Si le panier est vide -->
      <div v-if="cartItems.length === 0" class="text-center py-20">
        <div class="text-7xl mb-6 text-tertiary/30">
          <i class="bx bx-cart"></i>
        </div>
        <h2 class="text-3xl font-light text-primary">Votre panier est vide</h2>
        <p class="text-primary/60 mt-2">Découvrez nos produits et offrez-vous un moment de beauté.</p>
        <router-link
          to="/boutique"
          class="inline-block mt-8 px-8 py-3 bg-primary text-white hover:bg-tertiary transition duration-300 rounded-full text-xs uppercase tracking-widest"
        >
          Découvrir la boutique
        </router-link>
      </div>

      <!-- Panier avec articles -->
      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Liste des articles (2/3) -->
        <div class="lg:col-span-2 space-y-6">
          <!-- En-tête du panier -->
          <div class="hidden md:grid grid-cols-12 gap-4 text-xs uppercase tracking-widest text-tertiary pb-3 border-b border-primary/10">
            <div class="col-span-6">Produit</div>
            <div class="col-span-2 text-center">Prix</div>
            <div class="col-span-2 text-center">Quantité</div>
            <div class="col-span-2 text-right">Total</div>
          </div>

          <!-- Articles -->
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="group bg-secondary backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 md:p-6"
          >
            <div class="grid grid-cols-12 gap-4 items-center">
              <!-- Image + nom -->
              <div class="col-span-12 md:col-span-6 flex items-center gap-4">
                <router-link :to="`/${item.link}`" class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-xl bg-secondary">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                </router-link>
                <div>
                  <router-link :to="`/${item.link}`" class="text-sm font-medium text-primary hover:text-tertiary transition-colors">
                    {{ item.name }}
                  </router-link>
                  <p class="text-xs text-primary/50">Ref: {{ item.id }}</p>
                </div>
              </div>

              <!-- Prix unitaire -->
              <div class="col-span-4 md:col-span-2 text-center">
                <span class="text-sm font-light text-primary">{{ item.price }}</span>
              </div>

              <!-- Quantité -->
              <div class="col-span-4 md:col-span-2 flex items-center justify-center gap-2">
                <button
                  @click="decrementQuantity(item)"
                  class="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-xs"
                >
                  −
                </button>
                <span class="w-6 text-center text-sm">{{ item.quantity }}</span>
                <button
                  @click="incrementQuantity(item)"
                  class="w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-xs"
                >
                  +
                </button>
              </div>

              <!-- Total ligne + suppression -->
              <div class="col-span-4 md:col-span-2 flex items-center justify-end gap-3">
                <span class="text-sm font-medium text-primary">{{ (item.rawPrice * item.quantity).toLocaleString() }} F</span>
                <button
                  @click="removeItem(item)"
                  class="text-primary/30 hover:text-tertiary transition-colors"
                  title="Supprimer"
                >
                  <i class="bx bx-trash text-lg"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- Bouton retour boutique -->
          <div class="mt-6">
            <router-link
              to="/boutique"
              class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-tertiary hover:text-tertiary transition-colors"
            >
              <i class="bx bx-arrow-left"></i>
              Continuer mes achats
            </router-link>
          </div>
        </div>

        <!-- Résumé (1/3) -->
        <div class="lg:col-span-1">
          <div class="bg-secondary backdrop-blur-sm rounded-2xl shadow-sm p-6 md:p-8 sticky top-24">
            <h3 class="text-lg font-light text-primary mb-6">Résumé du panier</h3>

            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-primary">Sous-total</span>
                <span class="font-medium">{{ subtotal.toLocaleString() }} F</span>
              </div>
              <div class="flex justify-between">
                <span class="text-primary">Livraison</span>
                <span class="font-medium">{{ shippingCost === 0 ? 'Offerte' : shippingCost.toLocaleString() + ' F' }}</span>
              </div>
              <div v-if="discount > 0" class="flex justify-between text-tertiary">
                <span>Réduction</span>
                <span>- {{ discount.toLocaleString() }} F</span>
              </div>
              <div class="border-t border-primary/10 pt-3 mt-3">
                <div class="flex justify-between text-base font-medium">
                  <span>Total</span>
                  <span>{{ total.toLocaleString() }} F</span>
                </div>
              </div>
            </div>

            <!-- Code promo -->
            <div class="mt-6">
              <input
                v-model="promoCode"
                type="text"
                placeholder="Code promo"
                class="w-full px-4 py-2 border border-primary rounded-full text-sm focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none"
              />
              <button
                @click="applyPromo"
                class="w-full mt-2 px-4 py-2 bg-tertiary text-white hover:bg-tertiary hover:text-white transition duration-300 rounded-full text-xs uppercase tracking-widest"
              >
                Appliquer
              </button>
            </div>

            <!-- Bouton commander -->
            <router-link
              to="/commande"
              class="block w-full mt-6 px-6 py-3 bg-primary text-white hover:bg-tertiary transition duration-300 rounded-full text-center text-xs uppercase tracking-widest shadow-lg"
            >
              Passer la commande
            </router-link>

            <!-- Paiements sécurisés -->
            <div class="mt-4 text-center text-[10px] text-primary uppercase tracking-widest flex items-center justify-center gap-3">
              <i class="bx bx-lock-alt"></i>
              <span>Paiement sécurisé</span>
              <span class="w-px h-4 bg-primary/10"></span>
              <span>CB / Visa / Mastercard</span>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// =============================================
// IMPORTS
// =============================================
import heroImage from '@/assets/images/header.jpg';

// Import des produits (pour l'exemple, on utilise les mêmes que la boutique)
import prod1 from '@/assets/images/serum1.png';
import prod2 from '@/assets/images/serum2.png';
import prod3 from '@/assets/images/serum3.png';

// =============================================
// ANIMATION OVERLAY
// =============================================
const showAnimation = ref(true);

onMounted(() => {
  setTimeout(() => {
    showAnimation.value = false;
  }, 3500);
});

// =============================================
// TYPES
// =============================================
interface CartItem {
  id: number;
  name: string;
  link: string;
  price: string;
  rawPrice: number;
  image: string;
  quantity: number;
}

// =============================================
// DONNÉES PANIER (exemple statique)
// =============================================
const cartItems = ref<CartItem[]>([
  {
    id: 1,
    name: 'Universal Cream',
    link: 'serum1',
    price: '15.000 F',
    rawPrice: 15000,
    image: prod1,
    quantity: 2
  },
  {
    id: 2,
    name: 'Citrus Oil',
    link: 'serum2',
    price: '18.000 F',
    rawPrice: 18000,
    image: prod2,
    quantity: 1
  },
  {
    id: 3,
    name: 'Citrus Oil',
    link: 'serum3',
    price: '17.000 F',
    rawPrice: 17000,
    image: prod3,
    quantity: 1
  }
]);

// =============================================
// CALCULS
// =============================================
const subtotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.rawPrice * item.quantity, 0);
});

const shippingCost = computed(() => {
  // Livraison offerte à partir de 50.000 F
  return subtotal.value >= 50000 ? 0 : 2500;
});

const discount = ref(0);
const promoCode = ref('');

const applyPromo = () => {
  if (promoCode.value.toLowerCase() === 'beaute10') {
    discount.value = Math.round(subtotal.value * 0.1);
    alert('Code promo appliqué : -10%');
  } else if (promoCode.value.toLowerCase() === 'relax20') {
    discount.value = Math.round(subtotal.value * 0.2);
    alert('Code promo appliqué : -20%');
  } else if (promoCode.value) {
    alert('Code promo invalide');
  }
};

const total = computed(() => {
  return subtotal.value - discount.value + shippingCost.value;
});

// =============================================
// ACTIONS SUR LE PANIER
// =============================================
const incrementQuantity = (item: CartItem) => {
  item.quantity++;
};

const decrementQuantity = (item: CartItem) => {
  if (item.quantity > 1) {
    item.quantity--;
  } else {
    removeItem(item);
  }
};

const removeItem = (item: CartItem) => {
  const index = cartItems.value.indexOf(item);
  if (index > -1) {
    cartItems.value.splice(index, 1);
  }
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
</style>

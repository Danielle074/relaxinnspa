<template>
  <div class="min-h-screen bg-secondary text-primary">


    <!-- ============================================= -->
    <!-- HERO MINI AVEC TITRE                          -->
    <!-- ============================================= -->
    <section class="relative h-[vh40] md:h-[50vh] w-full overflow-hidden">
      <img
        :src="heroImage"
        alt="Rendez-vous"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
        <span class="text-white/60 text-xs uppercase tracking-[0.3em] mt-36 animate-fade-down">Prenez rendez-vous</span>
        <h1 class="text-white text-4xl md:text-5xl font-light leading-tight">
          Réservez votre <br class="hidden md:block" />moment de beauté
        </h1>
        <p class="text-white/70 text-sm max-w-md mt-3 tracking-widest">Offrez-vous un soin personnalisé dans notre institut</p>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- CONTENU RENDEZ-VOUS                          -->
    <!-- ============================================= -->
    <main class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- ============================================= -->
        <!-- FORMULAIRE (2/3)                              -->
        <!-- ============================================= -->
        <div class="lg:col-span-2">
          <div class=" rounded-2xl shadow-sm p-8 md:p-10">
            <h2 class="text-2xl md:text-3xl font-light text-primary mb-2">Remplissez le formulaire</h2>
            <p class="text-sm text-primary/60 mb-8">Nous vous recontacterons dans les plus brefs délais.</p>

            <form @submit.prevent="submitForm" class="space-y-6">

              <!-- Ligne : Nom + Prénom -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="lastName" class="block text-xs uppercase tracking-widest text-primary mb-2">Nom *</label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label for="firstName" class="block text-xs uppercase tracking-widest text-primary mb-2">Prénom *</label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <!-- Ligne : Email + Téléphone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-xs uppercase tracking-widest text-primary mb-2">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-xs uppercase tracking-widest text-primary mb-2">Téléphone *</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm"
                    placeholder="+225 00 00 00 00"
                  />
                </div>
              </div>

              <!-- Type de soin -->
              <div>
                <label for="service" class="block text-xs uppercase tracking-widest text-primary mb-2">Type de soin *</label>
                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm appearance-none"
                >
                  <option value="" disabled>Sélectionnez un soin</option>
                  <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
                </select>
              </div>

              <!-- Ligne : Date + Heure -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="date" class="block text-xs uppercase tracking-widest text-primary mb-2">Date *</label>
                  <input
                    id="date"
                    v-model="form.date"
                    type="date"
                    required
                    :min="minDate"
                    class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm"
                  />
                </div>
                <div>
                  <label for="time" class="block text-xs uppercase tracking-widest text-primary mb-2">Heure *</label>
                  <input
                    id="time"
                    v-model="form.time"
                    type="time"
                    required
                    class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm"
                  />
                </div>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-xs uppercase tracking-widest text-primary mb-2">Message (optionnel)</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 border border-primary/20 rounded-xl focus:ring-2 focus:ring-tertiary focus:border-tertiary outline-none transition bg-white/50 text-sm resize-none"
                  placeholder="Informations complémentaires, allergies, préférences..."
                ></textarea>
              </div>

              <!-- Bouton de soumission -->
              <div>
                <button
                  type="submit"
                  class="w-full px-8 py-4 bg-primary text-white hover:bg-tertiary transition duration-300 rounded-xl text-sm uppercase tracking-widest shadow-lg"
                >
                  <span v-if="!isSubmitting">Envoyer la demande</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <i class="bx bx-loader-alt animate-spin"></i>
                    Envoi en cours...
                  </span>
                </button>
                <p class="text-[10px] text-primary/40 text-center mt-3">
                  <i class="bx bx-lock-alt mr-1"></i>
                  Vos informations sont sécurisées
                </p>
              </div>

            </form>

            <!-- Message de confirmation -->
            <div v-if="isSubmitted" class="mt-6 p-4 bg-tertiary/10 border border-tertiary/20 rounded-xl text-center">
              <i class="bx bx-check-circle text-tertiary text-2xl"></i>
              <p class="text-sm text-tertiary mt-1">Votre demande a bien été envoyée ! Nous vous recontacterons rapidement.</p>
            </div>
          </div>
        </div>

        <!-- ============================================= -->
        <!-- SIDEBAR : INFOS PRATIQUES (1/3)              -->
        <!-- ============================================= -->
        <div class="lg:col-span-1 space-y-8">

          <!-- Horaires -->
          <div class="bg-white/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-tertiary mb-4 flex items-center gap-2">
              <i class="bx bx-time text-tertiary text-xl"></i>
              Horaires d'ouverture
            </h3>
            <ul class="space-y-2 text-sm text-primary">
              <li class="flex justify-between">
                <span>Lundi – Samedi</span>
                <span class="font-medium">08h – 20h</span>
              </li>
              <li class="flex justify-between text-primary">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <!-- Adresse -->
          <div class="bg-white/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-tertiary mb-4 flex items-center gap-2">
              <i class="bx bx-map text-tertiary text-xl"></i>
              Nous trouver
            </h3>
            <p class="text-sm text-primary leading-relaxed">
              Riviera, en face de la pharmacie Val De Grâce<br />
              Abidjan, Côte d'Ivoire
            </p>
          </div>

          <!-- Contact rapide -->
          <div class="bg-white/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-tertiary mb-4 flex items-center gap-2">
              <i class="bx bx-phone text-tertiary text-xl"></i>
              Contact rapide
            </h3>
            <div class="space-y-3 text-sm">
              <a href="tel:+22500000000" class="flex items-center gap-3 text-primary hover:text-tertiary transition">
                <i class="bx bx-phone-call text-tertiary"></i>
                +225 00 00 00 00
              </a>
              <a href="mailto:contact@relaxinnspa.com" class="flex items-center gap-3 text-primary/80 hover:text-tertiary transition">
                <i class="bx bx-envelope text-tertiary"></i>
                contact@relaxinnspa.com
              </a>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="bg-white/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-tertiary mb-4 flex items-center gap-2">
              <i class="bx bx-share-alt text-tertiary text-xl"></i>
              Suivez-nous
            </h3>
            <div class="flex gap-4 text-2xl text-primary">
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-tiktok"></i></a>
            </div>
          </div>

          <!-- Mini carte (simulée) -->
          <div class="bg-white/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-tertiary mb-4 flex items-center gap-2">
              <i class="bx bx-map-pin text-tertiary text-xl"></i>
              Localisation
            </h3>
            <div class="w-full h-40 bg-secondary/90 rounded-xl flex items-center justify-center text-primary/30 text-xs">
              <div class="text-center">
                <i class="bx bx-map text-4xl"></i>
                <p class="mt-1">Carte interactive</p>
                <p class="text-[10px]">(Google Maps intégré)</p>
              </div>
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
import heroImage from '@/assets/images/header1spa.jpg';

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
// FORMULAIRE
// =============================================
const form = ref({
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

// Liste des soins
const services = [
  'Soin du visage',
  'HydraFacial + Dermaplaning',
  'Microneedling',
  'Green Peel',
  'Électrolyse – Poil incarné',
  'Soin Oxygenéo',
  'Épilation Laser Définitive',
  'Package Traitement Personnalisé',
  'Lipocavitation + G8',
  'Carbon Peel',
  'HydraGlow',
  'Lifting Booster',
  'NanoNeedling',
  'Massage Relaxant',
  'Massage Tonique',
  'Gommage + Hammam',
  'Gommage Éclaircissant',
  'Package RelaxInn Beauty Spa',
  'Package Luxury Spa',
  'Package Peau Neuve',
  'Package Spécial Luxueux',
  'Soins des ongles (Gel, Acrylique, ...)',
  'Épilation (Aisselles, Maillot, ...)',
  'Maquillage Mariée',
  'Pack Mariage Classique / Premium'
];

// Date minimum (aujourd'hui)
const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split('T')[0];
});

// Soumission du formulaire
const submitForm = () => {
  isSubmitting.value = true;
  // Simulation d'envoi
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
    // Réinitialisation après 5 secondes (optionnel)
    setTimeout(() => {
      isSubmitted.value = false;
    }, 5000);
    // Ici vous pouvez envoyer les données à votre API
    console.log('Formulaire soumis :', form.value);
  }, 1500);
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

/* ===== ANIMATION DE CHARGEMENT ===== */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

/* ===== PERSONNALISATION DU SELECT ===== */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%231D3C25' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}
</style>

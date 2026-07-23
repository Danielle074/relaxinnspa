<template>
  <div class="min-h-screen bg-secondary text-primary ">



    <!-- ============================================= -->
    <!-- HERO MINI AVEC TITRE                          -->
    <!-- ============================================= -->
    <section class="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
      <img
        :src="heroImage"
        alt="Contact"
        class="w-full h-full object-cover"
      />
      <!-- Dégradé linéaire avec les couleurs -->
      <div class="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/40 to-transparent flex flex-col justify-center items-center text-center px-6">
        <span class="text-quaternary/80 text-xs uppercase tracking-[0.3em] mt-36 animate-fade-down">Contactez-nous</span>
        <h1 class="text-quaternary text-4xl md:text-5xl font-light leading-tight">
          Nous sommes <br class="hidden md:block" />à votre écoute
        </h1>
        <p class="text-quaternary/80 text-sm max-w-md mt-3 tracking-widest">Une question ? Un besoin ? N'hésitez pas à nous contacter.</p>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- CONTENU CONTACT                              -->
    <!-- ============================================= -->
    <main class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- ============================================= -->
        <!-- FORMULAIRE DE CONTACT (2/3)                   -->
        <!-- ============================================= -->
        <div class="lg:col-span-2">
          <div class="bg-quaternary/90 rounded-2xl shadow-sm p-8 md:p-10">
            <h2 class="text-2xl md:text-3xl font-light text-secondary mb-2">Envoyez-nous un message</h2>
            <p class="text-sm text-secondary/60 mb-8">Nous vous répondrons dans les meilleurs délais.</p>

            <form @submit.prevent="submitForm" class="space-y-6">

              <!-- Ligne : Nom + Prénom -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="lastName" class="block text-xs uppercase tracking-widest text-secondary/60 mb-2">Nom *</label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-secondary/20 rounded-xl focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none transition bg-quaternary/50 text-sm text-secondary"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label for="firstName" class="block text-xs uppercase tracking-widest text-secondary/60 mb-2">Prénom *</label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-secondary/20 rounded-xl focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none transition bg-quaternary/50 text-sm text-secondary"
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <!-- Ligne : Email + Téléphone -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-xs uppercase tracking-widest text-secondary/60 mb-2">Email *</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-secondary/20 rounded-xl focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none transition bg-quaternary/50 text-sm text-secondary"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-xs uppercase tracking-widest text-secondary/60 mb-2">Téléphone</label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-secondary/20 rounded-xl focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none transition bg-quaternary/50 text-sm text-secondary"
                    placeholder="+225 00 00 00 00"
                  />
                </div>
              </div>

              <!-- Sujet -->
              <div>
                <label for="subject" class="block text-xs uppercase tracking-widest text-secondary/60 mb-2">Sujet *</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-secondary/20 rounded-xl focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none transition bg-quaternary/50 text-sm text-secondary"
                  placeholder="Objet de votre message"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-xs uppercase tracking-widest text-secondary/60 mb-2">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-secondary/20 rounded-xl focus:ring-2 focus:ring-tertiary/30 focus:border-tertiary outline-none transition bg-quaternary/50 text-sm text-secondary resize-none"
                  placeholder="Détaillez votre demande..."
                ></textarea>
              </div>

              <!-- Bouton de soumission -->
              <div>
                <button
                  type="submit"
                  class="w-full px-8 py-4 bg-secondary text-quaternary hover:bg-tertiary hover:text-quaternary transition duration-300 rounded-xl text-sm uppercase tracking-widest shadow-lg"
                >
                  <span v-if="!isSubmitting">Envoyer le message</span>
                  <span v-else class="flex items-center justify-center gap-2">
                    <i class="bx bx-loader-alt animate-spin"></i>
                    Envoi en cours...
                  </span>
                </button>
                <p class="text-[10px] text-secondary/40 text-center mt-3">
                  <i class="bx bx-lock-alt mr-1"></i>
                  Vos informations sont sécurisées
                </p>
              </div>

            </form>

            <!-- Message de confirmation -->
            <div v-if="isSubmitted" class="mt-6 p-4 bg-tertiary/10 border border-tertiary/20 rounded-xl text-center">
              <i class="bx bx-check-circle text-tertiary text-2xl"></i>
              <p class="text-sm text-secondary mt-1">Votre message a bien été envoyé ! Nous vous répondrons rapidement.</p>
            </div>
          </div>
        </div>

        <!-- ============================================= -->
        <!-- SIDEBAR : INFOS CONTACT (1/3)                -->
        <!-- ============================================= -->
        <div class="lg:col-span-1 space-y-8">

          <!-- Coordonnées -->
          <div class="bg-quaternary/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-secondary mb-4 flex items-center gap-2">
              <i class="bx bx-info-circle text-tertiary text-xl"></i>
              Coordonnées
            </h3>
            <ul class="space-y-4 text-sm">
              <li class="flex items-start gap-3 text-secondary/80">
                <i class="bx bx-map text-tertiary text-lg mt-0.5"></i>
                <span>Riviera, en face de la pharmacie Val De Grâce, Abidjan</span>
              </li>
              <li class="flex items-center gap-3 text-secondary/80">
                <i class="bx bx-phone text-tertiary text-lg"></i>
                <a href="tel:+22500000000" class="hover:text-tertiary transition">+225 00 00 00 00</a>
              </li>
              <li class="flex items-center gap-3 text-secondary/80">
                <i class="bx bx-envelope text-tertiary text-lg"></i>
                <a href="mailto:contact@relaxinnspa.com" class="hover:text-tertiary transition">contact@relaxinnspa.com</a>
              </li>
            </ul>
          </div>

          <!-- Horaires -->
          <div class="bg-quaternary/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-secondary mb-4 flex items-center gap-2">
              <i class="bx bx-time text-tertiary text-xl"></i>
              Horaires d'ouverture
            </h3>
            <ul class="space-y-2 text-sm text-secondary/80">
              <li class="flex justify-between">
                <span>Lundi – Samedi</span>
                <span class="font-medium">08h – 20h</span>
              </li>
              <li class="flex justify-between text-secondary/50">
                <span>Dimanche</span>
                <span>Fermé</span>
              </li>
            </ul>
          </div>

          <!-- Réseaux sociaux -->
          <div class="bg-quaternary/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-secondary mb-4 flex items-center gap-2">
              <i class="bx bx-share-alt text-tertiary text-xl"></i>
              Suivez-nous
            </h3>
            <div class="flex gap-4 text-2xl text-secondary/50">
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="hover:text-tertiary transition"><i class="bx bxl-tiktok"></i></a>
            </div>
          </div>

          <!-- Carte interactive (simulée) -->
          <div class="bg-quaternary/90 rounded-2xl shadow-sm p-6">
            <h3 class="text-sm font-medium text-secondary mb-4 flex items-center gap-2">
              <i class="bx bx-map-pin text-tertiary text-xl"></i>
              Nous trouver
            </h3>
            <div class="w-full h-48 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary/30 text-xs border border-secondary/10">
              <div class="text-center">
                <i class="bx bx-map text-4xl"></i>
                <p class="mt-1 text-secondary/50">Carte interactive</p>
                <p class="text-[10px] text-secondary/30">(Google Maps)</p>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 inline-block text-xs text-tertiary hover:underline"
            >
              Ouvrir dans Google Maps →
            </a>
          </div>

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
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

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
      // Réinitialiser le formulaire
      form.value = {
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    }, 5000);
    // Ici vous pouvez envoyer les données à votre API
    console.log('Formulaire soumis :', form.value);
  }, 1500);
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

/* ===== ANIMATION DE CHARGEMENT ===== */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>

<template>
  <div class="min-h-screen bg-transparent flex flex-col relative overflow-x-hidden">

    <!-- ======== HEADER TRANSPARENT ======== -->
    <header class="absolute top-0 left-0 w-full z-50 py-4 px-4 sm:px-8 md:px-12 flex items-center justify-between lg:grid lg:grid-cols-3">

      <!-- Navigation Gauche (Desktop) & Bouton Hamburger (Mobile) -->
      <div class="flex items-center">
        <!-- Navigation Gauche Desktop -->
        <nav class="hidden lg:flex items-center space-x-6 xl:space-x-8 text-white font-medium text-xs tracking-widest uppercase">
          <router-link to="/" class="hover:text-tertiary transition">ACCUEIL</router-link>
          <router-link to="/apropos" class="hover:text-tertiary transition">À PROPOS</router-link>
          <router-link to="/services" class="hover:text-tertiary transition">SERVICES</router-link>
          <router-link to="/boutique" class="hover:text-tertiary transition">BOUTIQUE</router-link>
          <router-link to="/contacts" class="hover:text-tertiary transition">CONTACTS</router-link>
        </nav>

        <!-- Mobile Menu Toggle (Boxicons) -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden text-white focus:outline-none p-2 flex items-center justify-center text-3xl"
          aria-label="Menu"
        >
          <i v-if="!mobileOpen" class="bx bx-menu"></i>
          <i v-else class="bx bx-x"></i>
        </button>
      </div>

      <!-- Logo Centré -->
      <div class="flex items-center justify-center">
        <router-link to="/">
          <img :src="logo" alt="Relax Inn Spa" class="h-16 sm:h-20 md:h-24 object-contain" />
        </router-link>
      </div>

      <!-- Bouton Action Droite (Desktop) -->
      <div class="flex justify-end items-center">
        <router-link
          to="/rendez-vous"
          class="hidden lg:flex text-white text-xs tracking-widest uppercase underline underline-offset-4 items-center gap-1 hover:text-tertiary transition whitespace-nowrap"
        >
          PRENDRE RENDEZ-VOUS ↗
        </router-link>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden fixed top-24 left-0 w-full bg-secondary/95 backdrop-blur-md px-6 py-8 z-40 text-white border-b border-white/10 shadow-2xl"
      >
        <nav class="flex flex-col space-y-5 text-sm tracking-widest uppercase text-center">
          <router-link to="/" @click="mobileOpen = false" class="hover:text-tertiary transition">ACCUEIL</router-link>
          <router-link to="/apropos" @click="mobileOpen = false" class="hover:text-tertiary transition">À PROPOS</router-link>
          <router-link to="/services" @click="mobileOpen = false" class="hover:text-tertiary transition">SERVICES</router-link>
          <router-link to="/boutique" @click="mobileOpen = false" class="hover:text-tertiary transition">BOUTIQUE</router-link>
          <router-link to="/contacts" @click="mobileOpen = false" class="hover:text-tertiary transition">CONTACTS</router-link>
          <router-link
            to="/rendez-vous"
            @click="mobileOpen = false"
            class="text-tertiary font-semibold pt-4 border-t border-white/10 flex items-center justify-center gap-2"
          >
            PRENDRE RENDEZ-VOUS ↗
          </router-link>
        </nav>
      </div>
    </transition>

    <!-- ======== CONTENU PRINCIPAL ======== -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- ======== FOOTER RESPONSIVE ======== -->
    <footer class="bg-secondary text-tertiary pt-12 md:pt-16 pb-10 px-6 sm:px-10 md:px-16 border-t border-white/10">
      <div class="max-w-7xl mx-auto">

        <!-- Grand Titre -->
        <h2 class="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-tertiary mb-10 md:mb-16 text-center md:text-left">
          RELAX INN SPA
        </h2>

        <!-- Grille Principale du Footer -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-xs uppercase tracking-wider mb-12 md:mb-20">

          <!-- Bloc 1 : Horaires -->
          <div class="flex items-start gap-4">
            <span class="text-white/70 min-w-[70px]">HORAIRES</span>
            <div class="border-l border-white/20 pl-4 space-y-4">
              <div>
                <p class="text-white/70">LUNDI–VENDREDI</p>
                <p class="text-tertiary font-medium">08H–20H</p>
              </div>
              <div>
                <p class="text-white/70">SAMEDI</p>
                <p class="text-tertiary font-medium">10H–19H</p>
              </div>
            </div>
          </div>

          <!-- Bloc 2 : Menu Nav 1 & Réseaux -->
          <div class="space-y-3">
            <router-link to="/" class="block hover:text-white transition">ACCUEIL</router-link>
            <router-link to="/apropos" class="block hover:text-white transition">À PROPOS</router-link>
            <router-link to="/services" class="block hover:text-white transition">SERVICES</router-link>
            <router-link to="/boutique" class="block hover:text-white transition">BOUTIQUES</router-link>
            <router-link to="/contacts" class="block hover:text-white transition">CONTACTS</router-link>

            <div class="pt-4 space-y-2">
              <p class="text-white/70 font-semibold">NOS RESEAUX</p>
              <div class="flex flex-col space-y-2">
                <a href="#" class="hover:text-white transition">FACEBOOK</a>
                <a href="#" class="hover:text-white transition">INSTAGRAM</a>
                <a href="#" class="hover:text-white transition">TIKTOK</a>
              </div>
            </div>
          </div>

          <!-- Bloc 3 : Menu Nav 2 -->
          <div class="space-y-3">
            <router-link to="/services" class="block hover:text-white transition">SERVICES</router-link>
            <router-link to="/apropos" class="block hover:text-white transition">À PROPOS</router-link>
            <router-link to="/services" class="block hover:text-white transition">SERVICES</router-link>
            <router-link to="/boutique" class="block hover:text-white transition">BOUTIQUES</router-link>
            <router-link to="/contacts" class="block hover:text-white transition">CONTACTS</router-link>
          </div>

          <!-- Bloc 4 : Logo & Coordonnées -->
          <div class="flex flex-col justify-between space-y-6 sm:space-y-8">
            <div class="w-36 h-20 bg-tertiary/80 rounded-sm overflow-hidden flex items-center justify-center p-2">
              <img :src="logo" alt="Relax Inn Spa" class="h-full w-full object-contain brightness-0 invert" />
            </div>

            <div class="space-y-3 text-xs">
              <p>+225 07 07 746 759</p>
              <p>RELAXINNSPA.COM</p>
              <div class="pt-1">
                <p class="text-white/70">ADRESSE</p>
                <p class="mt-1 leading-relaxed">RIVIERA, EN FACE DE LA PHARMACIE VAL DE GRACE</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Bas de Footer / Copyright -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest text-white/50 border-t border-white/5 pt-6 text-center sm:text-left">
          <p>© 2026 TOUS DROITS RESERVES</p>
          <a href="#" class="hover:text-white transition">TERMES ET CONDITIONS</a>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/images/logorelaxinnspa.png';

const mobileOpen = ref(false);
</script>

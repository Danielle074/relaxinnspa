<template>
  <div class="min-h-screen bg-[#FDF2EA] text-primary overflow-x-hidden">

    <!-- ========================================================== -->
    <!--  ANIMATION D'ENTRÉE SUPER CHIC : PARTICULES DORÉES + LOTUS  -->
    <!-- ========================================================== -->
    <div
      v-if="showAnimation"
      class="fixed inset-0 z-50 flex items-center justify-center"
      :class="{ 'opacity-0 pointer-events-none': !showAnimation }"
      style="transition: opacity 1.2s ease;"
    >
      <!-- Fond avec dégradé élégant -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#1a1410] via-[#2d1f18] to-[#1a1410]"></div>

      <!-- Canvas pour les particules -->
      <canvas ref="canvasRef" class="absolute inset-0 w-full h-full"></canvas>

      <!-- Texte central qui apparaît en fondu -->
      <div class="relative z-10 text-center">
        <h1 class="text-white/90 text-2xl md:text-4xl font-light tracking-[0.4em] uppercase animate-title">
          Relax Inn Spa
        </h1>
        <div class="w-12 h-0.5 bg-amber-400/50 mx-auto mt-6 animate-title" style="animation-delay: 3s;"></div>
        <p class="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-4 animate-title" style="animation-delay: 3.5s;">
          L'Art du Soin Conscient
        </p>
      </div>
    </div>

    <!-- ============================================= -->
    <!-- 1. HEADER CARROUSEL AVEC ZOOM & GRADIENT -->
    <!-- ============================================= -->
    <header class="relative h-screen w-full overflow-hidden">
      <div
        v-for="(image, index) in headerImages"
        :key="index"
        class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100 z-10': currentSlide === index, 'opacity-0 z-0': currentSlide !== index }"
      >
        <img
          :src="image"
          alt="Ambiance Spa"
          class="w-full h-full object-cover transform scale-105 transition-transform duration-[8s] ease-in-out"
          :class="{ 'scale-100': currentSlide === index }"
        />
      </div>

      <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent z-20"></div>

      <!-- Contenu animé avec délai -->
      <div class="relative z-30 h-full flex flex-col justify-center items-center text-center px-4 md:px-12">
        <p class="text-white/60 text-xs uppercase tracking-[0.3em] mb-6 animate-fade-down" style="animation-delay: 0.2s">
          Institut de Beauté & Bien-Être
        </p>
        <h1 class="text-white text-5xl md:text-7xl font-light tracking-wide leading-tight max-w-4xl animate-fade-up" style="animation-delay: 0.4s">
          L'Art du Soin <br class="hidden md:block" /> Conscient
        </h1>
       <div class="mt-10 flex flex-wrap gap-6 justify-center animate-fade-up" style="animation-delay: 0.6s">
  <router-link to="/rendez-vous" class="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition duration-300">
    Prendre Rendez-vous
  </router-link>
  <router-link to="/services" class="px-8 py-3 text-white/80 text-xs uppercase tracking-widest hover:text-white transition">
    Découvrir
  </router-link>
</div>
      </div>

      <!-- Barre d'infos flottante -->
      <div class="absolute bottom-0 left-0 w-full z-30 px-6 md:px-12 py-5 bg-black/40 backdrop-blur-md flex flex-wrap md:flex-nowrap justify-between items-center gap-4 text-white/90 text-[10px] uppercase tracking-[0.2em] animate-fade-up" style="animation-delay: 0.8s">
        <div class="flex items-center gap-4">
          <div class="flex items-center text-amber-300 gap-1 text-sm">
            <span v-for="s in 5" :key="s">★</span>
          </div>
          <span>+500 Clients conquis</span>
        </div>
        <div class="flex items-center gap-2">
          <button
            v-for="(dot, index) in headerImages"
            :key="index"
            @click="currentSlide = index"
            class="h-1.5 rounded-full border border-white/40 transition-all duration-500"
            :class="[currentSlide === index ? 'w-8 bg-white' : 'w-3 bg-transparent']"
          ></button>
        </div>
        <div class="flex items-center gap-6">
          <span>Lun – Sam 08h – 20h</span>
          <span class="hidden md:inline">|</span>
          <span>+5 ans d'expérience</span>
        </div>
      </div>
    </header>

    <main>
      <!-- ============================================= -->
      <!-- 2. QUI SOMMES-NOUS ? AVEC COMPTEURS ANIMÉS -->
      <!-- ============================================= -->
      <section ref="aboutSection" class="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto scroll-reveal">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Qui sommes-nous ?</span>
            <h2 class="text-primary text-4xl md:text-5xl font-light leading-tight max-w-lg">
              Une expérience de beauté <br class="hidden md:block" />haut de gamme, <br class="hidden md:block" />pour vous.
            </h2>
            <p class="text-sm leading-relaxed text-secondary/80 max-w-md">
              Chez Relax Inn Spa, chaque soin est une rencontre entre le savoir-faire et l'attention portée à votre bien-être. Nos experts utilisent des produits certifiés et des techniques innovantes pour révéler votre beauté naturelle.
            </p>
            <a href="/apropos" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/70 hover:text-tertiary transition border-b border-primary/20 pb-1">
              En savoir plus →
            </a>
          </div>

          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img :src="spaCabineImg" alt="Cabine de soin" class="w-full h-[400px] object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <!-- Statistiques avec compteurs -->
            <div class="grid grid-cols-2 gap-4 mt-8 md:absolute md:-bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%]">
              <div class="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center stat-item">
                <p class="font-semibold text-2xl text-primary"><span class="counter" data-target="500">0</span>+</p>
                <p class="text-[10px] uppercase tracking-widest text-secondary/70">Clients</p>
              </div>
              <div class="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center stat-item">
                <p class="font-semibold text-2xl text-primary"><span class="counter" data-target="5">0</span> ans</p>
                <p class="text-[10px] uppercase tracking-widest text-secondary/70">Expérience</p>
              </div>
              <div class="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center stat-item">
                <p class="font-semibold text-2xl text-primary"><span class="counter" data-target="15">0</span>+</p>
                <p class="text-[10px] uppercase tracking-widest text-secondary/70">Produits certifiés</p>
              </div>
              <div class="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg text-center stat-item">
                <p class="font-semibold text-2xl text-primary flex items-center justify-center gap-1"><span class="counter" data-target="4.9">0</span> ★</p>
                <p class="text-[10px] uppercase tracking-widest text-secondary/70">Note moyenne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 3. NOS PRESTATIONS (SERVICES) AVEC ANIMATION -->
      <!-- ============================================= -->
      <section id="services" class="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto scroll-reveal">
        <div class="text-center mb-20">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Nos prestations</span>
          <h2 class="text-primary text-4xl md:text-6xl font-light leading-tight mt-4">Soins & Services</h2>
          <p class="text-sm text-secondary/70 max-w-2xl mx-auto mt-4">Des soins sur mesure, conçus pour répondre à toutes vos envies de beauté et de détente.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(service, index) in services" :key="index" class="group card-hover" :style="{ transitionDelay: (index * 0.15) + 's' }">
            <div class="relative overflow-hidden rounded-2xl shadow-lg">
              <img :src="service.image" :alt="service.title" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white text-sm uppercase tracking-widest">{{ service.title }}</p>
              </div>
            </div>
            <div class="mt-6 flex justify-between items-start gap-4 text-xs uppercase tracking-wider">
              <p class="font-semibold text-base text-primary group-hover:text-tertiary transition">{{ service.title }}</p>
              <div class="text-right space-y-1 text-secondary/70">
                <p v-for="item in service.items" :key="item">{{ item }}</p>
              </div>
            </div>
            <a href="#" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60 hover:text-tertiary transition border-b border-primary/20 pb-1 mt-2">
              Voir plus →
            </a>
          </div>
        </div>

        <div class="text-center mt-16">
          <a href="#" class="inline-block px-10 py-3 border border-primary/20 text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition duration-300 rounded-full">Tous nos services</a>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 4. AVANT / APRÈS AVEC SLIDER MODERNE -->
      <!-- ============================================= -->
      <section class="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Résultats réels</span>
          <h2 class="text-primary text-3xl md:text-5xl font-light mt-4">Avant / Après</h2>
        </div>

        <div class="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl group cursor-ew-resize" @mousemove="handleAfterBeforeMove" @mouseleave="resetAfterBefore">
          <img :src="apresImg" alt="Après traitement" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 w-full h-full overflow-hidden" :style="{ clipPath: `inset(0 ${100 - afterBeforeRange}% 0 0)` }">
            <img :src="avantImg" alt="Avant traitement" class="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div class="absolute inset-y-0 z-30 w-0.5 bg-white/80 flex items-center justify-center" :style="{ left: `${afterBeforeRange}%` }">
            <div class="w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary font-bold text-lg border-2 border-white/30 backdrop-blur-sm transition-all duration-200 hover:scale-110">
              ↔
            </div>
          </div>
          <span class="absolute bottom-6 left-6 z-30 text-white text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">Avant</span>
          <span class="absolute bottom-6 right-6 z-30 text-white text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">Après</span>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 5. BOUTIQUE AVEC DISPOSITION IDENTIQUE -->
      <!-- ============================================= -->
      <section class="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto scroll-reveal">
        <div class="text-center mb-20">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Nos produits</span>
          <h2 class="text-primary text-4xl md:text-6xl font-light leading-tight mt-4">Boutique</h2>
          <p class="text-sm text-secondary/70 max-w-2xl mx-auto mt-4">Des soins d'exception à emporter chez vous.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(product, index) in products" :key="index" class="group card-hover" :style="{ transitionDelay: (index * 0.15) + 's' }">
            <div class="relative overflow-hidden rounded-2xl shadow-lg">
              <img :src="product.image" :alt="product.name" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p class="text-white text-sm uppercase tracking-widest">{{ product.name }}</p>
              </div>
            </div>
            <div class="mt-6 flex justify-between items-start gap-4 text-xs uppercase tracking-wider">
              <p class="font-semibold text-base text-primary group-hover:text-tertiary transition">{{ product.name }}</p>
              <p class="text-right font-semibold text-primary">{{ product.price }}</p>
            </div>
            <a href="#" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60 hover:text-tertiary transition border-b border-primary/20 pb-1 mt-2">
              Acheter maintenant →
            </a>
          </div>
        </div>

        <div class="text-center mt-16">
          <a href="#" class="inline-block px-10 py-3 border border-primary/20 text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition duration-300 rounded-full">Visiter la boutique</a>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 6. TÉMOIGNAGES AVEC STATS ANIMÉES -->
      <!-- ============================================= -->
      <section class="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Ils nous font confiance</span>
          <h2 class="text-primary text-4xl md:text-6xl font-light leading-tight mt-4">Avis clients</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
          <div class="space-y-6 text-xs uppercase tracking-wider lg:sticky lg:top-24">
            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm text-center stat-item">
              <p class="font-semibold text-3xl text-primary"><span class="counter" data-target="500">0</span>+</p>
              <p class="text-secondary/70">Clients satisfaits</p>
            </div>
            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm text-center stat-item">
              <p class="font-semibold text-3xl text-primary"><span class="counter" data-target="15">0</span>+</p>
              <p class="text-secondary/70">Produits certifiés</p>
            </div>
            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm text-center stat-item">
              <p class="font-semibold text-3xl text-primary flex items-center justify-center gap-1"><span class="counter" data-target="4.9">0</span> ★</p>
              <p class="text-secondary/70">Note moyenne</p>
            </div>
            <div class="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm text-center stat-item">
              <p class="font-semibold text-3xl text-primary"><span class="counter" data-target="98">0</span>%</p>
              <p class="text-secondary/70">Taux de retour</p>
            </div>
            <div class="flex gap-2 pt-4 justify-center">
              <button class="w-10 h-10 flex items-center justify-center border border-secondary/20 rounded-full hover:bg-primary hover:text-white transition">←</button>
              <button class="w-10 h-10 flex items-center justify-center border border-secondary/20 rounded-full hover:bg-primary hover:text-white transition">→</button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-5 card-hover" :style="{ transitionDelay: (index * 0.15) + 's' }">
              <div class="flex items-center text-amber-400 gap-1 text-sm">
                <span v-for="s in 5" :key="s">★</span>
              </div>
              <p class="text-sm text-secondary/80 leading-relaxed italic">"{{ testimonial.text }}"</p>
              <div class="flex items-center gap-4 pt-4 border-t border-secondary/10">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full object-cover border-2 border-primary/10" />
                <div>
                  <p class="font-semibold text-sm">{{ testimonial.name }}</p>
                  <p class="text-[10px] uppercase tracking-widest text-secondary/60">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 7. CTA RÉSERVATION -->
      <!-- ============================================= -->
      <section id="reservation" class="relative h-[70vh] w-full overflow-hidden scroll-reveal">
        <img :src="ambianceReserverImg" alt="Ambiance spa" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
          <h2 class="text-white text-4xl md:text-6xl font-light leading-tight max-w-3xl animate-fade-up" style="animation-delay: 0.3s">
            Offrez-vous un <br />moment d'exception
          </h2>
          <div class="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs uppercase tracking-widest animate-fade-up" style="animation-delay: 0.6s">
            <a href="#" class="px-10 py-4 bg-white text-primary hover:bg-primary hover:text-white transition duration-300 shadow-2xl rounded-full">Prendre rendez-vous</a>
            <a href="#" class="text-white/80 hover:text-white transition border-b border-white/30 pb-1">Nous contacter</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

// --- IMAGES (remplacez par vos vrais chemins) ---
import header1 from '@/assets/images/header1spa.jpg';
import header2 from '@/assets/images/header2spa.jpg';
import header3 from '@/assets/images/header3spa.jpg';
import service1 from '@/assets/images/soindevisage.jpg';
import service2 from '@/assets/images/traitementpersonnalise.jpg';
import service3 from '@/assets/images/spaetbienetre.jpg';
import service4 from '@/assets/images/onglerie.jpg';
import prod1 from '@/assets/images/serum1.png';
import prod2 from '@/assets/images/serum2.png';
import prod3 from '@/assets/images/serum3.png';
import avantImg from '@/assets/images/avantetapres.jpg';
import apresImg from '@/assets/images/avantetapres.jpg';
import avatar1 from '@/assets/images/logorelaxinnspa.png';
import avatar2 from '@/assets/images/logorelaxinnspa.png';
import ambianceReserverImg from '@/assets/images/header1spa.jpg';
import spaCabineImg from '@/assets/images/apropos.jpg';

// --- ANIMATION OVERLAY ---
const showAnimation = ref(true);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let animationId: number | null = null;

// --- CARROUSEL HEADER ---
const headerImages = [header1, header2, header3];
const currentSlide = ref(0);
let slideInterval: number | undefined;

// --- PARTICULES ---
class Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  angle: number;
  opacity: number;
  color: string;
  phase: number;

  constructor(x: number, y: number, targetX: number, targetY: number, color: string) {
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.size = Math.random() * 3 + 1.5;
    this.speed = 0.02 + Math.random() * 0.02;
    this.angle = Math.random() * Math.PI * 2;
    this.opacity = 0;
    this.color = color;
    this.phase = Math.random() * Math.PI * 2;
  }

  update(progress: number) {
    // Mouvement fluide vers la cible avec une légère courbe

    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;

    this.x += dx * this.speed * 0.5;
    this.y += dy * this.speed * 0.5;

    // Effet de scintillement
    this.opacity = 0.5 + 0.5 * Math.sin(this.phase + performance.now() / 1000);

    // Augmente l'opacité progressivement
    if (progress > 0.1) {
      this.opacity = Math.min(this.opacity, progress * 1.5);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
    glow.addColorStop(0, this.color);
    glow.addColorStop(0.5, this.color + '40');
    glow.addColorStop(1, 'transparent');

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.opacity * 0.8;
    ctx.fill();

    // Lueur
    ctx.globalAlpha = this.opacity * 0.3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    ctx.globalAlpha = 1;
  }
}

// --- INITIALISATION DU CANVAS ---
function initParticles(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  canvas.width = width;
  canvas.height = height;

  // Points de la fleur de lotus (forme stylisée)
  const lotusPoints = [
    // Pétales
    { x: 0.5, y: 0.1 }, { x: 0.55, y: 0.15 }, { x: 0.65, y: 0.25 },
    { x: 0.7, y: 0.35 }, { x: 0.75, y: 0.45 }, { x: 0.78, y: 0.55 },
    { x: 0.8, y: 0.65 }, { x: 0.78, y: 0.75 }, { x: 0.72, y: 0.85 },
    { x: 0.65, y: 0.9 }, { x: 0.55, y: 0.92 }, { x: 0.45, y: 0.92 },
    { x: 0.35, y: 0.9 }, { x: 0.28, y: 0.85 }, { x: 0.22, y: 0.75 },
    { x: 0.2, y: 0.65 }, { x: 0.22, y: 0.55 }, { x: 0.25, y: 0.45 },
    { x: 0.3, y: 0.35 }, { x: 0.35, y: 0.25 }, { x: 0.45, y: 0.15 },
    // Centre
    { x: 0.5, y: 0.5 }, { x: 0.52, y: 0.48 }, { x: 0.48, y: 0.52 },
    { x: 0.5, y: 0.46 }, { x: 0.54, y: 0.5 }, { x: 0.46, y: 0.5 }
  ];

  // Couleurs dorées
  const colors = [
    '#C9A882', '#D4B28C', '#E8C9A0', '#F0D8B0', '#D4A870',
    '#C9A882', '#D4B28C', '#E8C9A0', '#F0D8B0'
  ];

  const particles: Particle[] = [];
  const numParticles = 120;

  // Créer les particules
  for (let i = 0; i < numParticles; i++) {
    const target = lotusPoints[i % lotusPoints.length];
    if (!target) continue;
    const color = colors[i % colors.length] || '#C9A882';
    const targetX = target.x * width;
    const targetY = target.y * height;

    // Position de départ aléatoire (en bordure ou dispersée)
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 200 + 100;
    const startX = width / 2 + Math.cos(angle) * radius * (0.5 + Math.random() * 0.5);
    const startY = height / 2 + Math.sin(angle) * radius * (0.5 + Math.random() * 0.5);

    particles.push(new Particle(startX, startY, targetX, targetY, color));
  }

  const startTime = performance.now();
  const duration = 4000; // 4 secondes pour l'assemblage

  function animate() {
    const now = performance.now();
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    ctx.clearRect(0, 0, width, height);

    // Fond avec dégradé subtil
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
    gradient.addColorStop(0, 'rgba(60, 40, 30, 0.3)');
    gradient.addColorStop(1, 'rgba(20, 15, 12, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Dessiner les particules
    particles.forEach(p => {
      p.update(progress);
      p.draw(ctx);
    });

    // Effet de lien entre les particules (style constellation)
    if (progress > 0.3 && particles?.length) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (p1 && p2) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 60) {
              const alpha = (1 - dist / 60) * 0.15 * (progress - 0.3) / 0.7;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(201, 168, 130, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
    }

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      // Animation terminée, on prépare la disparition
      setTimeout(() => {
        showAnimation.value = false;
      }, 1500);
    }
  }

  animate();
}

// --- MOUNT ---
onMounted(() => {
  // Initialiser le canvas pour l'animation
  nextTick(() => {
    if (canvasRef.value) {
      initParticles(canvasRef.value);
    }
  });

  // Carrousel
  slideInterval = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % headerImages.length;
  }, 5000);

  // Scroll reveal
  initScrollReveal();
  initCounters();
});

onUnmounted(() => {
  if (slideInterval !== undefined) clearInterval(slideInterval);
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
});

// --- SLIDER AVANT/APRÈS ---
const afterBeforeRange = ref(50);

const handleAfterBeforeMove = (event: MouseEvent) => {
  const container = event.currentTarget as HTMLElement;
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  let percentage = (x / rect.width) * 100;
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;
  afterBeforeRange.value = percentage;
};

const resetAfterBefore = () => {};

// --- SCROLL REVEAL ---
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        const counters = entry.target.querySelectorAll('.counter');
        if (counters.length) animateCounters(counters);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
}

// --- COMPTEURS ---
function animateCounters(counters: NodeListOf<Element>) {
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target') || '0');
    const duration = 1500;
    const startTime = performance.now();

    function updateCounter(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = eased * target;
      if (Number.isInteger(target)) {
        counter.textContent = Math.round(currentValue).toString();
      } else {
        counter.textContent = currentValue.toFixed(1);
      }
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toString();
      }
    }
    requestAnimationFrame(updateCounter);
  });
}

function initCounters() {
  const statItems = document.querySelectorAll('.stat-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter');
        if (counters.length) animateCounters(counters);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statItems.forEach(item => observer.observe(item));
}

// --- DONNÉES ---
const services = [
  {
    image: service1,
    title: 'Soin de visage',
    items: ['Microdermabrasion', 'Hydrafacial', 'Microneedling']
  },
  {
    image: service2,
    title: 'Traitement personnalisé',
    items: ['Kit Black Shine', 'Anti‑acné', 'Pores dilatés']
  },
  {
    image: service3,
    title: 'Bien‑être & Spa',
    items: ['Spa classique', 'Cocktail Glow', 'Massage relaxant']
  },
  {
    image: service4,
    title: 'RelaxInn Beauty Nail',
    items: ['Gel', 'Acrygel', 'Acrylique']
  }
];

const products = [
  { image: prod1, price: '25.000 F CFA', name: 'Wind Comfort Serum' },
  { image: prod2, price: '15.000 F CFA', name: 'Black Rose Cold Gold' },
  { image: prod3, price: '35.000 F CFA', name: 'Moringa Oil' }
];

const testimonials = [
  {
    text: "Un accueil chaleureux, des soins de qualité et une ambiance apaisante. Je ressors toujours ressourcée. Je recommande vivement !",
    avatar: avatar1,
    name: 'Sophia Konan',
    role: 'Cliente Makeup'
  },
  {
    text: "Professionnalisme et expertise sont au rendez-vous. Les produits utilisés sont de haute qualité et laissent la peau éclatante.",
    avatar: avatar2,
    name: 'Bosson Franck',
    role: 'Client Massage'
  }
];
</script>

<style scoped>
/* ===== TEXTE QUI APPARAÎT ===== */
@keyframes titleFade {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  30% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.animate-title {
  opacity: 0;
  animation: titleFade 2.5s ease forwards;
}

/* ===== ANIMATIONS DE BASE ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
}
.animate-fade-down {
  opacity: 0;
  animation: fadeDown 0.8s ease forwards;
}

/* ===== SCROLL REVEAL ===== */
.scroll-reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1s ease, transform 1s ease;
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.scroll-reveal.is-visible .card-hover {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* ===== CARTES ===== */
.card-hover {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}
.scroll-reveal.is-visible .card-hover {
  opacity: 1;
  transform: translateY(0);
}
.card-hover:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

/* ===== SLIDER ===== */
.cursor-ew-resize {
  cursor: ew-resize;
}

/* ===== COMPTEURS ===== */
.counter {
  display: inline-block;
  font-variant-numeric: tabular-nums;
}
</style>

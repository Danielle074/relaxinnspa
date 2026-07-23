<template>
  <div class="min-h-screen bg-[#FDF2EA] text-primary overflow-x-hidden">

    <!-- ============================================= -->
    <!-- HERO : GRANDE IMAGE + TITRE                   -->
    <!-- ============================================= -->
    <section class="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
      <img
        :src="heroImage"
        alt="Services Relax Inn Spa"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
        <span class="text-white/60 text-xs uppercase tracking-[0.3em] mt-28 animate-fade-down" style="animation-delay: 0.2s">Nos prestations</span>
        <h1 class="text-white text-4xl md:text-6xl font-light leading-tight max-w-4xl animate-fade-up" style="animation-delay: 0.4s">
          Des soins sur mesure <br class="hidden md:block" />pour votre beauté
        </h1>
        <p class="text-white/80 text-sm max-w-2xl mt-6 font-light animate-fade-up" style="animation-delay: 0.6s">
          Découvrez l'ensemble de nos prestations, conçues avec passion et expertise pour révéler votre éclat naturel.
        </p>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">

      <!-- ============================================= -->
      <!-- 1. SOINS DU VISAGE                            -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Soins du visage</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Des soins pour révéler <br class="hidden md:block" />l'éclat de votre peau
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(service, index) in facialServices" :key="index" class="group card-hover" :style="{ transitionDelay: (index * 0.05) + 's' }">
            <div class="relative overflow-hidden rounded-2xl shadow-lg">
              <img :src="service.image" :alt="service.title" loading="lazy" class="w-full h-64 object-cover transition-transform duration-400 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                <p class="text-white text-sm uppercase tracking-widest">{{ service.title }}</p>
              </div>
            </div>
            <div class="mt-6">
              <div class="flex justify-between items-start gap-4">
                <h3 class="text-lg font-light text-primary">{{ service.title }}</h3>
                <p class="font-semibold text-primary whitespace-nowrap">{{ service.price }}</p>
              </div>
              <p class="text-sm text-secondary/80 mt-3 leading-relaxed">{{ service.description }}</p>
              <router-link to="/rendez-vous" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60 hover:text-tertiary transition border-b border-primary/20 pb-1 mt-3">
                Prendre rendez-vous →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 2. TRAITEMENT DE LA PEAU                     -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Traitements de la peau</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Des solutions ciblées <br class="hidden md:block" />pour une peau parfaite
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="(service, index) in skinTreatments" :key="index" class="group card-hover" :style="{ transitionDelay: (index * 0.05) + 's' }">
            <div class="relative overflow-hidden rounded-2xl shadow-lg">
              <img :src="service.image" :alt="service.title" loading="lazy" class="w-full h-64 object-cover transition-transform duration-400 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
                <p class="text-white text-sm uppercase tracking-widest">{{ service.title }}</p>
              </div>
            </div>
            <div class="mt-6">
              <div class="flex justify-between items-start gap-4">
                <h3 class="text-lg font-light text-primary">{{ service.title }}</h3>
                <p class="font-semibold text-primary whitespace-nowrap">{{ service.price }}</p>
              </div>
              <p class="text-sm text-secondary/80 mt-3 leading-relaxed">{{ service.description }}</p>
              <router-link to="/rendez-vous" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60 hover:text-tertiary transition border-b border-primary/20 pb-1 mt-3">
                Prendre rendez-vous →
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 3. MOMENT BIEN-ÊTRE SPA (avec Boxicons)      -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Bien-être & Spa</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Offrez-vous un moment <br class="hidden md:block" />de détente absolue
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(service, index) in spaServices" :key="index" class="bg-white/90 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center card-hover" :style="{ transitionDelay: (index * 0.05) + 's' }">
            <i :class="service.icon" style="font-size: 2.8rem; color: #C9A882;"></i>
            <h4 class="text-primary font-semibold text-sm uppercase tracking-wider mt-4">{{ service.title }}</h4>
            <p class="text-2xl font-light text-primary mt-2">{{ service.price }}</p>
            <p class="text-xs text-secondary/70 mt-2">{{ service.desc }}</p>
            <router-link to="/rendez-vous" class="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary/60 hover:text-tertiary transition border-b border-primary/20 pb-1 mt-4">
              Réserver →
            </router-link>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 4. PACKAGES SPA (STYLE FORFAITS)             -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Packages Spa</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Des expériences complètes <br class="hidden md:block" />pour un bien-être total
          </h2>
          <p class="text-sm text-secondary/70 max-w-2xl mx-auto mt-4">
            Choisissez la formule qui vous correspond et offrez-vous un moment d'exception.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(pkg, index) in spaPackages"
            :key="index"
            class="bg-white/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover relative flex flex-col p-8"
            :style="{ transitionDelay: (index * 0.05) + 's' }"
          >
            <div v-if="index === 1" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-tertiary text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full">
              Recommandé
            </div>

            <div class="text-center">
              <i :class="pkg.icon" style="font-size: 2.5rem; color: #C9A882;"></i>
              <h3 class="text-xl font-light text-primary mt-3">{{ pkg.title }}</h3>
              <div class="w-12 h-0.5 bg-tertiary/30 mx-auto my-4"></div>
            </div>

            <ul class="space-y-3 text-sm text-secondary/80 flex-grow">
              <li v-for="item in pkg.items" :key="item" class="flex items-start gap-3">
                <i class="bx bx-check-circle text-tertiary text-base mt-0.5"></i>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="text-center mt-6 pt-6 border-t border-secondary/10">
              <span class="text-3xl font-light text-primary">{{ pkg.price }}</span>
              <span class="text-xs text-secondary/60 block mt-1">/ mois</span>
            </div>

            <div class="text-center mt-6">
              <router-link
                to="/rendez-vous"
                class="inline-block w-full px-6 py-3 border border-primary/20 text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition duration-300 rounded-full"
                :class="{ 'bg-primary text-white': index === 1 }"
              >
                Réserver
              </router-link>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center text-xs text-secondary/60">
          <i class="bx bx-calendar-check text-tertiary mr-2"></i>
          Tous nos packages sont valables 1 mois. Possibilité de personnalisation sur demande.
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 5. RELAXINN BEAUTY NAIL                      -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">RelaxInn Beauty Nail</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Des ongles sublimes <br class="hidden md:block" />pour des mains élégantes
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl h-96">
            <img :src="nailImg" alt="Ongles sublimés" loading="lazy" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, index) in nailServices" :key="index" class="bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 card-hover text-center" :style="{ transitionDelay: (index * 0.02) + 's' }">
              <p class="text-sm font-medium text-primary">{{ item.name }}</p>
              <p class="text-lg font-light text-tertiary">{{ item.price }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 6. ÉPILATION                                 -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Épilation</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Une peau douce et <br class="hidden md:block" />parfaitement lisse
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl h-96 order-last lg:order-first">
            <img :src="waxingImg" alt="Épilation" loading="lazy" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, index) in waxingServices" :key="index" class="bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 card-hover text-center" :style="{ transitionDelay: (index * 0.02) + 's' }">
              <p class="text-sm font-medium text-primary">{{ item.name }}</p>
              <p class="text-lg font-light text-tertiary">{{ item.price }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 7. RELAXINN BEAUTY MAKEUP                    -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">RelaxInn Beauty Makeup</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Sublimez votre beauté <br class="hidden md:block" />avec nos maquilleurs experts
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl h-96">
            <img :src="makeupImg" alt="Maquillage" loading="lazy" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          <div class="space-y-8">
            <div>
              <h4 class="text-primary font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <i class="bx bx-palette text-tertiary"></i> Maquillage & Coiffure
              </h4>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(item, index) in makeupServices" :key="index" class="bg-white/90 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 card-hover text-center" :style="{ transitionDelay: (index * 0.03) + 's' }">
                  <p class="text-sm font-medium text-primary">{{ item.name }}</p>
                  <p class="text-lg font-light text-tertiary">{{ item.price }}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 class="text-primary font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <i class="bx bx-heart text-tertiary"></i> Packages Mariage
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(pkg, index) in weddingPackages" :key="index" class="bg-white/90 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 card-hover" :style="{ transitionDelay: (index * 0.05) + 's' }">
                  <p class="font-medium text-primary">{{ pkg.name }}</p>
                  <p class="text-lg font-light text-tertiary">{{ pkg.price }}</p>
                  <ul class="text-xs text-secondary/70 mt-3 space-y-1">
                    <li v-for="item in pkg.items" :key="item">• {{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 8. CONTACT & ADRESSE                         -->
      <!-- ============================================= -->
      <section class="scroll-reveal">
        <div class="bg-white/90 rounded-3xl shadow-sm p-12 text-center card-hover">
          <h2 class="text-3xl md:text-4xl font-light text-primary">Prenez rendez-vous</h2>
          <div class="w-16 h-0.5 bg-tertiary/30 mx-auto my-6"></div>
          <p class="text-secondary/80 max-w-xl mx-auto">
            Réservez votre soin dès maintenant et offrez-vous un moment d'exception.
          </p>
          <div class="flex flex-wrap justify-center gap-8 mt-8">
            <div>
              <p class="text-xs uppercase tracking-widest text-secondary/60 flex items-center justify-center gap-2">
                <i class="bx bx-map text-tertiary"></i> Adresse
              </p>
              <p class="text-sm text-primary">Riviera, en face de la pharmacie Val De Grâce</p>
            </div>
            <div>
              <p class="text-xs uppercase tracking-widest text-secondary/60 flex items-center justify-center gap-2">
                <i class="bx bx-time text-tertiary"></i> Horaires
              </p>
              <p class="text-sm text-primary">Lundi – Samedi : 08h – 20h</p>
            </div>
          </div>
          <router-link to="/rendez-vous" class="inline-block mt-8 px-10 py-4 bg-primary text-white hover:bg-tertiary transition duration-300 rounded-full text-xs uppercase tracking-widest shadow-lg">
            Prendre rendez-vous
          </router-link>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// --- IMAGES ---
import heroImage from '@/assets/images/header1spa.jpg';
import MicroImage from '@/assets/images/microdermabrasion.png';
import DermaImage from '@/assets/images/dermaplaning.png';
import MicronImage from '@/assets/images/microneedling.png';
import GreenImage from '@/assets/images/GreenPeel.png';
import PoilImage from '@/assets/images/Poilincarne.png';
import OxygenImage from '@/assets/images/Oxygeneo.png';
import EpilationImage from '@/assets/images/LaserDefinitive.png';
import PackageImage from '@/assets/images/packagetraitement.png';
import LipocavitationImage from '@/assets/images/Lipocavitation.png';
import CarbonPeelImage from '@/assets/images/CarbonPeel.png';
import HydraGlowImage from '@/assets/images/soindevisage.jpg';
import LiftingBoosterImage from '@/assets/images/header2spa.jpg';
import nailImg from '@/assets/images/onglerie.jpg';
import waxingImg from '@/assets/images/pdg2.jpg';
import makeupImg from '@/assets/images/onglerie.jpg';
import spaPackageImg from '@/assets/images/onglerie.jpg';

// --- ANIMATION OVERLAY ---
const showAnimation = ref(true);

// ============================================================
// DONNÉES : SOINS DU VISAGE
// ============================================================
const facialServices = ref([
  {
    title: 'Soin Microdermabrasion',
    price: '30.000 F CFA',
    description: 'Un nettoyage en profondeur suivi d\'une exfoliation pour éliminer les cellules mortes, révéler une peau lumineuse et stimuler la circulation.',
    image: MicroImage
  },
  {
    title: 'HydraFacial + Dermaplaning',
    price: '35.000 F CFA',
    description: 'Combinaison puissante du Dermaplaning (exfoliation douce) et de l\'HydraFacial pour une peau lisse, éclatante et parfaitement hydratée.',
    image: DermaImage
  },
  {
    title: 'Microneedling',
    price: '45.000 F CFA',
    description: 'Micro-aiguilles qui stimulent la production de collagène et d\'élastine pour une peau plus ferme, lisse et rajeunie.',
    image: MicronImage
  },
  {
    title: 'Green Peel',
    price: '65.000 F CFA',
    description: 'Peeling 100% naturel à base d\'herbes qui exfolie, régénère et revitalise la peau pour un teint lumineux et une texture parfaite.',
    image: GreenImage
  },
  {
    title: 'Électrolyse – Poil incarné',
    price: '50.000 F / séance',
    description: 'Traitement ciblé pour éliminer les poils incarnés à la racine et prévenir les inflammations, taches et récidives (Maillot, Aisselles, Moustache, Menton).',
    image: PoilImage
  },
  {
    title: 'Soin Oxygenéo',
    price: '40.000 F / séance',
    description: 'Exfoliation douce et profonde qui oxygène la peau, affine le grain et illumine le teint. Avec traitement du double menton : 50.000 F.',
    image: OxygenImage
  },
  {
    title: 'Épilation Laser Définitive',
    price: 'À partir de 35.000 F',
    description: 'Réduction progressive et durable des poils. Maillot : 50.000 F, Aisselles : 35.000 F, Menton : 35.000 F, Jambes entières : 75.000 F, Corps entier : 225.000 F.',
    image: EpilationImage
  },
  {
    title: 'Package Traitement Personnalisé',
    price: 'À partir de 300.000 F',
    description: 'Anti-acné, anti-tâches, hyperpigmentation, pores dilatés. Inclut le kit Black Shine. 4 séances : 300.000 F, 6 séances : 450.000 F, 8 séances : 650.000 F, 10 séances : 800.000 F.',
    image: PackageImage
  }
]);

// ============================================================
// DONNÉES : TRAITEMENTS DE LA PEAU
// ============================================================
const skinTreatments = ref([
  {
    title: 'Lipocavitation + G8',
    price: '50.000 F / séance',
    description: 'Soin amincissant qui combine hypcavitation et technologie G8 pour réduire la cellulite, les graisses localisées et affiner la silhouette. Forfait 6 séances : 280.000 F, 10 séances : 480.000 F.',
    image: LipocavitationImage
  },
  {
    title: 'Carbon Peel',
    price: '55.000 F',
    description: 'Peeling au charbon actif associé au laser pour nettoyer, exfolier et raviver l\'éclat du teint. Pores resserrés, effet "glow" immédiat.',
    image: CarbonPeelImage
  },
  {
    title: 'HydraGlow',
    price: '40.000 F',
    description: 'Soin éclat qui illumine la peau en profondeur pour un teint lumineux et uniforme.',
    image: HydraGlowImage
  },
  {
    title: 'Lifting Booster',
    price: '40.000 F',
    description: 'Traitement liftant pour raffermir et tonifier la peau, réduisant les signes de l\'âge.',
    image: LiftingBoosterImage
  },
  {
    title: 'Microneedling + Vitamine C Glutathion',
    price: '55.000 F',
    description: 'Microneedling enrichi en vitamine C et glutathion pour un effet éclatant et antioxydant.',
    image: MicronImage
  },
  {
    title: 'NanoNeedling',
    price: '40.000 F',
    description: 'Version douce du microneedling pour une pénétration optimale des actifs sans micro-perforations.',
    image: MicronImage
  }
]);

// ============================================================
// DONNÉES : BIEN-ÊTRE SPA (avec icônes Boxicons)
// ============================================================
const spaServices = ref([
  {
    icon: 'bx bx-spa',
    title: 'Massage Relaxant',
    price: '25.000 F / 45min',
    desc: 'Détente profonde et libération des tensions musculaires.'
  },
  {
    icon: 'bx bx-body',
    title: 'Massage Tonique',
    price: '30.000 F / 45min',
    desc: 'Stimulation et revitalisation pour un corps dynamisé.'
  },
  {
    icon: 'bx bx-bath',
    title: 'Gommage + Hammam',
    price: '25.000 F',
    desc: 'Exfoliation douce suivie d\'un bain de vapeur pour une peau parfaite.'
  },
  {
    icon: 'bx bx-sun',
    title: 'Gommage Éclaircissant',
    price: '35.000 F',
    desc: 'Gommage enrichi en actifs illuminateurs pour un teint lumineux.'
  }
]);

// ============================================================
// DONNÉES : PACKAGES SPA
// ============================================================
const spaPackages = ref([
  {
    title: 'RelaxInn Beauty Spa',
    price: '50.000 F',
    icon: 'bx bx-spa',
    items: ['Gommage du corps', 'Soin de visage nettoyant'],
    image: spaPackageImg
  },
  {
    title: 'Luxury Spa',
    price: '65.000 F',
    icon: 'bx bx-crown',
    items: ['Soin visage', 'Hammam', 'Gommage corps', 'Enveloppement'],
    image: spaPackageImg
  },
  {
    title: 'Peau Neuve',
    price: '75.000 F',
    icon: 'bx bx-heart',
    items: ['Gommage corps', 'Hammam', 'Soin visage nettoyage profond', 'Masque corps'],
    image: spaPackageImg
  },
  {
    title: 'Spécial Luxueux',
    price: '100.000 F',
    icon: 'bx bx-gift',
    items: ['Gommage corps', 'Hammam', 'Massage relaxant', 'Soin visage', 'Jacuzzi'],
    image: spaPackageImg
  }
]);

// ============================================================
// DONNÉES : NAIL SERVICES
// ============================================================
const nailServices = ref([
  { name: 'Gel', price: '10.000 F' },
  { name: 'Acrylgel', price: '13.000 F' },
  { name: 'Acrylique', price: '15.000 F' },
  { name: 'Remplissage', price: '8.000 F' },
  { name: 'Gainage', price: '7.000 F' },
  { name: 'Pose capsule VSP', price: '7.000 F' },
  { name: 'Vernis permanent', price: '5.000 F' },
  { name: 'Dépose gel', price: '5.000 F' },
  { name: 'Dépose capsule', price: '2.000 F' },
  { name: 'Manucure', price: '5.000 F' },
  { name: 'Pédicure', price: '7.000 F' },
  { name: 'Pédicure duo', price: '10.000 F' },
  { name: 'Décoration', price: '500 F' },
  { name: 'Nail\'s Art', price: '1.000 F' }
]);

// ============================================================
// DONNÉES : ÉPILATION
// ============================================================
const waxingServices = ref([
  { name: 'Aisselles', price: '5.000 F' },
  { name: 'Menton', price: '5.000 F' },
  { name: 'Maillot', price: '15.000 F' },
  { name: 'Maillot intégral', price: '20.000 F' },
  { name: 'Vagacial', price: '25.000 F' },
  { name: 'Jambe entière', price: '20.000 F' },
  { name: 'Demi jambe', price: '10.000 F' },
  { name: 'Tout le corps', price: '60.000 F' }
]);

// ============================================================
// DONNÉES : MAKEUP
// ============================================================
const makeupServices = ref([
  { name: 'Maquillage Mariée', price: '175.000 F' },
  { name: 'Maquillage & Coiffure', price: '250.000 F' },
  { name: 'Maquillage à domicile', price: '50.000 F' },
  { name: 'Maquillage à l\'institut', price: '35.000 F' },
  { name: 'Maquillage Anniversaire', price: '50.000 F' },
  { name: 'Déplacement', price: '75.000 F' }
]);

// ============================================================
// DONNÉES : PACKAGES MARIAGE
// ============================================================
const weddingPackages = ref([
  {
    name: 'Pack Classique (1 mois)',
    price: '150.000 F',
    items: ['3 Gommage du corps', 'Hammam', 'Enveloppement', '1 Soin du visage', '1 Coup d\'éclat']
  },
  {
    name: 'Pack Premium (1 mois)',
    price: '250.000 F',
    items: ['3 Gommage du corps', 'Hammam', 'Masque du corps', '2 Soins du visage', '1 Coup d\'éclat', 'Une gamme de corps', 'Un kit visage']
  }
]);

// ============================================================
// MOUNT
// ============================================================
onMounted(() => {
  setTimeout(() => {
    showAnimation.value = false;
  }, 3500);
  initScrollReveal();
});

// ============================================================
// SCROLL REVEAL (optimisé)
// ============================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.3 }); // seuil augmenté pour moins de déclenchements

  revealElements.forEach(el => observer.observe(el));
}
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

/* ===== FADE UP / DOWN ===== */
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
  will-change: transform, opacity;
}
.animate-fade-down {
  opacity: 0;
  animation: fadeDown 0.8s ease forwards;
  will-change: transform, opacity;
}

/* ===== SCROLL REVEAL (optimisé) ===== */
.scroll-reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: transform, opacity;
}
.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.scroll-reveal.is-visible .card-hover {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* ===== CARTES AVEC DÉLAI (optimisé) ===== */
.card-hover {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.2s ease;
  will-change: transform, opacity;
}
.scroll-reveal.is-visible .card-hover {
  opacity: 1;
  transform: translateY(0);
}
.card-hover:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}
</style>

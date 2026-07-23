<template>
  <div class="min-h-screen bg-[#FDF2EA] text-primary overflow-x-hidden">



    <!-- ============================================= -->
    <!-- HERO : GRANDE IMAGE + TITRE ANIMÉ -->
    <!-- ============================================= -->
    <section class="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <img
        :src="heroImage"
        alt="Institut Relax Inn Spa"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-6">
        <span class="text-white/60 text-xs uppercase tracking-[0.3em] mb-4 animate-fade-down" style="animation-delay: 0.2s">Notre histoire</span>
        <h1 class="text-white text-4xl md:text-6xl font-light leading-tight max-w-3xl animate-fade-up" style="animation-delay: 0.4s">
          L'excellence au service <br class="hidden md:block" />de votre beauté
        </h1>
        <p class="text-white/80 text-sm max-w-2xl mt-6 font-light animate-fade-up" style="animation-delay: 0.6s">
          Depuis plus de 5 ans, Relax Inn Spa incarne l'élégance et le bien-être à travers des soins personnalisés et des produits d'exception.
        </p>
      </div>
    </section>

    <main class="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">
      <!-- ============================================= -->
      <!-- 1. QUI SOMMES-NOUS ? (histoire + valeurs)    -->
      <!-- ============================================= -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28 scroll-reveal">
        <div class="space-y-6">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Notre philosophie</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight">
            Un institut où <br class="hidden md:block" />chaque soin est <br class="hidden md:block" />une promesse
          </h2>
          <p class="text-sm leading-relaxed text-secondary/80">
            Fondé par des passionnés de beauté et de bien-être, Relax Inn Spa est né de la volonté d'offrir une expérience sensorielle unique. Nous sélectionnons avec rigueur des produits certifiés et formons nos équipes aux techniques les plus innovantes.
          </p>
          <p class="text-sm leading-relaxed text-secondary/80">
            Notre approche est holistique : nous prenons soin de votre corps, de votre esprit et de votre confiance en vous. Chaque prestation est adaptée à vos besoins et à votre rythme.
          </p>
          <div class="flex flex-wrap gap-6 pt-4">
            <div class="flex items-center gap-3 text-xs uppercase tracking-wider">
              <span class="w-2 h-2 bg-tertiary rounded-full"></span>
              <span>Produits bio & certifiés</span>
            </div>
            <div class="flex items-center gap-3 text-xs uppercase tracking-wider">
              <span class="w-2 h-2 bg-tertiary rounded-full"></span>
              <span>Équipe experte</span>
            </div>
          </div>
        </div>

        <div class="relative card-hover">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              :src="aboutImage"
              alt="Ambiance Relax Inn Spa"
              class="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div class="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg text-center hidden md:block animate-float">
            <p class="text-2xl font-light text-primary">+5 ans</p>
            <p class="text-[10px] uppercase tracking-widest text-secondary/70">D'excellence</p>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 2. CHIFFRES CLÉS AVEC COMPTEURS ANIMÉS        -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Nos chiffres</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            La confiance en quelques <br class="hidden md:block" />chiffres
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stat-item">
            <p class="text-4xl font-light text-primary"><span class="counter" data-target="500">0</span>+</p>
            <p class="text-xs uppercase tracking-widest text-secondary/70 mt-2">Clients conquis</p>
          </div>
          <div class="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stat-item">
            <p class="text-4xl font-light text-primary"><span class="counter" data-target="5">0</span>+</p>
            <p class="text-xs uppercase tracking-widest text-secondary/70 mt-2">Ans d'expérience</p>
          </div>
          <div class="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stat-item">
            <p class="text-4xl font-light text-primary"><span class="counter" data-target="15">0</span>+</p>
            <p class="text-xs uppercase tracking-widest text-secondary/70 mt-2">Produits certifiés</p>
          </div>
          <div class="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 stat-item">
            <p class="text-4xl font-light text-primary flex items-center justify-center gap-1"><span class="counter" data-target="4.9">0</span> ★</p>
            <p class="text-xs uppercase tracking-widest text-secondary/70 mt-2">Note moyenne</p>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 3. NOTRE ÉQUIPE                               -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Notre équipe</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Des experts passionnés
          </h2>
          <p class="text-sm text-secondary/70 max-w-2xl mx-auto mt-4">
            Des professionnels dévoués, formés aux dernières techniques, pour vous offrir le meilleur de la beauté et du bien-être.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="(member, index) in team" :key="index" class="group text-center card-hover" :style="{ transitionDelay: (index * 0.15) + 's' }">
            <div class="relative overflow-hidden rounded-2xl shadow-lg mb-6">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 class="text-xl font-light text-primary">{{ member.name }}</h3>
            <p class="text-xs uppercase tracking-widest text-secondary/70">{{ member.role }}</p>
            <p class="text-sm text-secondary/80 max-w-xs mx-auto mt-2">{{ member.bio }}</p>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 4. NOS ENGAGEMENTS (VALEURS)                  -->
      <!-- ============================================= -->
      <section class="mb-28 scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Nos engagements</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            Beauté responsable & <br class="hidden md:block" />bien-être durable
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(engagement, index) in engagements" :key="index" class="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center card-hover" :style="{ transitionDelay: (index * 0.1) + 's' }">
            <div class="text-4xl mb-4">{{ engagement.icon }}</div>
            <h4 class="text-primary font-semibold text-sm uppercase tracking-wider">{{ engagement.title }}</h4>
            <p class="text-xs text-secondary/70 mt-2">{{ engagement.desc }}</p>
          </div>
        </div>
      </section>

      <!-- ============================================= -->
      <!-- 5. GALERIE D'IMAGES (ambiance)                -->
      <!-- ============================================= -->
      <section class="scroll-reveal">
        <div class="text-center mb-16">
          <span class="inline-block text-xs uppercase tracking-[0.3em] text-secondary/60 bg-white/50 px-4 py-1.5 rounded-full">Galerie</span>
          <h2 class="text-4xl md:text-5xl font-light leading-tight mt-4">
            L'ambiance Relax Inn Spa
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(img, index) in galleryImages" :key="index" class="relative overflow-hidden rounded-2xl shadow-lg group card-hover" :style="{ transitionDelay: (index * 0.1) + 's' }">
            <img
              :src="img"
              alt="Ambiance spa"
              class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// --- IMAGES (remplacez par vos vrais chemins) ---
import heroImage from '@/assets/images/header1spa.jpg';
import aboutImage from '@/assets/images/apropos.jpg';

// Équipe
import team1 from '@/assets/images/pdg.jpg';
import team2 from '@/assets/images/pdg2.jpg';
import team3 from '@/assets/images/pdg3.jpg';

// Galerie
import gal1 from '@/assets/images/header1spa.jpg';
import gal2 from '@/assets/images/header2spa.jpg';
import gal3 from '@/assets/images/header3spa.jpg';
import gal4 from '@/assets/images/apropos.jpg';

// --- ANIMATION OVERLAY ---
const showAnimation = ref(true);

// --- DONNÉES ---
const team = ref([
  {
    image: team1,
    name: 'Sophie Delacroix',
    role: 'Fondatrice & Directrice',
    bio: 'Passionnée par les soins de la peau, Sophie a créé Relax Inn Spa pour offrir une expérience de beauté authentique.'
  },
  {
    image: team2,
    name: 'Marie Dubois',
    role: 'Esthéticienne en chef',
    bio: 'Spécialiste en soins du visage, Marie maîtrise les techniques les plus avancées pour révéler l\'éclat de votre peau.'
  },
  {
    image: team3,
    name: 'Jean Martin',
    role: 'Responsable bien-être',
    bio: 'Expert en massages et techniques de relaxation, Jean vous guide vers un équilibre corps-esprit.'
  }
]);

const galleryImages = ref([gal1, gal2, gal3, gal4]);

const engagements = ref([
  {
    icon: '🌿',
    title: 'Produits certifiés',
    desc: 'Nous sélectionnons des marques bio et éco-responsables.'
  },
  {
    icon: '🧴',
    title: 'Formules clean',
    desc: 'Nos soins sont sans parabènes, sans sulfates et non testés sur les animaux.'
  },
  {
    icon: '🤝',
    title: 'Conseil personnalisé',
    desc: 'Chaque cliente repart avec une routine adaptée à sa peau.'
  },
  {
    icon: '🌟',
    title: 'Innovation continue',
    desc: 'Nos équipes se forment régulièrement aux nouvelles tendances.'
  }
]);

// --- MOUNT ---
onMounted(() => {
  // Disparition de l'overlay après 3,5s
  setTimeout(() => {
    showAnimation.value = false;
  }, 3500);

  // Lancer les animations
  initScrollReveal();
  initCounters();
});

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

// --- COMPTEURS ANIMÉS ---
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
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-fade-up {
  opacity: 0;
  animation: fadeUp 0.8s ease forwards;
}
.animate-fade-down {
  opacity: 0;
  animation: fadeDown 0.8s ease forwards;
}
.animate-float {
  animation: float 3s ease-in-out infinite;
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

/* ===== CARTES AVEC DÉLAI ===== */
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

/* ===== COMPTEURS ===== */
.counter {
  display: inline-block;
  font-variant-numeric: tabular-nums;
}
</style>

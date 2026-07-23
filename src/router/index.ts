import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Layout.vue'
import Home from '@/views/Home.vue'
import Apropos from '@/views/Apropos.vue'
import Services from '@/views/Services.vue'
import Boutique from '@/views/Boutique.vue'
import Panier from '@/components/Panier.vue'
import Favoris from '@/components/Favoris.vue'
import RendezVous from '@/views/RendezVous.vue'
import Contacts from '@/views/Contacts.vue'



import Serum1 from '@/components/produit/Serum1.vue'
import Serum2 from '@/components/produit/Serum2.vue'
import Serum3 from '@/components/produit/Serum3.vue'
import Serum4 from '@/components/produit/Serum4.vue'
import Serum5 from '@/components/produit/Serum5.vue'
import Serum6 from '@/components/produit/Serum6.vue'
import Serum7 from '@/components/produit/Serum7.vue'
import Serum8 from '@/components/produit/Serum8.vue'
import Serum9 from '@/components/produit/Serum9.vue'
import Serum10 from '@/components/produit/Serum10.vue'
import Serum11 from '@/components/produit/Serum11.vue'
import Serum12 from '@/components/produit/Serum12.vue'
import Serum13 from '@/components/produit/Serum13.vue'
import Serum14 from '@/components/produit/Serum14.vue'
import Serum15 from '@/components/produit/Serum15.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'apropos',
          name: 'Apropos',
          component: Apropos
        },
        {
          path: 'services',
          name: 'Services',
          component: Services
        },
        {
          path: 'boutique',
          name: 'Boutique',
          component: Boutique
        },
        {
           path: 'panier',
          name: 'Panier',
          component: Panier
        },
        {
           path: 'favoris',
          name: 'favoris',
          component: Favoris
        },
         {
           path: 'rendez-vous',
          name: 'rendez-vous',
          component: RendezVous
        },
        {
           path: 'contacts',
          name: 'contacts',
          component: Contacts
        },
        {
           path: 'serum1',
          name: 'serum1',
          component: Serum1
        },

         {
           path: 'serum2',
          name: 'serum2',
          component: Serum2
        },
        {
           path: 'serum3',
          name: 'serum3',
          component: Serum3
        },
         {
           path: 'serum4',
          name: 'serum4',
          component: Serum4
        },
         {
           path: 'serum5',
          name: 'serum5',
          component: Serum5
        },
         {
           path: 'serum5',
          name: 'serum5',
          component: Serum5
        },
         {
           path: 'serum6',
          name: 'serum6',
          component: Serum6
        },
         {
           path: 'serum7',
          name: 'serum7',
          component: Serum7
        },
         {
           path: 'serum8',
          name: 'serum8',
          component: Serum8
        },
         {
           path: 'serum9',
          name: 'serum9',
          component: Serum9
        },{
           path: 'serum10',
          name: 'serum10',
          component: Serum10
        },
         {
           path: 'serum11',
          name: 'serum11',
          component: Serum11
        },
         {
           path: 'serum12',
          name: 'serum12',
          component: Serum12
        },
         {
           path: 'serum13',
          name: 'serum13',
          component: Serum13
        },
         {
           path: 'serum14',
          name: 'serum14',
          component: Serum14
        },
         {
           path: 'serum15',
          name: 'serum15',
          component: Serum15
        },
      ]

    }

  ]
})

export default router

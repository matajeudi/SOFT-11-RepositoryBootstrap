import { createRouter, createWebHistory } from 'vue-router'
import homepageView from '../views/homePage.vue'
import experiencesUserPageView from '../views/experiencesUser.vue'
import profesionalsPageView from '../views/profesionalsProfiles.vue'
import contactPageView from '../views/contactPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homepageView,
    },
    {
      path: '/home',
      name: 'Homepage',
      component: homepageView,
    },
    {
      path: '/Experiencias',
      name: 'Experiencias',
      component: experiencesUserPageView,
    },

        {
      path: '/Profesionals',
      name: 'Profesionals',
      component: profesionalsPageView,
    },
        {
      path: '/contact',
      name: 'Contact',
      component: contactPageView,
    },
  ],
})

export default router

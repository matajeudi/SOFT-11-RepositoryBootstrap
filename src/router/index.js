import { createRouter, createWebHistory } from 'vue-router'
import homepageView from '../views/homepage.vue'
import galleryCatsPageView from '../views/galleryCats.vue'
import informationPageView from '../views/galleryCats.vue'
import servicesPageView from '../views/profesionalsProfiles.vue'
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
      path: '/information',
      name: 'Information',
      component: informationPageView,
    },

        {
      path: '/services',
      name: 'Services',
      component: servicesPageView,
    },
        {
      path: '/contact',
      name: 'Contact',
      component: contactPageView,
    },
  ],
})

export default router

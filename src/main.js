/**
 * Proyecto: Implementación Web con Bootstrap
 * Autor: Jeudi Mata
 * UCENFOTEC - SOFT-11
 * Año: 2025
 */

import './styleSheet/customCSS.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

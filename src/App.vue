<!--
  Proyecto: Implementación Web con Bootstrap
  Autor: Jeudi Mata
  UCENFOTEC - SOFT-11
  Sept 16, 2025
-->

<script setup>

import { RouterView } from 'vue-router';

</script>
<template>
  <div class="app-container">
    <!-- Header y Nav siempre visibles en todas las vitas -->
    <div class="container-fluid">
      <div class="row bg-light py-3 mb-4">

        <header class="col-12 text-center mb-0">
          <h1 class="headerTitle">MewGods</h1>
          <nav class="col-12">
            <ul class="nav justify-content-center">
              <li class="nav-item"><router-link to="/home" class="nav-link">Inicio</router-link></li>
              <li class="nav-item"><router-link to="/information" class="nav-link">Galeria</router-link></li>
              <li class="nav-item"><router-link to="/services" class="nav-link">Profesionales</router-link></li>
              <li class="nav-item"><router-link to="/contact" class="nav-link">Contacto</router-link></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>

    <!-- Contenido dinamico de cada vista -->
    <RouterView />

    <!-- Footer siempre visible -->
    <div class="container-fluid">
      <footer class="row">
        <div class="col-12 text-center mt-4">
          <p class="footerText">© 2025 UCENFOTEC - EXPO 2 [SOFT-11] / Jeudi Mata. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  </div>

</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
@import './styleSheet/customCSS.css';
</style>

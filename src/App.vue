<!--
  Proyecto: Implementación Web con Bootstrap
  Autor: Jeudi Mata
  UCENFOTEC - SOFT-11
  Oct 16, 2025
-->

<script setup>

import { RouterView } from 'vue-router';

</script>
<template>

  <div class="app-container">
    <!-- Header y Nav siempre visibles en todas las vitas -->
    <div class="container-fluid">

      <div class="row text-center">
        <header class="col-12">

          <div class="row align-items-center p-2">

            <!-- Espacio izquierdo -->
            <div class="col-3"></div>

            <!-- Logo y título centrados -->
            <div class="col-6 d-flex justify-content-center align-items-center">
              <img src="../public/michiLogo.ico" alt="Logo" class="logo img-fluid me-2">
              <h1 class="headerTitle mb-0">MewGods</h1>
            </div>

            <!-- Iniciar sesión a la derecha boton -->
            <div class="col-3 d-flex justify-content-end">
              <button type="button" class="btn btn-signIn" data-bs-toggle="modal" data-bs-target="#iniciarSesion">
                <i class="bi bi-person-circle"></i> Iniciar Sesion
              </button>
            </div>
          </div>

          <!-- Modal de inicio de sesion -->
          <div class="modal fade" id="iniciarSesion" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content custom-modal">
                <div class="modal-header">
                  <h5 class="modal-title">
                    <i class="bi bi-person-workspace me-2"></i>Iniciar Sesión
                  </h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                    aria-label="Close"></button>
                </div>

                <!-- Body del modal donde incluye todo lo importante y accionable por el usuario -->
                <div class="modal-body">
                  <form class="needs-validation"> <!-- sin novalidate para usar validacion nativa del browser -->

                    <!-- Correo input con validacion de correo valido-->
                    <div class="mb-3">
                      <label for="email" class="form-label">Correo Electrónico *</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi bi-envelope"></i>
                        </span>
                        <input type="email" class="form-control" id="email" required>
                        <div class="invalid-feedback">Por favor ingresa un correo válido.</div>
                      </div>
                    </div>

                    <!-- contraseña-->
                    <div class="mb-3">
                      <label for="modalPassword" class="form-label">Contraseña *</label>
                      <input type="password" class="form-control" id="modalPassword" required>
                    </div>

                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="rememberMe">
                      <label class="form-check-label" for="rememberMe">
                        Recordar contraseña
                      </label>
                    </div>

                    <div class="mb-3 text-center">
                      <a href="#" class="text-decoration-none">¿Olvidaste tu contraseña?</a>
                    </div>

                    <div class="d-grid">
                      <button type="submit" class="btn btn-modal-primary">
                        <i class="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!--- Nav opciones y linkeando con las otras vistas -->
          <div class="row">
            <nav class="col-12">
              <ul class="nav justify-content-center">
                <li class="nav-item p-2"><router-link to="/home" class="nav-link">Inicio</router-link></li>
                <li class="nav-item p-2"><router-link to="/Experiencias" class="nav-link">Experiencias</router-link></li>
                <li class="nav-item p-2"><router-link to="/Profesionals" class="nav-link">Profesionales</router-link></li>
                <li class="nav-item p-2"><router-link to="/contact" class="nav-link">Contacto</router-link></li>
              </ul>
            </nav>
          </div>

        </header>
      </div>
    </div>

    <!-- Contenido dinamico de cada vista -->
    <RouterView />

    <!-- Footer siempre visible -->
    <div class="container-fluid">
      <footer class="row">
        <div class="col-12 text-center mt-3">
          <h3 class="footerText">MewGods</h3>
        </div>
        <div class="col-12 text-center mt-4">
          <p class="footerText">© 2025 UCENFOTEC - EXPO 2 [SOFT-11] / Jeudi Mata. Todos los derechos reservados.</p>
        </div>

        <!--Seccion footer con enlance y redes sociales usando iconografia de bootstrap y colores boostrap -->
        <div class="col-12 text-center mb-3">
          <div class="d-flex justify-content-center gap-3">
            <!--Facebook-->
            <a href="https://facebook.com" class="social-icon">
              <i class="bi bi-facebook"></i>
            </a>
            <!--Whatsapp-->
            <a href="https://wa.me/123456789" class="social-icon">
              <i class="bi bi-whatsapp"></i>
            </a>
            <!--TwitterX-->
            <a href="https://x.com" class="social-icon">
              <i class="bi bi-twitter-x"></i>
            </a>
            <!--Youtube-->
            <a href="https://youtube.com" class="social-icon">
              <i class="bi bi-youtube"></i>
            </a>
            <!--LinkedIn-->
            <a href="https://linkedin.com" class="social-icon">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

      </footer>
    </div>
  </div>

</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
@import './styleSheet/customCSS.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css';
</style>

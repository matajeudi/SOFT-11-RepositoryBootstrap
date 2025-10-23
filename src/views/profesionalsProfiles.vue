<template>

  <!-- Breadcrums agregados a la vista gestion de perfil profesionales -->
  <!-- Flexbox de Bootstrap para alinear breadcrumb y boton en extremos opuestos -->
  <div class="d-flex justify-content-between align-items-center mb-3">
    <nav aria-label="breadcrumb">
      <!-- Componente breadcrumb de Bootstrap con padding vertical personalizado -->
      <ol class="breadcrumb py-2 mb-0">
        <li class="breadcrumb-item">
          <router-link to="/home" class="text-decoration-none">
            Inicio
          </router-link>
        </li>

        <li class="breadcrumb-item">
          <router-link to="/Profesionals" class="text-decoration-none">Profesionales</router-link>
        </li>
      </ol>
    </nav>
  </div>

  <!-- Container fluid para usar todo el ancho disponible -->
  <div class="container fluid">

    <!-- Sistema de grid Bootstrap: una fila conteniendo todas las cards -->
    <div class="row">
      <!-- Grid responsivo: 1 columna movil, 2 tablet, 3 desktop -->
      <div class="col-12 col-md-6 col-lg-4">
        <!-- Ejemplo de simular perfil de usuario -->
        <!-- Componente card de Bootstrap para mostrar informacion estructurada -->
        <div class="card">
          <img src="https://cdn.stocksnap.io/img-thumbs/960w/animal-face_ZT9SCKS111.jpg" class="card-img-top"
            alt="Foto de perfil">

          <!-- Card body con texto centrado usando utility class de Bootstrap -->
          <div class="card-body text-center">
            <h1 class="card-title">Michi michi</h1>
            <!-- Text-muted para color de texto secundario -->
            <p class="card-text text-muted">Profesional de maullar a las 5am</p>
            <p class="card-text">
              <small class="text-muted">
                <!-- Icono de Bootstrap Icons con aria-label para accesibilidad -->
                <i class="bi bi-geo-alt" aria-label="Localidad"></i> San Jose, Costa Rica
              </small>
            </p>
          </div>

          <!-- Card footer con flexbox para distribuir botones -->
          <div class="card-footer">
            <!-- Flexbox utilities para espaciar botones en extremos -->
            <div class="d-flex justify-content-between">
              <!-- Botones personalizados con tamaño pequeño -->
              <button class="btn btn-welcome-primary btn-sm">Ver Perfil</button>
              <button class="btn btn-welcome-secondary btn-sm">Contactar</button>
            </div>
          </div>
        </div>
      </div>


      <!-- Ejemplo de simular perfil de profesionales -->
      <!-- Segunda card con mismo grid responsivo -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="https://cdn.stocksnap.io/img-thumbs/960w/animal-face_ZT9SCKS111.jpg" class="card-img-top"
            alt="Foto de perfil">

          <div class="card-body text-center">
            <h1 class="card-title">Peter Pancho</h1>
            <p class="card-text text-muted">Profesional en cazar ratones</p>
            <p class="card-text">
              <small class="text-muted">
                <i class="bi bi-geo-alt" aria-label="Localidad"></i> Heredia, Costa Rica
              </small>
            </p>
          </div>

          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <button class="btn btn-welcome-primary btn-sm">Ver Perfil</button>
              <button class="btn btn-welcome-secondary btn-sm">Contactar</button>
            </div>
          </div>
        </div>


      </div>

      <!-- Ejemplo de simular perfil de usuario -->
      <!-- Tercera card completando el layout responsivo -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src="https://cdn.stocksnap.io/img-thumbs/960w/animal-face_ZT9SCKS111.jpg" class="card-img-top"
            alt="Foto de perfil">

          <div class="card-body text-center">
            <h1 class="card-title">Manchitas</h1>
            <p class="card-text text-muted">Profesional de robar comida</p>
            <p class="card-text">
              <small class="text-muted">
                <i class="bi bi-geo-alt" aria-label="Localidad"></i> Cartago, Costa Rica
              </small>
            </p>
          </div>

          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <button class="btn btn-welcome-primary btn-sm">Ver Perfil</button>
              <button class="btn btn-welcome-secondary btn-sm">Contactar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Botón que activa el modal - boton de eliminar usuario-->
  <!-- <button type="button" class="btn" style="background: linear-gradient(45deg, #dc3545 0%, #c82333 100%); color: white; border: none;" data-bs-toggle="modal" data-bs-target="#deleteModal">
      <i class="bi bi-trash"></i> Eliminar Usuario
    </button> -->

  <!-- Modal -->
  <!-- <div class="modal fade" id="deleteModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" style="background: linear-gradient(90deg, var(--dark-navy) 0%, #dc3545 100%); color: white;">
            <h5 class="modal-title">
              <i class="bi bi-exclamation-triangle"></i> Confirmar Eliminación
            </h5>

            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body">
            <p>¿Estás seguro de que deseas eliminar al usuario <strong>Jeudi Mata</strong>?</p>

            <div class="alert alert-warning">
              <small>
                <i class="bi bi-info-circle"></i>
                Esta acción no se puede deshacer.
              </small>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-welcome-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>

            <button type="button" class="btn" style="background: linear-gradient(45deg, #dc3545 0%, #c82333 100%); color: white; border: none;">
              <i class="bi bi-trash"></i>Eliminar
            </button>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>

export default {

  name: 'profesionalsProfiles',

}

</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
@import '../styleSheet/customCSS.css';
</style>

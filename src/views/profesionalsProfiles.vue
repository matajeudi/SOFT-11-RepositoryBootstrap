<template>

  <!-- Breadcrums agregados a la vista gestion de perfil usuarios -->
  <div class="d-flex justify-content-between align-items-center mb-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none">
            <i class="bi bi-speedometer2"></i> Dashboard
          </a>
        </li>

        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none">Usuarios</a>
        </li>

        <li class="breadcrumb-item active" aria-current="page">Gestión de Perfiles</li>
      </ol>
    </nav>

    <button class="btn btn-welcome-primary btn-sm">
      <i class="bi bi-plus"></i> Nuevo Usuario
    </button>
  </div>

  <!--Ejemplo de simular perfil de usuario-->
  <div class="card" style="width: 18rem;">
    <img src="https://cdn.stocksnap.io/img-thumbs/960w/animal-face_ZT9SCKS111.jpg" class="card-img-top"
      alt="Foto de perfil">

    <div class="card-body text-center">
      <h5 class="card-title">Jeudi Mata</h5>
      <p class="card-text text-muted">Estudiante de UCenfotec</p>
      <p class="card-text">
        <small class="text-muted">
          <i class="bi bi-geo-alt"></i> San Jose, Costa Rica
        </small>
      </p>
    </div>

    <div class="card-footer">
      <div class="d-flex justify-content-between">
        <button class="btn btn-welcome-primary btn-sm">Ver Perfil</button>
        <button class="btn btn-welcome-secondary btn-sm">Contactar</button>
      </div>
    </div>

    <!-- Botón que activa el modal - boton de eliminar usuario-->
    <button type="button" class="btn" style="background: linear-gradient(45deg, #dc3545 0%, #c82333 100%); color: white; border: none;" data-bs-toggle="modal" data-bs-target="#deleteModal">
      <i class="bi bi-trash"></i> Eliminar Usuario
    </button>

    <!-- Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1">
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
    </div>
  </div>
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

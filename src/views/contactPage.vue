<template>

  <!-- Botón activador del modal -->
  <button type="button" class="btn btn-welcome-primary" data-bs-toggle="modal" data-bs-target="#contactModal">
    <i class="bi bi-envelope"></i> Contactanos
  </button>


  <!-- Modal -->
  <div class="modal fade" id="contactModal" tabindex="-1">

    <div class="modal-dialog modal-lg">
      <div class="modal-content custom-modal">
        <div class="modal-header">
          <h1 class="modal-title">
            <i class="bi bi-chat-dots"></i> Envíanos un Mensaje
          </h1>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="firstName" placeholder="Ingrese su nombre" required>
              </div>

              <div class="col-md-6 mb-3">
                <label for="lastName" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="lastName" placeholder="Ingrese su apellido" required>
              </div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Ingrese su correo" required>
            </div>

            <div class="mb-3">
              <label for="subject" class="form-label">Asunto</label>

              <select class="form-select" id="subject">
                <option>Consulta General</option>
                <option>Soporte Técnico</option>
                <option>Ventas</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea class="form-control" id="message" rows="4" placeholder="Ingrese su mensaje aqui..." required></textarea>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-welcome-secondary" data-bs-dismiss="modal">
            Cerrar
          </button>

          <button type="button" class="btn btn-modal-primary">
            <i class="bi bi-send"></i> Enviar Mensaje
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {

  name: 'contactPage',

}

</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
@import '../styleSheet/customCSS.css';
</style>

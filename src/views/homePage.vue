<template>

  <main class="container-fluid pb-5">

    <!-- Seccion de bienvenida principal con imagen y texto alineado -->
    <section class="welcome-section py-5">
      <div class="container">
        <div class="row align-items-center">

          <!-- Imagen de bienvenida a la izquierda -->
          <div class="col-md-6 mb-4 mb-md-0">
            <img src="/src/Images/catHello.gif" class="img-fluid rounded welcome-image" alt="Imagen de bienvenida MewGods">
          </div>

          <!-- Texto de bienvenida alineado a la derecha -->
          <div class="col-md-6">
            <div class="welcome-content">
              <h1 class="welcome-title mb-3">¡Bienvenido a MewGods!</h1>
              <h2 class="welcome-subtitle mb-4">Red de profesionales gatunos para contratar en tu vida.</h2>
              <p class="welcome-description mb-4">
                Descubre el mundo felino con nosotros con calificacion maxima 5 estrellas por expertos. En MewGods encontrarás una variedad de profesionales que diversas habilidades de las cuales muchos te sorprenderan. Desde romper macetas, cazar ratones, rascar las paredes y maullar a las 5am.
              </p>
              <p class="welcome-info mb-4">
                <strong>Proyecto:</strong> Implementación Web con Bootstrap<br>
                <strong>Curso:</strong> SOFT-11 - UCENFOTEC<br>
                <strong>Autor:</strong> Jeudi Mata
              </p>

              <!-- Botones de accion en la seccion de bienvenida -->
              <div class="welcome-actions">
                <button class="btn btn-welcome-secondary me-3">
                  <router-link to="/Experiencias"><i class="bi bi-images me-2"></i>Ver Experiencias de Usuarios
                  </router-link></button>
                <button class="btn btn-welcome-secondary2">
                  <router-link to="/Profesionals"><i class="bi bi-people me-2"></i>Conocer Profesionales
                  </router-link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seccion adicional con card informativa -->
    <section class="info-section py-2">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-12">
          <div class="card h-100">
            <div class="card-body d-flex flex-column text-center">
              <h1 class="card-title">Página de Inicio</h1>
              <p class="card-text">Expo 2 - Implementación Bootstrap</p>
              <div class="mt-auto">
                <span class="h4">Plataforma MewGods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

</template>

<script>

export default {
  name: 'homePage'
}

</script>



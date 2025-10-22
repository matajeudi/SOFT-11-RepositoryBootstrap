<template>

  <div class="container my-5">
    <h1 class="text-center mb-4" style="color: var(--dark-navy); font-weight: bold;">Lo que Dicen Nuestros Clientes</h1>

    <!--Historia de usuario 1-->
    <div id="testimonialsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card border-0 shadow">
                <div class="card-body text-center p-5">
                  <div class="mb-4">
                    <i class="bi bi-quote" style="font-size: 3rem; color: var(--royal-purple);"></i>
                  </div>
                  <p class="lead mb-4">
                    "Excelente servicio y productos de calidad. La atencion al cliente es
                    excepcional y siempre resuelven mis dudas rapidamente."
                  </p>
                  <div class="d-flex align-items-center justify-content-center">
                    <img
                      src="https://media.istockphoto.com/id/1345336329/photo/orange-and-domestic-cat.jpg?s=1024x1024&w=is&k=20&c=Q3CZ_e6LnQeykETFIS675cQFLDv-qHBSfKf7YviYpDU="
                      class="rounded-circle me-3" width="120" height="120" alt="Cliente">
                    <div>
                      <h2 class="mb-0" style="color: var(--dark-navy);">Miss Poptart</h2>
                      <small style="color: var(--royal-purple);">Cliente desde 2020</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Historia de usuario 2-->
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card border-0 shadow">
                <div class="card-body text-center p-5">
                  <div class="mb-4">
                    <i class="bi bi-quote" style="font-size: 3rem; color: var(--royal-purple);"></i>
                  </div>
                  <p class="lead mb-4">
                    "La plataforma es muy fácil de usar y los tiempos de entrega son increíbles.
                    Definitivamente recomiendo sus servicios."
                  </p>
                  <div class="d-flex align-items-center justify-content-center">
                    <img
                      src="https://media.istockphoto.com/id/1071075930/photo/portrait-of-hipster-white-cat-wearing-sunglasses-and-shirt-animal-fashion-concept.jpg?s=1024x1024&w=is&k=20&c=a4CDEguAKAT0FX9xRgfnSF8qK4vWnBGV6vpyeGjX29g="
                      class="rounded-circle me-3" width="120" height="120" alt="Cliente">
                    <div>
                      <h2 class="mb-0" style="color: var(--dark-navy);">Mc McFresh</h2>
                      <small style="color: var(--royal-purple);">Cliente desde 2019</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Historia de usuario 3-->
        <div class="carousel-item">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="card border-0 shadow">
                <div class="card-body text-center p-5">
                  <div class="mb-4">
                    <i class="bi bi-quote" style="font-size: 3rem; color: var(--royal-purple);"></i>
                  </div>
                  <p class="lead mb-4">
                    "Precios competitivos y gran variedad de productos. El proceso de compra es muy
                    sencillo y seguro."
                  </p>
                  <div class="d-flex align-items-center justify-content-center">
                    <img
                      src="https://media.istockphoto.com/id/1146568863/photo/business-cat-holding-cup-of-coffee.jpg?s=1024x1024&w=is&k=20&c=BIFtmvVtFspgKi2vjyXiBbQhmH183K-KC61Gjx1-0fY="
                      class="rounded-circle me-3" width="120" height="120" alt="Cliente">
                    <div>
                      <h2 class="mb-0" style="color: var(--dark-navy);">Juan Patricio</h2>
                      <small style="color: var(--royal-purple);">Cliente desde 2021</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Indicadores personalizados del carousel-->
      <div class="carousel-indicators position-relative mt-4">
        <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'galleryCats',
}


</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
@import '../styleSheet/customCSS.css';
</style>

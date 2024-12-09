export function renderBanner() {
  return `
    <div class="banner bg-primary text-white py-5 mb-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h1 class="display-4">Welcome to Our Site</h1>
            <p class="lead">Discover amazing content and services</p>
            <button class="btn btn-light btn-lg">Learn More</button>
          </div>
          <div class="col-md-6">
            <img src="https://picsum.photos/500/300" class="img-fluid rounded" alt="Banner image">
          </div>
        </div>
      </div>
    </div>
  `;
}
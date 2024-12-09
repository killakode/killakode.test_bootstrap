export function renderCards() {
  const cards = [
    {
      title: 'Card 1',
      text: 'Some quick example text for Card 1',
      image: 'https://picsum.photos/300/200?random=1'
    },
    {
      title: 'Card 2',
      text: 'Some quick example text for Card 2',
      image: 'https://picsum.photos/300/200?random=2'
    },
    {
      title: 'Card 3',
      text: 'Some quick example text for Card 3',
      image: 'https://picsum.photos/300/200?random=3'
    }
  ];

  return `
    <div class="container mb-5">
      <h2 class="text-center mb-4">Our Services</h2>
      <div class="row g-4">
        ${cards.map(card => `
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
              <img src="${card.image}" class="card-img-top" alt="${card.title}">
              <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.text}</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
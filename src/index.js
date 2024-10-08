const form = document.querySelector('.contact-me-form');

// Carousels
document.querySelectorAll('.carousel').forEach((carousel) => {
  const images = carousel.querySelectorAll('.carousel-image');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');

  let currentIndex = 0;

  function updateCarousel() {
    images.forEach((image, index) => {
      image.classList.remove('active');
      if (index === currentIndex) {
        image.classList.add('active');
      }
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  updateCarousel();
});

const formFields = document.querySelectorAll('input, textarea');

formFields.forEach((field, index) => {
  field.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (field.tagName === 'TEXTAREA') {
        return;
      }

      event.preventDefault();

      const nextField = formFields[index + 1];
      if (nextField) {
        nextField.focus();
      }
    }
  });
});

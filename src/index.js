document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    const nextButton = carousel.querySelector(".next-btn");
    const prevButton = carousel.querySelector(".prev-btn");
    let currentIndex = 0;

    // Affiche la première image
    images[currentIndex].classList.add("active");

    // Fonction pour montrer l'image à l'index donné
    const showImage = (index) => {
      images[currentIndex].classList.remove("active"); // Masquer l'image actuelle
      currentIndex = (index + images.length) % images.length; // Calculer le nouvel index
      images[currentIndex].classList.add("active"); // Afficher la nouvelle image
    };

    // Écouteurs d'événements pour les boutons
    nextButton.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });

    prevButton.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });
  });
});

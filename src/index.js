document.addEventListener("DOMContentLoaded", () => {
  // Carousels
  const carousels = document.querySelectorAll(".carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    const nextButton = carousel.querySelector(".next-btn");
    const prevButton = carousel.querySelector(".prev-btn");
    let currentIndex = 0;

    images[currentIndex].classList.add("active");

    const showImage = (index) => {
      images[currentIndex].classList.remove("active");
      currentIndex = (index + images.length) % images.length;
      images[currentIndex].classList.add("active");
    };

    nextButton.addEventListener("click", () => {
      showImage(currentIndex + 1);
    });

    prevButton.addEventListener("click", () => {
      showImage(currentIndex - 1);
    });
  });

  // Input

  // Sélectionne tous les inputs et textareas dans le formulaire
  const formFields = document.querySelectorAll("input, textarea");

  // Parcours chaque champ pour détecter quand l'utilisateur appuie sur 'Entrée'
  formFields.forEach((field, index) => {
    field.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (field.tagName === "TEXTAREA") {
          // Ne rien faire ici pour permettre le retour à la ligne
          return;
        }

        event.preventDefault(); // Empêche le comportement par défaut d'envoyer le formulaire

        // Passe au champ suivant si disponible
        const nextField = formFields[index + 1];
        if (nextField) {
          nextField.focus(); // Déplace le focus vers le champ suivant
        }
      }
    });
  });
});

// email

import { init, send } from "emailjs-com";

const YOUR_SERVICE_ID = "";
const YOUR_TEMPLATE_ID = "";
const YOUR_USER_ID = "YOUR_USER_ID";

init(YOUR_USER_ID);

const form = document.querySelector(".contact-me-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    firstname: formData.get("firstname"),
    details: formData.get("details"),
  };

  send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, data)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      // Vous pouvez afficher un message de succès à l'utilisateur ici
    })
    .catch((err) => {
      console.error("FAILED...", err);
      // Vous pouvez afficher un message d'erreur à l'utilisateur ici
    });
});

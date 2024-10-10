import { init, send } from 'emailjs-com';

const YOUR_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const YOUR_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const YOUR_API_KEY = import.meta.env.VITE_API_KEY;

init(YOUR_API_KEY);

const form = document.getElementById('contact-me-form');
const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  document.body.classList.add('body-loading');
  const spinner = document.getElementById('loading-spinner');
  spinner.style.display = 'block';
  submitButton.disabled = true;

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    firstname: formData.get('firstname'),
    details: formData.get('details'),
  };

  try {
    await send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, data);
    window.location.href = '/';
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error);
    alert("Une erreur est survenue lors de l'envoi de votre message.");
  } finally {
    spinner.style.display = 'none';
    document.body.classList.remove('body-loading');
    submitButton.disabled = false;
  }
});

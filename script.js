javascript
const form = document.querySelector('form');
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Récupération des valeurs des champs
  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();
  
  // Vérification des champs vides
  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }
  
  // Envoi du formulaire
  alert('Formulaire envoyé avec succès !');
  
  // Réinitialisation du formulaire
  form.reset();
  inputs.forEach(input => input.nextElementSibling.classList.remove('active'));
});

// Activation de l'état "active" des labels lorsqu'un champ est renseigné
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.value) {
      input.nextElementSibling.classList.add('active');
    } else {
      input.nextElementSibling.classList.remove('active');
    }
  });
});
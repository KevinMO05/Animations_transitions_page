// Selecciona el elemento
const aceituna = document.getElementById('aceituna');
const cebolla = document.getElementById('cebolla');
const albahaca = document.getElementById('albahaca');
const champinon = document.getElementById('champinon');

// Agrega un event listener para el clic
aceituna.addEventListener('click', function() {
    this.classList.toggle('clicked');
});

cebolla.addEventListener('click', function() {
    this.classList.toggle('clicked');
});

albahaca.addEventListener('click', function() {
    this.classList.toggle('clicked');
});

champinon.addEventListener('click', function() {
    this.classList.toggle('clicked');
});
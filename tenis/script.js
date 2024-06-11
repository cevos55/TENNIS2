$(document).ready(function() {
  $('.image-slider img').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});

function changeBackgroundImage() {
  var imageContainer = document.querySelector('.image-container');
  var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  var currentIndex = 0;

  setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    imageContainer.style.backgroundImage = 'url(' + images[currentIndex] + ')';
  }, 3000);
}

changeBackgroundImage();


// Sélectionner le conteneur des diapositives
const slides = document.querySelector('.slides');
// Largeur d'une diapositive
const slideWidth = document.querySelector('.slide').clientWidth;
// Index de la diapositive actuelle
let currentSlide = 0;

// Fonction pour changer la diapositive en cours
function changeSlide(n) {
    currentSlide += n;
    if (currentSlide < 0) {
        currentSlide = slides.childElementCount - 1;
    }
    if (currentSlide > slides.childElementCount - 1) {
        currentSlide = 0;
    }
    slides.style.transform = translateX(-${currentSlide * slideWidth}px);
}

// Fonctions pour naviguer entre les diapositives
function prevSlide() {
    changeSlide(-1);
}

function nextSlide() {
    changeSlide(1);
  }

  // Changer de diapositive automatiquement toutes les 5 secondes
  setInterval(() => {
      changeSlide(1);
  }, 8000);

  // Sélectionner les éléments des compteurs
const playersCount = document.getElementById('players-count');
const matchesCount = document.getElementById('matches-count');
const winsCount = document.getElementById('wins-count');

// Variables pour stocker les valeurs des compteurs
let players = 0;
let matches = 0;
let wins = 0;

// Fonction pour incrémenter les compteurs
function incrementCounters() {
  players++;
  matches++;
  wins++;

  playersCount.textContent = players;
  matchesCount.textContent = matches;
  winsCount.textContent = wins;
}

// Appeler la fonction toutes les 2 secondes
setInterval(incrementCounters, 2000);




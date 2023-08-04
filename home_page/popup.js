const rulesLink = document.getElementById('rulesLink');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

rulesLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  overlay.style.display = 'flex';
  console.log("script is working") 
});

closePopup.addEventListener('click', function() {
  overlay.style.display = 'none'; // Hide the overlay
});

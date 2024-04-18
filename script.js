const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const scrollCenterButton = document.getElementById('scrollCenter');

scrollCenterButton.addEventListener('click', function() {
  image1.style.transform = 'translateX(-100%)';
  image2.style.transform = 'translateX(100%)';
});

document.querySelector('.scroll-button').addEventListener('click', function() {
  this.classList.add('hidden');
});

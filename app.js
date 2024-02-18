// Плавный скролл
document.addEventListener("DOMContentLoaded", function() {
   // Обработчик события для плавного скроллинга при нажатии на ссылку
   document.querySelectorAll('.smooth-scroll').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();
 
       document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
       });
     });
   });
});


// Замена иконки
function updateButtonText() {
  let buttonTxt = document.getElementById('butotnSubscribe')
  if (window.innerWidth < 380) {
    buttonTxt.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
  </svg>`
  } else {
    buttonTxt.textContent = 'Subscribe'
  }
}

window.onload = updateButtonText;
window.onresize = updateButtonText;




// Меню бургер
const burgerMenu = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation');

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle('_active');
    navigation.classList.toggle('_active');
  })
}
const close = document.querySelector('.close');
if (close) {
  close.addEventListener("click", function (e) {
    burgerMenu.classList.remove('_active');
    navigation.classList.remove('_active');
  })
}


// Поворачивает крестик
document.addEventListener('DOMContentLoaded', function() {
  let openElements = document.querySelectorAll('.open');

  openElements.forEach(function(element) {
      element.addEventListener('click', function() {
          this.classList.toggle('rotate_cross');
      });
  });
});

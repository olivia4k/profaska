// Carousel

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

console.log(slides);

///arange the slide 

///slides.forEach((slide,index) => {
//  slide.style.left = slideSize * index + 'px';
//})
//console.log(slideWidth);

//slides[0].style.left = slideWidth + 'px';
//slides[1].style.left = slideWidth*2 + 'px';
//slides[0].style.left = 'px';

slides.forEach((slide,index) => {
  slide.style.left = slideWidth * index + 'px';
})

nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;

  track.style.transform = 'translateX(-' + amountToMove + ')';

})


//when I click left, move slides to the left

//when I click right..





//Hamburger
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);



//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
//navLogo.addEventListener('click', hideMobileMenu);

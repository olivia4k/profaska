


// Carousel

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

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

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide'); 
  //if (currentSlide===slides[slide.length-1]) {
  //  targetSlide=slides[0];
  //}
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}




prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);

})

nextButton.addEventListener('click', e => {

  const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  if (currentSlide!=slides[slides.length -1]) {
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  } else {
    moveToSlide(track, currentSlide, slides[0]);
    updateDots(currentDot, dots[0]);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
  }


  

})

//indicators

dotsNav.addEventListener('click', e => {
  //what indicator was clicked on?
  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot   = dotsNav.querySelector('.current-slide');
  const targetIndex  = dots.findIndex(dot => dot ===targetDot);
  const targetSlide  = slides[targetIndex];

  moveToSlide(track,currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  
})

//autoplay


setInterval(()=> {
  
  const currentSlide = track.querySelector('.current-slide');
  const currentDot   = dotsNav.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const nextDot = currentDot.nextElementSibling;

  if (currentSlide!=slides[slides.length -1]) {
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    
  } else {
    moveToSlide(track, currentSlide, slides[0]);
    updateDots(currentDot, dots[0]);

  }

},5000)

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
navLogo.addEventListener('click', hideMobileMenu);

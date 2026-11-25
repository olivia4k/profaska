// Carousel

// const track = document.querySelector('.carousel__track');
// const slides = Array.from(track.children);
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

// const slideSize = slides[0].getBoundingClientRect();
// const slideWidth = slideSize.width;

///arange the slide

///slides.forEach((slide,index) => {
//  slide.style.left = slideSize * index + 'px';
//})
//console.log(slideWidth);

//slides[0].style.left = slideWidth + 'px';
//slides[1].style.left = slideWidth*2 + 'px';
//slides[0].style.left = 'px';

// slides.forEach((slide,index) => {
//   slide.style.left = slideWidth * index + 'px';
// })

// const moveToSlide = (track, currentSlide, targetSlide) => {
//   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
//   track.style.transition=" all 2s"
//   currentSlide.classList.remove('current-slide');
//   targetSlide.classList.add('current-slide');
// }

// const updateDots = (currentDot, targetDot) => {
//   currentDot.classList.remove('current-slide');
//   targetDot.classList.add('current-slide');
// }

//autoplay

// const Autoplay = () => {

//   const currentSlide = track.querySelector('.current-slide');
//   const currentDot   = dotsNav.querySelector('.current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   const nextDot = currentDot.nextElementSibling;

//   if (currentSlide!=slides[slides.length -1]) {
//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);

//   } else {
//     moveToSlide(track, currentSlide, slides[0]);
//     updateDots(currentDot, dots[0]);

//   }
// }

// var autoplayIntervalId = setInterval(Autoplay, 5000);

// prevButton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
// 	const prevSlide = currentSlide.previousElementSibling;
//   const currentDot = dotsNav.querySelector('.current-slide');
//   const prevDot = currentDot.previousElementSibling;
//   const prevIndex = slides.findIndex(slide => slide === prevSlide);

//   clearInterval(autoplayIntervalId);
//   autoplayIntervalId = setInterval(Autoplay, 9000);

//   moveToSlide(track, currentSlide, prevSlide);
//   updateDots(currentDot, prevDot);

// })

// nextButton.addEventListener('click', e => {

//   const currentSlide = track.querySelector('.current-slide');
// 	const nextSlide = currentSlide.nextElementSibling;
//   const currentDot = dotsNav.querySelector('.current-slide');
//   const nextDot = currentDot.nextElementSibling;
//   const nextIndex = slides.findIndex(slide => slide === nextSlide);

//   clearInterval(autoplayIntervalId);
//   autoplayIntervalId = setInterval(Autoplay, 9000);

//   if (currentSlide!=slides[slides.length -1]) {
//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//   } else {
//     moveToSlide(track, currentSlide, slides[0]);
//     updateDots(currentDot, dots[0]);
//   }

// })

// //indicators

// dotsNav.addEventListener('click', e => {
//   //what indicator was clicked on?
//   const targetDot = e.target.closest('button');

//   if (!targetDot) return;

//   const currentSlide = track.querySelector('.current-slide');
//   const currentDot   = dotsNav.querySelector('.current-slide');
//   const targetIndex  = dots.findIndex(dot => dot ===targetDot);
//   const targetSlide  = slides[targetIndex];

//   moveToSlide(track,currentSlide, targetSlide);
//   updateDots(currentDot, targetDot);

// })

//Hamburger
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

if (menu && menuLinks) {
  menu.addEventListener('click', mobileMenu);
}

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (menu && menuLinks && window.innerWidth <= 960 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

if (menuLinks) {
  menuLinks.addEventListener('click', hideMobileMenu);
}

if (navLogo) {
  navLogo.addEventListener('click', hideMobileMenu);
}

// "Coming soon" - a cursor reveals the text from under a white cover
const workInProgress = document.querySelector('.work-in-progress');

if (workInProgress) {
  const text = workInProgress.textContent.trim();

  const reveal = document.createElement('span');
  reveal.className = 'work-in-progress__reveal';
  reveal.setAttribute('aria-hidden', 'true');

  const textElement = document.createElement('span');
  textElement.className = 'work-in-progress__text';

  const wordElements = text.split(/\s+/).map((word) => {
    const wordElement = document.createElement('span');
    wordElement.className = 'work-in-progress__word';
    wordElement.textContent = word;
    return wordElement;
  });

  wordElements.forEach((wordElement, index) => {
    if (index > 0) textElement.append(' ');
    textElement.append(wordElement);
  });

  const mask = document.createElement('span');
  mask.className = 'work-in-progress__mask';

  const cursor = document.createElement('span');
  cursor.className = 'work-in-progress__cursor';

  mask.appendChild(cursor);
  reveal.append(textElement, mask);

  const label = document.createElement('span');
  label.className = 'visually-hidden';
  label.textContent = text;

  workInProgress.textContent = '';
  workInProgress.append(label, reveal);

  const firstWord = wordElements[0];
  if (firstWord) {
    mask.style.setProperty(
      '--first-word-width',
      `${firstWord.getBoundingClientRect().width}px`
    );
  }
}

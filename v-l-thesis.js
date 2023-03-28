// Carousel


console.log('olivia');

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

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
  track.style.transition=" all 2s"
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide'); 
  //if (currentSlide===slides[slide.length-1]) {
  //  targetSlide=slides[0];
  //}
}

//autoplay
const Autoplay = () => {
  
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  if (currentSlide!=slides[slides.length -1]) {
    moveToSlide(track, currentSlide, nextSlide);
    
  } else {
    moveToSlide(track, currentSlide, slides[0]);

  }

}
var autoplayIntervalId = setInterval(Autoplay, 5000); 




prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);

  clearInterval(autoplayIntervalId);
  autoplayIntervalId = setInterval(Autoplay, 9000);

})


nextButton.addEventListener('click', e => {

  const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  if (currentSlide!=slides[slides.length -1]) {
    moveToSlide(track, currentSlide, nextSlide);
  } else {
    moveToSlide(track, currentSlide, slides[0]);
  }

  clearInterval(autoplayIntervalId);
  autoplayIntervalId = setInterval(Autoplay, 9000);
  

})





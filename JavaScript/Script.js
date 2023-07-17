
/*=========================================================================================*/
/*===================================== Rotating Logo =====================================*/
/*=========================================================================================*/

// Selecting elements from the DOM
const CircularLogoDiv = document.getElementById("rotatingLogo");


/*=========== Constant auto play rotation of Circular Logo ============ */

//Use an setInterval to fall a function over and over again
setInterval(constantRotationOfLogo, 10);
//Declare a variable that will decide the amount of degress the Logo should rotate 
var degrees = 0;
//Function that is called by the setInterval
function constantRotationOfLogo(){
  //Add -0.25 degrees to variable degree for every time this function is called 
  degrees -= 0.25;
  //Rotate the CurcularLogoDiv anti clockwise an additional -0.25 degres every time function is called
  CircularLogoDiv.style.rotate = degrees + "deg";
};


/*============ Additional rotation of Circular Logo when srcolling up or down ===========*/

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
var st = document.documentElement.scrollTop;
   
  if (st > lastScrollTop){
    //When Scrolling down: rotate logo anti-clockwise
    degrees -= 3;
    CircularLogoDiv.style.rotate = degrees + "deg";
  }
  else {
    //When scrolling up: Rotate logo clockwise
    degrees += 4;
    CircularLogoDiv.style.rotate = degrees + "deg";
  }
  
  //The below if-statement can be written in similar fashion: lastScrollTop = st <= 0 ? 0 : st; 
  //For Mobile or negative scrolling
  if (st <= 0) {
    lastScrollTop = 0;
  } else {
    lastScrollTop = st;
  }
  
}, false);



/*=========================================================================================*/
/*====================================== Sliding Div ======================================*/
/*=========================================================================================*/


// Selecting elements from the DOM
const slidingDiv = document.getElementById("slidingDiv");

/*=========== Turn of Sliding div after it has slided down ============*/

window.setTimeout(hideSlidingDiv, 1420);

function hideSlidingDiv(){

  slidingDiv.style.display = "none";
};


/*=========================================================================================*/
/*====================================== Title Cutter =====================================*/
/*=========================================================================================*/

// Selecting elements from the DOM
const smallContainerForTopTitleHome = document.getElementById("smallContainerForTopTitleHome");
const largeContainerForTopTitleHome = document.getElementById("largeContainerForTopTitleHome");
const mainContainerForTopTitleHome = document.getElementById("mainContainerForTopTitleHome");

window.onscroll = function() {
  var scrollLimit = 50;
  if (window.scrollY > scrollLimit) {    
    //Moving small container right
    smallContainerForTopTitleHome.classList.remove("smallContainerForTopTitleHome");
    smallContainerForTopTitleHome.classList.remove("moveSmallContainerForTopTitleHomeBackLeft");
    smallContainerForTopTitleHome.classList.add("moveSmallContainerForTopTitleHomeRight")

    //Moving large container Left
    largeContainerForTopTitleHome.classList.remove("largeContainerForTopTitleHome");
    largeContainerForTopTitleHome.classList.remove("moveLargeContainerForTopTitleHomeBackRight");
    largeContainerForTopTitleHome.classList.add("moveLargeContainerForTopTitleHomeLeft");
  }
  else if(window.scrollY < scrollLimit) {
    //Moving small container back left
    smallContainerForTopTitleHome.classList.remove("moveSmallContainerForTopTitleHomeRight");
    smallContainerForTopTitleHome.classList.add("moveSmallContainerForTopTitleHomeBackLeft");

    //Moving large container back right
    largeContainerForTopTitleHome.classList.remove("moveLargeContainerForTopTitleHomeLeft");
    largeContainerForTopTitleHome.classList.add("moveLargeContainerForTopTitleHomeBackRight"); 
  }
};


/*====================================================================================*/
/*================================= Automatic Slider  ================================*/
/*====================================================================================*/

// Selecting elements from the DOM
const slideContainer = document.querySelector('.sliderHome');
const slide = document.querySelector('.slidesInSliderHome');
const nextBtn = document.getElementById('btnNext');
const prevBtn = document.getElementById('btnPrev');
const btn01 = document.getElementById('btnSlider01');
const btn02 = document.getElementById('btnSlider02');
const btn03 = document.getElementById('btnSlider03');

// Retrieving all slide elements
let slides = document.querySelectorAll('.slide');

// Initializing index and slideId variables
let index = 1;
let slideId;

// Creating clones of the first and last slides
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Assigning IDs to the clones
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

// Appending clones to the slide container
slide.append(firstClone);
slide.prepend(lastClone);

// Calculating the height of the current slide
let slideHeight = slides[index].clientHeight;

// Applying initial transformation to position the slide
slide.style.transform = `translateY(${-slideHeight * index}px)`;

// Function to start the auto-play of slides
const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, 4000);
};

// Function to retrieve the updated slide elements
const getSlides = () => document.querySelectorAll('.slide');

// Event listener for the transitionend event
slide.addEventListener('transitionend', () => {
  slides = getSlides();
  
  // Handling transition when reaching the first clone
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateY(${-slideHeight * index}px)`;
  }

  // Handling transition when reaching the last clone
  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateY(${-slideHeight * index}px)`;
  }
});

// Function to move to the next slide
const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '1.0s ease-out';
  slide.style.transform = `translateY(${-slideHeight * index}px)`;
};

// Function to move to the previous slide
const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '1.0s ease-out';
  slide.style.transform = `translateY(${-slideHeight * index}px)`;
};

// Function to reset the auto-play
const resetAutoPlay = () => {
  clearInterval(slideId);
  startSlide();
};

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', () => {
  moveToNextSlide();
  resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
  moveToPreviousSlide();
  resetAutoPlay();
});

// Event listeners for button 01, 02, and 03
btn01.addEventListener('click', () => {
  index = 1;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateY(${-slideHeight * index}px)`;
  resetAutoPlay();
});

btn02.addEventListener('click', () => {
  index = 2;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateY(${-slideHeight * index}px)`;
  resetAutoPlay();
});

btn03.addEventListener('click', () => {
  index = 3;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateY(${-slideHeight * index}px)`;
  resetAutoPlay();
});

// Starting the auto-play on page load
startSlide();

// Handling the resize event to adjust the slide height
window.addEventListener('resize', () => {
  slideHeight = slides[index].clientHeight;
  slide.style.transform = `translateY(${-slideHeight * index}px)`;
});



/*====================================================================================*/
/*==================================== Highlights ====================================*/
/*====================================================================================*/





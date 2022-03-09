
$(function(){
  var navbar = $('.main-inner');
  $(window).scroll(function(){
    if($(window).scrollTop() <= 40 ){
      navbar.removeClass('navbar-scroll');
    }else{
      navbar.addClass('navbar-scroll');
    }
  });
});


window.addEventListener('scroll', reveal);
 function reveal(){
   var reveals = document.querySelectorAll('.reveal');
   for(var i = 0; i < reveals.length; i++){
     var windowheight = window.innerHeight;
     var revealtop = reveals[i].getBoundingClientRect().top;
     var revealpoint = 150;
     if(revealtop < windowheight - revealtop){
      reveals[i].classList.add('active'); 
     }
     else{
      reveals[i].classList.remove('active');

     }
   }
 }

 $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})

/*
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button =>{
button.addEventListener("click", () =>{
const offset = button.dataset.carouselButton === "next" ? 1 : -1
const slides = button.closest("[data-carousel]")
.querySelector("[data-slides]")

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset 
  if(newIndex < 0 ) newIndex = slides.children.length - 1
  if(newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
})*/
/*
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

var videoPlayer = document.getElementById("videoPlayer");
var myVdieo  = document.getElementById('myVdieo');

*/

document.querySelectorAll('a[href^="#"]').forEach(enchor =>{
  enchor.addEventListener('click', function (a)  {
    e.preventDfault();
    document.querySelector(this.getAttrlibute('href')).scrollIntoView({
behavior: 'smooth'
    });
  });
})

let span = document.querySelector(".up");

window.onscroll = function () {
 
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//audio
var mySong = document.getElementById('mySong');
var icon = document.getElementById('icon');
icon.onclick = function() {
 if (mySong.paused){
  mySong.play();
  icon.src = "i"
 }else{
  mySong.pause();
  icon.src = "i"
 }

}

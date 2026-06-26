/*==========================================
LOADER
==========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

/*==========================================
HERO SLIDER
==========================================*/

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

setInterval(nextSlide,5000);

/*==========================================
COUNTDOWN
==========================================*/

const eventDate = new Date("August 12, 2026 00:00:00").getTime();

const countdown = setInterval(function(){

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

if(distance<0){

clearInterval(countdown);

document.querySelector(".countdown-box").innerHTML="<h2>The Event Has Started!</h2>";

}

},1000);

/*==========================================
SCROLL TO TOP
==========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================
SCROLL ANIMATION
==========================================*/

const reveals = document.querySelectorAll(

".fade-up,.fade-left,.fade-right"

);

function reveal(){

const windowHeight = window.innerHeight;

reveals.forEach((item)=>{

const top = item.getBoundingClientRect().top;

if(top < windowHeight - 100){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==========================================
MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});

/*==========================================
CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

});

});

/*==========================================
STICKY HEADER SHADOW
==========================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>20){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";

}

});

/*==========================================
NEWSLETTER DEMO
==========================================*/

const newsletter=document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for subscribing to AFOCI!");

newsletter.reset();

});

}

/*==========================================
CONTACT FORM DEMO
==========================================*/

const contact=document.querySelector(".contact form");

if(contact){

contact.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you for contacting Apostles Fellowship Outreach Churches INC. We will get back to you soon.");

contact.reset();

});

}
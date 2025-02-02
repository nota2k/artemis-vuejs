console.log('🦑')

let hamburger = document.querySelector('.nav-mini');
let menuFull = document.querySelector('.menu-full');
let body = document.querySelector('body');
// let viewportHeight = window.innerHeight;
// let viewportWidth = window.innerWidth;

window.addEventListener("resize", (event) => {
	menuFull.height = window.innerHeight+'px';
	menuFull.width = window.innerWidth+'px';
});


hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle("is-active");
	menuFull.classList.toggle("is-open");
	body.classList.toggle("is-full-nav");
})
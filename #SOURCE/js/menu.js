const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click',()=>{
  burger.classList.toggle('_active');
  menu.classList.toggle('_active');
  document.body.classList.toggle('lock');
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
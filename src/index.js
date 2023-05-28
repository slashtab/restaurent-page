import home from './home';
import './style.css';

home();

const homeNav = document.querySelector('.home');
const menuNav = document.querySelector('.menu');
const contactNav = document.querySelector('.contact');

homeNav.addEventListener('click', ()=> {
    
    homeNav.classList.add(selected);
})
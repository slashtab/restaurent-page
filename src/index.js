import home from './home';
import header from './header';
import menu from './menu';
import cont from './contact';

import './style.css';
import './menuStyle.css';
import './contStyle.css';


const containerHeader = header();
const containerHome = home();
const containerMenu = menu();
const containerCont = cont();

const content = document.getElementById('content');
content.appendChild(containerHeader);
content.appendChild(containerHome);

const homeNav = document.querySelector('.home');
const menuNav = document.querySelector('.menu');
const contactNav = document.querySelector('.contact');



homeNav.addEventListener("click", function(){
    content.innerHTML = '';
    content.appendChild(containerHeader);
    content.appendChild(containerHome);
    //console.log("success");
    homeNav.classList.add('selected');
    menuNav.classList.remove('selected');
    contactNav.classList.remove('selected');
});

menuNav.addEventListener('click', ()=> {
    content.innerHTML = '';
    content.appendChild(containerHeader);
    content.appendChild(containerMenu);
    //console.log("msuccess");
    menuNav.classList.add('selected');
    homeNav.classList.remove('selected');
    contactNav.classList.remove('selected');
});

contactNav.addEventListener('click', ()=> {
    content.innerHTML = '';
    content.appendChild(containerHeader);
    content.appendChild(containerCont);
    //console.log("Csuccess");
    homeNav.classList.remove('selected');
    menuNav.classList.remove('selected');
    contactNav.classList.add('selected');
})



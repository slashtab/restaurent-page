import swgy from './swiggy.svg';
import zmt from './zomato.png';

export default function home(){
    const header = document.createElement('div');
    const menu = document.createElement('div');
    const home = document.createElement('div');
    const contact = document.createElement('div');
    const mainBody = document.createElement('div');
    const textMainBody = document.createElement('div');

    const orderNow = document.createElement('div');
    const textOrderNow = document.createElement('div');
    const orderFrom = document.createElement('div');
    const swiggy = document.createElement('div');
    const zoma = document.createElement('div');

    const footer = document.createElement('div');

    const content = document.getElementById('content');

    menu.innerHTML = '<h1>Menu</h1>';
    home.innerHTML = '<h1>Home</h1>';
    contact.innerHTML = '<h1>Contact</h1>';
    menu.classList.add('menu');
    home.classList.add('home');
    contact.classList.add('contact');
    header.classList.add('header');
    textMainBody.classList.add('textMainBody');

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    mainBody.classList.add('mainBody');

    //adding text in body
    textMainBody.innerHTML = '<h1 class = "name">Meiloorun Cafe</h1><h5 class = "subName">A Salad Cloud Kitchen</h5>';
    mainBody.appendChild(textMainBody);

    //order now section setup
    orderFrom.appendChild(swiggy);
    orderFrom.appendChild(zoma);
    orderNow.appendChild(textOrderNow);
    orderNow.appendChild(orderFrom);
    mainBody.appendChild(orderNow);

    orderFrom.classList.add('orderFrom');
    orderNow.classList.add('orderNow');
    swiggy.classList.add('swiggy');
    zoma.classList.add('zoma');

    textOrderNow.innerHTML = '<h2 class = "OrderNowText">Order Now On!</h2>';
    const swiggyImg = new Image();
    swiggyImg.src = swgy;
    swiggy.appendChild(swiggyImg);

    const zmtImg = new Image();
    zmtImg.src = zmt;
    zoma.appendChild(zmtImg);

    //footer
    footer.innerHTML = '<h6 class="footNote">©Meiloorun</h6>';
    footer.classList.add('footer');

    content.appendChild(header);
    content.appendChild(mainBody);
    content.appendChild(footer);

    return content;
}
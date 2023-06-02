import swgy from './swiggy.svg';
import zmt from './zomato.png';

export default function home(){
    // const header = document.createElement('div');
    // const menu = document.createElement('div');
    // const home = document.createElement('div');
    // const contact = document.createElement('div');
    const mainBody = document.createElement('div');
    const textMainBody = document.createElement('div');
    const containerHome = document.createElement('div');

    //const content = document.getElementById('content');

    // menu.innerHTML = '<h1>Menu</h1>';
    // home.innerHTML = '<h1>Home</h1>';
    // contact.innerHTML = '<h1>Contact</h1>';
    // menu.classList.add('menu');
    // home.classList.add('home');
    // contact.classList.add('contact');
    // header.classList.add('header');
    textMainBody.classList.add('textMainBody');
    containerHome.classList.add('containerHome');

    // header.appendChild(home);
    // header.appendChild(menu);
    // header.appendChild(contact);

    mainBody.classList.add('mainBody');

    //adding text in body
    textMainBody.innerHTML = '<h1 class = "name">Meiloorun Salads</h1><h5 class = "subName">A Salad Specialist</h5>';
    mainBody.appendChild(textMainBody);

    //welcome Note
    const welcome = document.createElement('div');
    welcome.classList.add('welcome');
    const welText = document.createElement('div');
    welText.classList.add('welText');
    welText.innerHTML = '<h2 class = "welTextH2">Welcome to Meilooruns</h2>';
    const welPara = document.createElement('div');
    welPara.classList.add('welPara');
    welPara.innerHTML = "<p class = 'paraText'>Located on Lothal's highest peak, Meiloorun provides best Salad, galaxy has to offer.<br> Free for bounty hunters!!</p>";
    welcome.appendChild(welText);
    welcome.appendChild(welPara);

    //order now section setup
    const orderNow = document.createElement('div');
    const textOrderNow = document.createElement('div');
    const orderFrom = document.createElement('div');
    const swiggy = document.createElement('div');
    const zoma = document.createElement('div');
    const bookTable = document.createElement('div');

    orderFrom.appendChild(swiggy);
    orderFrom.appendChild(zoma);
    orderNow.appendChild(bookTable);
    orderNow.appendChild(textOrderNow);
    orderNow.appendChild(orderFrom);

    orderFrom.classList.add('orderFrom');
    orderNow.classList.add('orderNow');
    swiggy.classList.add('swiggy');
    zoma.classList.add('zoma');
    bookTable.classList.add('bookTable');

    bookTable.innerHTML = '<button class = "bktblbtn">Book A Table!</button>';
    textOrderNow.innerHTML = '<h2 class = "orderNowText"> Or Order On!</h2>';
    const swiggyImg = new Image();
    swiggyImg.src = swgy;
    swiggy.appendChild(swiggyImg);

    const zmtImg = new Image();
    zmtImg.src = zmt;
    zoma.appendChild(zmtImg);

    //footer
    const footer = document.createElement('div');

    footer.innerHTML = '<h6 class="footNote">©Meiloorun 2023</h6>';
    footer.classList.add('footer');

    //containerHome.appendChild(header);
    containerHome.appendChild(mainBody);
    containerHome.appendChild(welcome);
    containerHome.appendChild(orderNow);
    containerHome.appendChild(footer);

    return containerHome;
}
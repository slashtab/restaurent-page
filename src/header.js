export default function header(){
    const containerHeader = document.createElement('div');
    //header
    const header = document.createElement('div');
    const menu = document.createElement('div');
    const home = document.createElement('div');
    const contact = document.createElement('div');

    menu.innerHTML = '<h1>Menu</h1>';
    home.innerHTML = '<h1>Home</h1>';
    contact.innerHTML = '<h1>Contact</h1>';

    menu.classList.add('menu');
    home.classList.add('home');
    contact.classList.add('contact');
    header.classList.add('header');

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);

    containerHeader.appendChild(header);

    return containerHeader;
}
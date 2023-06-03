export default function cont(){
    const containerCont = document.createElement('div');
    const contHeader = document.createElement('div');
    containerCont.classList.add('containerCont');

    //header
    contHeader.classList.add('contHeader');
    contHeader.innerHTML = '<h1>Contact</h1>';

    //Address
    const addCont = document.createElement('div');
    addCont.classList.add('addCont');
    addCont.innerHTML = '<h2>1340 Jedi Shrine</h2><h4>ISI I76RT, Lothal</h4><button class = "lctUs">Locate Us</button>';

    //phone email timing
    const contInfo = document.createElement('div');
    contInfo.classList.add('contInfo');
    const phEmail = document.createElement('div');
    phEmail.classList.add('phEmail');
    phEmail.innerHTML = '<h4><span class = "phone">Call Now</span> | <span class="email">Email</span></h4>';
    const timing = document.createElement('div');
    timing.classList.add('timing');
    timing.innerHTML = '<h4 class = "tHead">Hours Of Operation</h4><p class = "tPara">Opens each cycle <br> evening to morning</p>';
    contInfo.appendChild(phEmail);
    contInfo.appendChild(timing);

    //map
    const gMap = document.createElement('div');
    gMap.classList.add('gMap');
    gMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.573484549699!2d-81.58919402001163!3d28.377184457272293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7ee634caa5f7%3A0xa71e391fd01cf1a0!2sWalt%20Disney%20World%C2%AE%20Resort!5e0!3m2!1sen!2sin!4v1685694373002!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';


    containerCont.appendChild(contHeader);
    containerCont.appendChild(addCont);
    containerCont.appendChild(contInfo);
    containerCont.appendChild(gMap);
    return containerCont;
}
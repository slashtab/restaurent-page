import grnSld from './greenSalad.jpg';
import arglaSld from './arugulaSalad.jpg';
import kaleSld from './kaleSalad.jpg';
import tortSld from './tortelliniSalad.jpg';
import coleslawSld from './vinegarColeslaw.jpg';

export default function menu() {

    // const menuBody = document.querySelector('body');
    // menuBody.classList.add('menuBody');

    //initiating divs
    const containerMenu = document.createElement('div');
    const menuList = document.createElement('div');
    const menuHead = document.createElement('div');
    containerMenu.classList.add('containerMenu');
    menuList.classList.add('menuList');
    menuHead.classList.add('menuHead');

    menuHead.innerHTML = '<h1 class = "menuHeadText">Menu</h1>';

    //menu items

    //1st menu item
    const menuItem1 = document.createElement('div');
    const itemImage1 = document.createElement('div');
    const itemName1 = document.createElement('div');
    const itemDesc1 = document.createElement('div');
    const itemPrice1 = document.createElement('div');
    const descContainer1 = document.createElement('div');
    //adding class to 1st menu item
    menuItem1.classList.add('menuItem');
    itemImage1.classList.add('itemImage');
    itemName1.classList.add('itemName');
    itemDesc1.classList.add('itemDesc');
    itemPrice1.classList.add('itemPrice');
    descContainer1.classList.add('descContainer');
    //adding content to 1st menu item
    const item1Img = new Image();
    item1Img.src = grnSld;
    itemImage1.appendChild(item1Img);

    itemName1.innerHTML = '<h2 class = "sldName">Green Salad</h2>';
    itemPrice1.innerHTML = '<h4 class="cr">cr 4.80</h4>';
    itemDesc1.innerHTML = '<p class = "abtSld">Crunchy roasted almonds, creamy avocado and lemon vinaigrette. </p>';

    descContainer1.appendChild(itemName1);
    descContainer1.appendChild(itemPrice1);
    descContainer1.appendChild(itemDesc1);

    menuItem1.appendChild(itemImage1);
    menuItem1.appendChild(descContainer1);


    //item 2
    //2nd menu item
    const menuItem2 = document.createElement('div');
    const itemImage2 = document.createElement('div');
    const itemName2 = document.createElement('div');
    const itemDesc2 = document.createElement('div');
    const itemPrice2 = document.createElement('div');
    const descContainer2 = document.createElement('div');
    //adding class to 1st menu item
    menuItem2.classList.add('menuItem');
    itemImage2.classList.add('itemImage');
    itemName2.classList.add('itemName');
    itemDesc2.classList.add('itemDesc');
    itemPrice2.classList.add('itemPrice');
    descContainer2.classList.add('descContainer');
    //adding content to 2nd menu item
    const item2Img = new Image();
    item2Img.src = arglaSld;
    itemImage2.appendChild(item2Img);

    itemName2.innerHTML = '<h2 class = "sldName">Arugula Salad</h2>';
    itemPrice2.innerHTML = '<h4 class="cr">cr 3.70</h4>';
    itemDesc2.innerHTML = '<p class = "abtSld">Crunchy roasted almonds, creamy avocado and lemon vinaigrette. </p>';

    descContainer2.appendChild(itemName2);
    descContainer2.appendChild(itemPrice2);
    descContainer2.appendChild(itemDesc2);

    menuItem2.appendChild(itemImage2);
    menuItem2.appendChild(descContainer2);

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);

    containerMenu.appendChild(menuHead);
    containerMenu.appendChild(menuList);
    return containerMenu;
}
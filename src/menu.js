import './styles/menuStyle.css';
import header from './index';
import overlay from './overlay';
import footer from './footer';
import { over } from 'lodash';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu-container');

    /*Left menu*/
    const leftMenu = document.createElement('div');
    leftMenu.classList.add('left-menu', 'menu');
    menu.appendChild(leftMenu);

    leftMenu.appendChild(
        createMenuItem(
            "Something Tasty",
            "The best thing you've tasted in a while. 10/10 recommendation.",
            "$29"
        )
    );
    leftMenu.appendChild(
        createMenuItem(
            "Really Spicy Dish",
            "Are you up for the challenge? Bring on the heat.",
            "$24"
        )
    );
    leftMenu.appendChild(
        createMenuItem(
            "For The Adventurous",
            "This unique dish is sure to raise a few eyebrows.",
            "$32"
        )
    );
    leftMenu.appendChild(
        createMenuItem(
            "Not Too Extravagant",
            "Hearty and full of flavour. What more do you want?",
            "$27"
        )
    );
    /*Middle menu*/
    const middleMenu = document.createElement('div');
    middleMenu.classList.add('middle-menu', 'menu');
    menu.appendChild(middleMenu);

    middleMenu.appendChild(
        createMenuItem(
            "Very Vegan",
            "Supporting all walks of life, focusing on sustainability.",
            "$26"
        )
    );
    middleMenu.appendChild(
        createMenuItem(
            "Best Burger",
            "With all of the trimmings, you name it, it's on there.",
            "$28"
        )
    );
    middleMenu.appendChild(
        createMenuItem(
            "Super Steak",
            "Served with a side of fancy veggies and a bougie sauce.",
            "$35"
        )
    );
    middleMenu.appendChild(
        createMenuItem(
            "Filler Fish",
            "Honestly, I'm just making all of this up as I go.",
            "$24"
        )
    );
    /*Right menu*/
    const rightMenu = document.createElement('div');
    rightMenu.classList.add('right-menu', 'menu');
    menu.appendChild(rightMenu);

    rightMenu.appendChild(
        createMenuItem(
            "Crumbed Content",
            "This menu is a lot longer than I thought it would be.",
            "$18"
        )
    );
    rightMenu.appendChild(
        createMenuItem(
            "Procrastination Pizza",
            "What else can I write here that will look interesting?",
            "$24"
        )
    );
    rightMenu.appendChild(
        createMenuItem(
            "Imagination Inky Noodles",
            "At this point I'm just trying to fill the space with some text.",
            "$26"
        )
    );
    rightMenu.appendChild(
        createMenuItem(
            "Sarcastic Salmon",
            "Is it that obvious that I ran out of things to put here?",
            "$27"
        )
    );

    return menu;
}

function createMenuItem(name, description, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('food-item');

    const foodDetails = document.createElement('div');
    foodDetails.classList.add('food-details');
    menuItem.appendChild(foodDetails);

    const foodName = document.createElement('h3');
    foodName.textContent = name;
    foodDetails.appendChild(foodName);

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    foodDetails.appendChild(foodDescription);

    const foodPrice = document.createElement('p');
    foodPrice.classList.add('price');
    foodPrice.textContent = price;
    menuItem.appendChild(foodPrice);

    return menuItem;
}


function menuPageComponent() { 

    const main = document.querySelector(".mainContent");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default menuPageComponent;
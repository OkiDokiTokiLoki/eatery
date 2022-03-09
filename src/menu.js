import './menuStyle.css';

function menuHeaderComponent() {  

    const menuHeader = document.createElement('header');

    const logoLink = document.createElement('a');
    logoLink.classList.add('logo-link');
    logoLink.setAttribute('href', '../dist/');
    menuHeader.appendChild(logoLink);

    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.setAttribute('src', 'https://via.placeholder.com/300x80');
    logoLink.appendChild(logoImg);

    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');
    menuHeader.appendChild(navbar);

    const navItem1 = document.createElement('li');
    navItem1.classList.add('nav-item', 'active');
    navbar.appendChild(navItem1);

    const navLink1 = document.createElement('a');
    navLink1.classList.add('nav-link');
    navLink1.setAttribute('href', '#');
    navLink1.innerText = 'Menu';
    navItem1.appendChild(navLink1);

    const navItem2 = document.createElement('li');
    navItem2.classList.add('nav-item');
    navbar.appendChild(navItem2);

    const navLink2 = document.createElement('a');
    navLink2.classList.add('nav-link');
    navLink2.setAttribute('href', '#');
    navLink2.innerText = 'Contact';
    navItem2.appendChild(navLink2);
    
   return menuHeader;
}

function menuMenuComponent() {

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');


    const leftMenu = document.createElement('div');
    leftMenu.classList.add('left-menu', 'menu');
    menuDiv.appendChild(leftMenu);

    /*food-item L1*/
    const foodItemL1 = document.createElement('div');
    foodItemL1.classList.add('food-item');
    leftMenu.appendChild(foodItemL1);

    const foodDetailsL1 = document.createElement('div');
    foodDetailsL1.classList.add('food-details');
    foodItemL1.appendChild(foodDetailsL1);

    const foodTitleL1 = document.createElement('h3');
    foodTitleL1.innerText = 'Something Tasty';
    foodDetailsL1.appendChild(foodTitleL1);

    const foodDescriptionL1 = document.createElement('p');
    foodDescriptionL1.innerText = "The best thing you've tasted in a while. 10/10 recommendation.";
    foodDetailsL1.appendChild(foodDescriptionL1);

    const foodPriceL1 = document.createElement('p');
    foodPriceL1.classList.add('price');
    foodPriceL1.innerText = '$29';
    foodItemL1.appendChild(foodPriceL1);

    /*food-item L2*/
    const foodItemL2 = document.createElement('div');
    foodItemL2.classList.add('food-item');
    leftMenu.appendChild(foodItemL2);

    const foodDetailsL2 = document.createElement('div');
    foodDetailsL2.classList.add('food-details');
    foodItemL2.appendChild(foodDetailsL2);

    const foodTitleL2 = document.createElement('h3');
    foodTitleL2.innerText = 'Really Spicy Dish';
    foodDetailsL2.appendChild(foodTitleL2);

    const foodDescriptionL2 = document.createElement('p');
    foodDescriptionL2.innerText = "Are you up for the challenge? Bring on the heat.";
    foodDetailsL2.appendChild(foodDescriptionL2);

    const foodPriceL2 = document.createElement('p');
    foodPriceL2.classList.add('price');
    foodPriceL2.innerText = '$24';
    foodItemL2.appendChild(foodPriceL2);

    /*food-item L3*/
    const foodItemL3 = document.createElement('div');
    foodItemL3.classList.add('food-item');
    leftMenu.appendChild(foodItemL3);

    const foodDetailsL3 = document.createElement('div');
    foodDetailsL3.classList.add('food-details');
    foodItemL3.appendChild(foodDetailsL3);

    const foodTitleL3= document.createElement('h3');
    foodTitleL3.innerText = 'For The Adventurous';
    foodDetailsL3.appendChild(foodTitleL3);

    const foodDescriptionL3 = document.createElement('p');
    foodDescriptionL3.innerText = "This unique dish is sure to raise a few eyebrows.";
    foodDetailsL3.appendChild(foodDescriptionL3);

    const foodPriceL3 = document.createElement('p');
    foodPriceL3.classList.add('price');
    foodPriceL3.innerText = '$32';
    foodItemL3.appendChild(foodPriceL3);

    /*food-item L4*/
    const foodItemL4 = document.createElement('div');
    foodItemL4.classList.add('food-item');
    leftMenu.appendChild(foodItemL4);

    const foodDetailsL4 = document.createElement('div');
    foodDetailsL4.classList.add('food-details');
    foodItemL4.appendChild(foodDetailsL4);

    const foodTitleL4 = document.createElement('h3');
    foodTitleL4.innerText = 'Not Too Extravagant';
    foodDetailsL4.appendChild(foodTitleL4);

    const foodDescriptionL4 = document.createElement('p');
    foodDescriptionL4.innerText = "Hearty and full of flavour. What more do you want?";
    foodDetailsL4.appendChild(foodDescriptionL4);

    const foodPriceL4 = document.createElement('p');
    foodPriceL4.classList.add('price');
    foodPriceL4.innerText = '$27';
    foodItemL4.appendChild(foodPriceL4);


    const middleMenu = document.createElement('div');
    middleMenu.classList.add('middle-menu', 'menu');
    menuDiv.appendChild(middleMenu);

    /*food-item M1*/
    const foodItemM1 = document.createElement('div');
    foodItemM1.classList.add('food-item');
    middleMenu.appendChild(foodItemM1);

    const foodDetailsM1 = document.createElement('div');
    foodDetailsM1.classList.add('food-details');
    foodItemM1.appendChild(foodDetailsM1);

    const foodTitleM1 = document.createElement('h3');
    foodTitleM1.innerText = 'Very Vegan';
    foodDetailsM1.appendChild(foodTitleM1);

    const foodDescriptionM1 = document.createElement('p');
    foodDescriptionM1.innerText = "Supporting all walks of life, focusing on sustainability.";
    foodDetailsM1.appendChild(foodDescriptionM1);

    const foodPriceM1 = document.createElement('p');
    foodPriceM1.classList.add('price');
    foodPriceM1.innerText = '$26';
    foodItemM1.appendChild(foodPriceM1);

    /*food-item M2*/
    const foodItemM2 = document.createElement('div');
    foodItemM2.classList.add('food-item');
    middleMenu.appendChild(foodItemM2);

    const foodDetailsM2 = document.createElement('div');
    foodDetailsM2.classList.add('food-details');
    foodItemM2.appendChild(foodDetailsM2);

    const foodTitleM2 = document.createElement('h3');
    foodTitleM2.innerText = 'Best Burger'
    foodDetailsM2.appendChild(foodTitleM2);

    const foodDescriptionM2 = document.createElement('p');
    foodDescriptionM2.innerText = "With all of the trimmings, you name it, it's on there.";
    foodDetailsM2.appendChild(foodDescriptionM2);

    const foodPriceM2 = document.createElement('p');
    foodPriceM2.classList.add('price');
    foodPriceM2.innerText = '$28';
    foodItemM2.appendChild(foodPriceM2);

    /*food-item M3*/
    const foodItemM3 = document.createElement('div');
    foodItemM3.classList.add('food-item');
    middleMenu.appendChild(foodItemM3);

    const foodDetailsM3 = document.createElement('div');
    foodDetailsM3.classList.add('food-details');
    foodItemM3.appendChild(foodDetailsM3);

    const foodTitleM3 = document.createElement('h3');
    foodTitleM3.innerText = 'Super Steak';
    foodDetailsM3.appendChild(foodTitleM3);

    const foodDescriptionM3 = document.createElement('p');
    foodDescriptionM3.innerText = "Served with a side of fancy veggies and a bougie sauce.";
    foodDetailsM3.appendChild(foodDescriptionM3);

    const foodPriceM3 = document.createElement('p');
    foodPriceM3.classList.add('price');
    foodPriceM3.innerText = '$35';
    foodItemM3.appendChild(foodPriceM3);

    /*food-item M4*/
    const foodItemM4 = document.createElement('div');
    foodItemM4.classList.add('food-item');
    middleMenu.appendChild(foodItemM4);

    const foodDetailsM4 = document.createElement('div');
    foodDetailsM4.classList.add('food-details');
    foodItemM4.appendChild(foodDetailsM4);

    const foodTitleM4 = document.createElement('h3');
    foodTitleM4.innerText = 'Filler Fish';
    foodDetailsM4.appendChild(foodTitleM4);

    const foodDescriptionM4 = document.createElement('p');
    foodDescriptionM4.innerText = "Honestly, I'm just making all of this up as I go.";
    foodDetailsM4.appendChild(foodDescriptionM4);

    const foodPriceM4 = document.createElement('p');
    foodPriceM4.classList.add('price');
    foodPriceM4.innerText = '$24';
    foodItemM4.appendChild(foodPriceM4);


    const rightMenu = document.createElement('div');
    rightMenu.classList.add('right-menu', 'menu');
    menuDiv.appendChild(rightMenu);

    /*food-item R1*/
    const foodItemR1 = document.createElement('div');
    foodItemR1.classList.add('food-item');
    rightMenu.appendChild(foodItemR1);

    const foodDetailsR1 = document.createElement('div');
    foodDetailsR1.classList.add('food-details');
    foodItemR1.appendChild(foodDetailsR1);

    const foodTitleR1 = document.createElement('h3');
    foodTitleR1.innerText = 'Crumbed Content';
    foodDetailsR1.appendChild(foodTitleR1);

    const foodDescriptionR1 = document.createElement('p');
    foodDescriptionR1.innerText = "This menu is a lot longer than I thought it would be.";
    foodDetailsR1.appendChild(foodDescriptionR1);

    const foodPriceR1 = document.createElement('p');
    foodPriceR1.classList.add('price');
    foodPriceR1.innerText = '$18';
    foodItemR1.appendChild(foodPriceR1);

    /*food-item R2*/
    const foodItemR2 = document.createElement('div');
    foodItemR2.classList.add('food-item');
    rightMenu.appendChild(foodItemR2);

    const foodDetailsR2 = document.createElement('div');
    foodDetailsR2.classList.add('food-details');
    foodItemR2.appendChild(foodDetailsR2);

    const foodTitleR2 = document.createElement('h3');
    foodTitleR2.innerText = 'Procrastination Pizza';
    foodDetailsR2.appendChild(foodTitleR2);

    const foodDescriptionR2 = document.createElement('p');
    foodDescriptionR2.innerText = "What else can I write here that will look interesting?";
    foodDetailsR2.appendChild(foodDescriptionR2);

    const foodPriceR2 = document.createElement('p');
    foodPriceR2.classList.add('price');
    foodPriceR2.innerText = '$24';
    foodItemR2.appendChild(foodPriceR2);

    /*food-item R3*/
    const foodItemR3 = document.createElement('div');
    foodItemR3.classList.add('food-item');
    rightMenu.appendChild(foodItemR3);

    const foodDetailsR3 = document.createElement('div');
    foodDetailsR3.classList.add('food-details');
    foodItemR3.appendChild(foodDetailsR3);

    const foodTitleR3 = document.createElement('h3');
    foodTitleR3.innerText = 'Imagination Inky Noodles';
    foodDetailsR3.appendChild(foodTitleR3);

    const foodDescriptionR3 = document.createElement('p');
    foodDescriptionR3.innerText = "At this point I'm just trying to fill the space with some text.";
    foodDetailsR3.appendChild(foodDescriptionR3);

    const foodPriceR3 = document.createElement('p');
    foodPriceR3.classList.add('price');
    foodPriceR3.innerText = '$32';
    foodItemR3.appendChild(foodPriceR3);

    /*food-item R4*/
    const foodItemR4 = document.createElement('div');
    foodItemR4.classList.add('food-item');
    rightMenu.appendChild(foodItemR4);

    const foodDetailsR4 = document.createElement('div');
    foodDetailsR4.classList.add('food-details');
    foodItemR4.appendChild(foodDetailsR4);

    const foodTitleR4 = document.createElement('h3');
    foodTitleR4.innerText = 'Sarcastic Salmon';
    foodDetailsR4.appendChild(foodTitleR4);

    const foodDescriptionR4 = document.createElement('p');
    foodDescriptionR4.innerText = "Is it that obvious that I ran out of things to put here?";
    foodDetailsR4.appendChild(foodDescriptionR4);

    const foodPriceR4 = document.createElement('p');
    foodPriceR4.classList.add('price');
    foodPriceR4.innerText = '$27';
    foodItemR4.appendChild(foodPriceR4);  
    
   return menuDiv;
}

function menuFooterComponent() {

    const footerContent = document.createElement('footer');

    const gitP = document.createElement('p');
    gitP.innerText = '©';
    footerContent.appendChild(gitP);

    const dateScript = document.createElement('p');
    dateScript.classList.add('year');
    dateScript.innerHTML = new Date().getFullYear();
    gitP.appendChild(dateScript);

    const gitLink = document.createElement('a');
    gitLink.classList.add('personal');
    gitLink.innerText = 'OkiDokiTokiLoki';
    gitLink.setAttribute('href', 'https://github.com/OkiDokiTokiLoki/eatery');
    gitP.appendChild(gitLink);

    const creditLink = document.createElement('a');
    creditLink.classList.add('credit');
    creditLink.innerText = 'image credit: Alex Rainer [unsplash]';
    creditLink.setAttribute('href', 'https://unsplash.com/photos/gN49R_5vhT8');
    footerContent.appendChild(creditLink);
    
   return footerContent;
}

function menuOverlayComponent(){
    const bgOverlay = document.createElement('div');
    bgOverlay.classList.add('overlay');
    
    return bgOverlay;
}

function menuPageComponent() {

    const menuPage =   document.getElementById('content');

    const menHeader = menuHeaderComponent();
    const menMenu = menuMenuComponent();
    const menFooter = menuFooterComponent();
    const menOverlay = menuOverlayComponent();

    menuPage.appendChild(menHeader);
    menuPage.appendChild(menMenu);
    menuPage.appendChild(menFooter);
    menuPage.appendChild(menOverlay);
}

export default menuPageComponent;
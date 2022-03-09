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
    navItem1.classList.add('nav-item');
    navbar.appendChild(navItem1);

    const navLink1 = document.createElement('a');
    navLink1.classList.add('nav-link');
    navLink1.setAttribute('href', '#');
    navLink1.innerText = 'Menu';
    navItem1.appendChild(navLink1);

    const navItem2 = document.createElement('li');
    navItem2.classList.add('nav-item', 'active');
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



    const foodItemL1 = document.createElement('div');
    foodItemL1.classList.add('food-item');
    leftMenu.appendChild(foodItemL1);

    const foodDetailsL1 = document.createElement('div');
    foodDetailsL1.classList.add('food-details');
    foodItemL1.appendChild(foodDetailsL1);

    const foodTitle1 = document.createElement('h3');
    foodTitle1.innerText = 'Something Tasty'
    foodDetailsL1.appendChild(foodTitle1);

    const foodDescription1 = document.createElement('p');
    foodDescription1.innerText = "The best thing you've tasted in a while. 10/10 recommendation.";
    foodDetailsL1.appendChild(foodDescription1);

    const foodItemL2 = document.createElement('div');
    foodItemL2.classList.add('food-item');
    leftMenu.appendChild(foodItemL2);

    const foodDetailsL2 = document.createElement('div');
    foodDetailsL2.classList.add('food-details');
    foodItemL2.appendChild(foodDetailsL2);

    

    const foodItemL3 = document.createElement('div');
    foodItemL3.classList.add('food-item');
    leftMenu.appendChild(foodItemL3);

    const foodDetailsL3 = document.createElement('div');
    foodDetailsL3.classList.add('food-details');
    foodItemL3.appendChild(foodDetailsL3);



    const foodItemL4 = document.createElement('div');
    foodItemL4.classList.add('food-item');
    leftMenu.appendChild(foodItemL4);

    const foodDetailsL4 = document.createElement('div');
    foodDetailsL4.classList.add('food-details');
    foodItemL4.appendChild(foodDetailsL4);




    const middleMenu = document.createElement('div');
    middleMenu.classList.add('middle-menu', 'menu');
    menuDiv.appendChild(middleMenu);



    const foodItemM1 = document.createElement('div');
    foodItemM1.classList.add('food-item');
    middleMenu.appendChild(foodItemM1);

    const foodDetailsM1 = document.createElement('div');
    foodDetailsM1.classList.add('food-details');
    foodItemM1.appendChild(foodDetailsM1);



    const foodItemM2 = document.createElement('div');
    foodItemM2.classList.add('food-item');
    middleMenu.appendChild(foodItemM2);

    const foodDetailsM2 = document.createElement('div');
    foodDetailsM2.classList.add('food-details');
    foodItemM2.appendChild(foodDetailsM2);



    const foodItemM3 = document.createElement('div');
    foodItemM3.classList.add('food-item');
    middleMenu.appendChild(foodItemM3);

    const foodDetailsM3 = document.createElement('div');
    foodDetailsM3.classList.add('food-details');
    foodItemM3.appendChild(foodDetailsM3);



    const foodItemM4 = document.createElement('div');
    foodItemM4.classList.add('food-item');
    middleMenu.appendChild(foodItemM4);

    const foodDetailsM4 = document.createElement('div');
    foodDetailsM4.classList.add('food-details');
    foodItemM4.appendChild(foodDetailsM4);



    const rightMenu = document.createElement('div');
    rightMenu.classList.add('right-menu', 'menu');
    menuDiv.appendChild(rightMenu);



    const foodItemR1 = document.createElement('div');
    foodItemR1.classList.add('food-item');
    rightMenu.appendChild(foodItemR1);

    const foodDetailsR1 = document.createElement('div');
    foodDetailsR1.classList.add('food-details');
    foodItemR1.appendChild(foodDetailsR1);



    const foodItemR2 = document.createElement('div');
    foodItemR2.classList.add('food-item');
    rightMenu.appendChild(foodItemR2);

    const foodDetailsR2 = document.createElement('div');
    foodDetailsR2.classList.add('food-details');
    foodItemR2.appendChild(foodDetailsR2);



    const foodItemR3 = document.createElement('div');
    foodItemR3.classList.add('food-item');
    rightMenu.appendChild(foodItemR3);

    const foodDetailsR3 = document.createElement('div');
    foodDetailsR3.classList.add('food-details');
    foodItemR3.appendChild(foodDetailsR3);



    const foodItemR4 = document.createElement('div');
    foodItemR4.classList.add('food-item');
    rightMenu.appendChild(foodItemR4);

    const foodDetailsR4 = document.createElement('div');
    foodDetailsR4.classList.add('food-details');
    foodItemR4.appendChild(foodDetailsR4);





    
    
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

function menuPageComponent() {

    const menuPage =   document.getElementById('content');

    const menHeader = menuHeaderComponent();
    const menMenu = menuMenuComponent();
    const menFooter = menuFooterComponent();


    menuPage.appendChild(menHeader);
    menuPage.appendChild(menMenu);
    menuPage.appendChild(menFooter);
}

export default menuPageComponent;
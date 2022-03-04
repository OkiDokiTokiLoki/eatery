export default function landingComponent() {

    const fullPage = document.createElement('div');
    fullPage.classList.add('content');

    const homeHeader = document.createElement('div');
    homeHeader.classList.add('header');
    fullPage.appendChild(homeHeader);

    const logoLink = document.createElement('a');
    logoLink.classList.add('logo-link');
    logoLink.setAttribute('href', '#');
    homeHeader.appendChild(logoLink);

    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.setAttribute('src', 'https://via.placeholder.com/300x80');
    logoLink.appendChild(logoImg);

    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');
    homeHeader.appendChild(navbar);

    const navItem1 = document.createElement('li');
    navItem1.classList.add('nav-item');
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
    
   return fullPage;
}
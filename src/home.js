// headerComponent
export function headerComponent() {  

    const headerContent = document.createElement('header');

    const logoLink = document.createElement('a');
    logoLink.classList.add('logo-link');
    logoLink.setAttribute('href', '#');
    headerContent.appendChild(logoLink);

    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.setAttribute('src', 'https://via.placeholder.com/300x80');
    logoLink.appendChild(logoImg);

    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');
    headerContent.appendChild(navbar);

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
    
   return headerContent;
}

// mainComponent
// export function mainComponent() {

//     const mainContent = document.createElement('div');
//     mainContent.classList.add('main');

//     const heading1 = document.createElement('h1');
//     heading1.innerText = 'Welcome to ';
//     mainContent.appendChild(heading1);

//     const headingSpan = document.createElement('span');
//     headingSpan.innerText = 'The Eatery';
//     heading1.appendChild(headingSpan);

//     const headingSlogan = document.createElement('h3');
//     headingSlogan.innerText = 'Feast your eyes on some catchy slogan here';
//     mainContent.appendChild(headingSlogan);

//     const details = document.createElement('div');
//     details.classList.add('details');
//     mainContent.appendChild(details);

//     const detailsP1 = document.createElement('p');
//     detailsP1.innerText = '123 Real Address, Fictional Town';
//     details.appendChild(detailsP1);

//     const detailsP2 = document.createElement('p');
//     detailsP2.innerText = 'Delivery: 123 123 1234';
//     details.appendChild(detailsP2);
    
//    return mainContent;
// }

// footerComponent
// export function footerComponent() {

//     const footerContent = document.createElement('footer');

//     const gitP = document.createElement('p');
//     gitP.innerText = '©';
//     footerContent.appendChild(gitP);

//     const dateScript = document.createElement('p');
//     dateScript.innerHTML = new Date().getFullYear();
//     gitP.appendChild(dateScript);

//     const gitLink = document.createElement('a');
//     gitLink.classList.add('personal');
//     gitLink.innerText = 'OkiDokiTokiLoki';
//     gitLink.setAttribute('href', 'https://github.com/OkiDokiTokiLoki/eatery');
//     gitP.appendChild(gitLink);

//     const creditLink = document.createElement('a');
//     creditLink.classList.add('credit');
//     creditLink.innerText = 'image credit: Ferks Guare [unsplash]';
//     creditLink.setAttribute('href', 'https://unsplash.com/photos/KEZdWfYD-ow');
//     footerContent.appendChild(creditLink);
    
//    return footerContent;
// }


export default function landingComponent() {
    headerComponent();
    // mainComponent;
    // footerComponent();
}
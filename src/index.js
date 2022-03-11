import _, { over } from 'lodash';
import './style.css';
import landingComponent from './components/home';
import menuPageComponent from './components/menu';
import contactComponent from './components/contact';
// import header from './components/header';
import footer from './components/footer';
import overlay from './components/overlay';

// const homeBtn = document.querySelector('.logo-link');
// const menuBtn = document.querySelector('.menuBtn');
// const contactBtn = document.querySelector('.contactBtn');

// homeBtn.addEventListener('click', () => {
//    render();
//    landingComponent();
// });

// menuBtn.addEventListener('click', () => {
//    render();
//    menuPageComponent();
// });

// contactBtn.addEventListener('click', () => {
//    render();
//    contactComponent();
// });

// (function firstLoad(){
//    const content = document.querySelector("#content");
   
//    content.appendChild(header());
//    content.appendChild(landingComponent());
//    content.appendChild(footer());
//    content.appendChild(overlay());
// })();



// import contactComponent from './components/contact';
// import landingComponent from './components/home';
// import menuPageComponent from './components/menu';


function headerComponent() {  

   const header = document.createElement('header');

   const homeButton = document.createElement("button");
   homeButton.classList.add("logo-link", "nav-link");
   homeButton.textContent = "Home";
   header.appendChild(homeButton);
   homeButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      render();
      setActiveButton(homeButton);
      landingComponent();
   });

   // const logoLink = document.createElement('a');
   // logoLink.classList.add('logo-link');
   // logoLink.setAttribute('href', '../dist/');
   // header.appendChild(logoLink);

   // const logoImg = document.createElement('img');
   // logoImg.classList.add('logo');
   // logoImg.setAttribute('src', 'https://via.placeholder.com/300x80');
   // logoLink.appendChild(logoImg);

   const navbar = document.createElement('ul');
   navbar.classList.add('navbar');
   header.appendChild(navbar);

   const navItem1 = document.createElement('li');
   navItem1.classList.add('nav-item', 'menuBtn');
   navbar.appendChild(navItem1);

   const menuButton = document.createElement("button");
   menuButton.classList.add("nav-link");
   menuButton.textContent = "Menu";
   navItem1.appendChild(menuButton);
   menuButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(menuButton);
      render();
      menuPageComponent();
   });

   const navItem2 = document.createElement('li');
   navItem2.classList.add('nav-item', 'contactBtn');
   navbar.appendChild(navItem2);

   const contactButton = document.createElement("button");
   contactButton.classList.add("nav-link");
   contactButton.textContent = "Contact";
   navItem2.appendChild(contactButton);
   contactButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(contactButton);
      render();
      contactComponent();
   });
   
   return header;
}

function render(){
   const content = document.querySelector('#content');
   content.style = "";
   while(content.children.length > 1){
      content.children.remove();
   }
}

function setActiveButton(button) {
   const navButtons = document.querySelectorAll(".nav-link");

   navButtons.forEach((button) => {
   if (button !== this) {
      button.classList.remove("active");
   }
   });

   button.classList.add("active");
}

function header(){
   const content = document.getElementById('content');
   content.appendChild(headerComponent());
}






function component() {

   const pHeader = header();
   const pOverlay = overlay();
   const landingPage = landingComponent();
   // const menuPage = menuPageComponent();
   // const contactPage = contactComponent();
   const pFooter = footer(); 

   return pHeader && pOverlay && landingPage && pFooter;
}

document.body.appendChild(component());
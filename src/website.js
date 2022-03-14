import landingComponent from "./home";
import menuPageComponent from "./menu";
import contactComponent from "./contact";
import './style.css';

function headerComponent() {  

    const header = document.createElement('header');

    const homeButton = document.createElement("button");
    homeButton.classList.add("logo-link", "nav-link");
    homeButton.textContent = "Home";
    header.appendChild(homeButton);
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        render();
        landingComponent();
    });

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

function injectContent() {
    const main = document.createElement("main");
    main.classList.add("content");
    return main;
}

function footerComponent() {

    const footer = document.createElement('footer');

    const gitP = document.createElement('p');
    gitP.textContent = '©';
    footer.appendChild(gitP);

    const dateScript = document.createElement('p');
    dateScript.classList.add('year');
    dateScript.textContent = `${new Date().getFullYear()}`;
    gitP.appendChild(dateScript);

    const gitLink = document.createElement('a');
    gitLink.classList.add('personal');
    gitLink.textContent = 'OkiDokiTokiLoki';
    gitLink.setAttribute('href', 'https://github.com/OkiDokiTokiLoki/eatery');
    gitP.appendChild(gitLink);

    const creditLink = document.createElement('a');
    creditLink.classList.add('credit');
    creditLink.textContent = 'image credit: Alex Rainer [unsplash]';
    creditLink.setAttribute('href', 'https://unsplash.com/photos/gN49R_5vhT8');
    footer.appendChild(creditLink);
    
   return footer;
}

function initial() {
    const content = document.getElementById("content");

    content.appendChild(headerComponent());
    content.appendChild(injectContent());
    content.appendChild(footerComponent());

    setActiveButton(document.querySelector(".nav-link"));
    landingComponent();
}

export default initial;
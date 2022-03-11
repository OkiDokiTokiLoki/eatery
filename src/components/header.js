import landingComponent from '../components/home';
import menuPageComponent from '../components/menu';
import contactComponent from '../components/contact';

function headerComponent() {  

    const header = document.createElement('header');

    const homeButton = document.createElement("button");
    homeButton.classList.add("logo-link", "nav-link");
    homeButton.textContent = "Home";
    header.appendChild(homeButton);
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
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
        contactComponent();
    });
    
   return header;
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

    // setActiveButton(document.querySelector(".nav-link"));
    // landingComponent();

    const content = document.getElementById('content');
    content.appendChild(headerComponent());
}

export default header;
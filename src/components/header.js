import landingComponent from '../components/home';
import menuPageComponent from '../components/menu';
import contactComponent from '../components/contact';

function headerComponent() {  

    const content = document.querySelector('#content');

    const header = document.createElement('header');

    const homeButton = document.createElement("button");
    homeButton.classList.add("logo-link", "nav-link");
    homeButton.textContent = "Home";
    header.appendChild(homeButton);
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        content.style = "";
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
        content.style = "";
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
        content.style = "";
        contactComponent();
    });
    
   return header;
}

function render(){
   const content = document.querySelector('#content');
   content.style = "";
//    while(content.children.length > 1){
//       content.children.remove();
//    }
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
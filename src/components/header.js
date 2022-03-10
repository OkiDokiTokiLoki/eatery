function headerComponent() {  

    const headerContent = document.createElement('header');

    const logoLink = document.createElement('a');
    logoLink.classList.add('logo-link');
    logoLink.setAttribute('href', '../dist/');
    headerContent.appendChild(logoLink);

    const logoImg = document.createElement('img');
    logoImg.classList.add('logo');
    logoImg.setAttribute('src', 'https://via.placeholder.com/300x80');
    logoLink.appendChild(logoImg);

    const navbar = document.createElement('ul');
    navbar.classList.add('navbar');
    headerContent.appendChild(navbar);

    const navItem1 = document.createElement('li');
    navItem1.classList.add('nav-item', 'menuBtn');
    navbar.appendChild(navItem1);

    const navLink1 = document.createElement('a');
    navLink1.classList.add('nav-link');
    navLink1.href = '#';
    navLink1.innerText = 'Menu';
    navItem1.appendChild(navLink1);

    const navItem2 = document.createElement('li');
    navItem2.classList.add('nav-item', 'contactBtn');
    navbar.appendChild(navItem2);

    const navLink2 = document.createElement('a');
    navLink2.classList.add('nav-link');
    navLink2.href = '#';
    navLink2.innerText = 'Contact';
    navItem2.appendChild(navLink2);
    
   return headerContent;
}

function header(){

    const content = document.getElementById('content');
    const pageHeader = headerComponent();
    content.appendChild(pageHeader);
}

export default header;
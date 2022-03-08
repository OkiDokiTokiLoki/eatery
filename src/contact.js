import './homeStyle.css';

// headerComponent
function contactHeader() {  

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

// h1
function pageHead(){
    const pageHeading = document.createElement('h1');
    pageHeading.innerText = 'Get in touch';

    return pageHeading;
}

// mainComponent
function contactBig() {

    const bigSection = document.createElement('section');

    const formDiv = document.createElement('div');
    formDiv.classList.add('details');
    bigSection.appendChild(formDiv);

    const heading2 = document.createElement('h2');
    heading2.innerText = "We'd love to hear from you";
    formDiv.appendChild(heading2);

    const form = document.createElement('form');
    formDiv.appendChild(form);

    const formList = document.createElement('ul');
    formList.classList.add('contact-form');
    form.appendChild(formList);

    const listItem1 = document.createElement('li');
    formList.appendChild(listItem1);

    const listLabelName = document.createElement('label');
    listLabelName.setAttribute('for', 'contactName');
    listLabelName.innerText = 'Name*';
    listItem1.appendChild(listLabelName);

    const listInputName = document.createElement('input');
    listInputName.id = 'contactName';
    // listInputName.setAttribute('placeholder', 'Gordon Ramsay');
    listItem1.appendChild(listInputName);
    // set required attribute



    const listItem2 = document.createElement('li');
    formList.appendChild(listItem2);

    const listLabelNumber = document.createElement('label');
    listLabelNumber.setAttribute('for', 'contactNumber');
    listLabelNumber.innerText = 'Number*';
    listItem2.appendChild(listLabelNumber);

    const listInputNumber = document.createElement('input');
    listInputNumber.id = 'contactNumber';
    listInputNumber.setAttribute('type', 'number');
    listItem2.appendChild(listInputNumber);
    // set required attribute



    const listItem3 = document.createElement('li');
    formList.appendChild(listItem3);

    const listLabelMessage = document.createElement('label');
    listLabelMessage.setAttribute('for', 'contactMessage');
    listLabelMessage.innerText = 'Message';
    listItem3.appendChild(listLabelMessage);

    const listInputMessage = document.createElement('textarea');
    listInputMessage.id = 'contactMessage';
    
    function setAttributes(el, attrs) {
        for(let key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
    }
      
    setAttributes(listInputMessage, {"name": "message", "cols": "52", "rows": "8", "placeholder": "Any questions or suggestions?"});
    listItem3.appendChild(listInputMessage);

   return bigSection;
}

function contactSmall() {

    const smallSection = document.createElement('section');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    smallSection.appendChild(contactDiv);

    const contactAddress = document.createElement('p');
    contactAddress.innerText = '123 Real Address, Fictional Town';
    contactDiv.appendChild(contactAddress);

    const contactDelivery = document.createElement('p');
    contactDelivery.innerText = 'Delivery: 123 123 1234';
    contactDiv.appendChild(contactDelivery);

    const socialsDiv = document.createElement('div');
    socialsDiv.classList.add('socials');
    smallSection.appendChild(socialsDiv);

    const fbBtn = document.createElement('button');
    socialsDiv.appendChild(fbBtn);

    const fbImg = document.createElement('img');

    function setAttributes(el, attrs) {
        for(let key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
    }
      
    setAttributes(fbImg, {"src": "#", "alt": "facebook"});
    fbBtn.appendChild(fbImg);

    const igBtn = document.createElement('button');
    socialsDiv.appendChild(igBtn);

    const igImg = document.createElement('img');
    setAttributes(igImg, {"src": "#", "alt": "instagram"});
    igBtn.appendChild(igImg);

    const twBtn = document.createElement('button');
    socialsDiv.appendChild(twBtn);

    const twImg = document.createElement('img');
    setAttributes(twImg, {"src": "#", "alt": "twitter"});
    twBtn.appendChild(twImg);
    
   return smallSection;
}

// footerComponent
// function conFooter() {

//     const footerContent = document.createElement('footer');

//     const gitP = document.createElement('p');
//     gitP.innerText = '©';
//     footerContent.appendChild(gitP);

//     const dateScript = document.createElement('p');
//     dateScript.classList.add('year');
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

function overlay(){
    const bgOverlay = document.createElement('div');
    bgOverlay.classList.add('overlay');
    
    return bgOverlay;
}

function contactComponent() {

    const contactPage =   document.getElementById('content');

    const conHeader = contactHeader();
    const pageHeader = pageHead();
    const conBig = contactBig();
    const conSmall = contactSmall();
    const conOverlay = overlay();

    contactPage.appendChild(conHeader);
    contactPage.appendChild(pageHeader);
    contactPage.appendChild(conBig);
    contactPage.appendChild(conSmall);
}

export default contactComponent;
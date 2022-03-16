import './styles/homeStyle.css';

function homeComponent() {

    const main = document.createElement('div');
    main.classList.add('homeContent');

    const heading1 = document.createElement('h1');
    heading1.textContent = 'Welcome to ';
    heading1.classList.add('heading-span');
    main.appendChild(heading1);

    const hBreak = document.createElement('br');
    heading1.appendChild(hBreak);

    const headingSpan = document.createElement('span');
    headingSpan.textContent = 'The Eatery';
    heading1.appendChild(headingSpan);

    const headingSlogan = document.createElement('h3');
    headingSlogan.textContent = 'Feast your eyes on some catchy slogan here';
    main.appendChild(headingSlogan);

    const details = document.createElement('div');
    details.classList.add('details');
    main.appendChild(details);

    const detailsP1 = document.createElement('p');
    detailsP1.textContent = '123 Real Address, Fictional Town';
    details.appendChild(detailsP1);

    const detailsP2 = document.createElement('p');
    detailsP2.textContent = 'Delivery: 123 123 1234';
    details.appendChild(detailsP2);
    
   return main;
}

function landingComponent() {
    const main = document.querySelector(".mainContent");
    main.textContent = "";
    main.appendChild(homeComponent());
}

export default landingComponent;
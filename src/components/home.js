import '../styles/homeStyle.css';

function LandingMainContentComponent() {

    const mainContent = document.createElement('div');
    mainContent.classList.add('main');

    const heading1 = document.createElement('h1');
    heading1.textContent = 'Welcome to ';
    mainContent.appendChild(heading1);

    const hBreak = document.createElement('br');
    heading1.appendChild(hBreak);

    const headingSpan = document.createElement('span');
    headingSpan.textContent = 'The Eatery';
    heading1.appendChild(headingSpan);

    const headingSlogan = document.createElement('h3');
    headingSlogan.textContent = 'Feast your eyes on some catchy slogan here';
    mainContent.appendChild(headingSlogan);

    const details = document.createElement('div');
    details.classList.add('details');
    mainContent.appendChild(details);

    const detailsP1 = document.createElement('p');
    detailsP1.textContent = '123 Real Address, Fictional Town';
    details.appendChild(detailsP1);

    const detailsP2 = document.createElement('p');
    detailsP2.textContent = 'Delivery: 123 123 1234';
    details.appendChild(detailsP2);
    
   return mainContent;
}

function landingComponent() {

    const content = document.getElementById('content');
    content.appendChild(LandingMainContentComponent());
}

export default landingComponent;
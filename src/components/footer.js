function footerComponent() {

    const footerContent = document.createElement('footer');

    const gitP = document.createElement('p');
    gitP.textContent = '©';
    footerContent.appendChild(gitP);

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
    footerContent.appendChild(creditLink);
    
   return footerContent;
}

function footer(){

    const content = document.getElementById('content');
    content.appendChild(footerComponent());
}

export default footer;
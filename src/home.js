export default function landingComponent() {
    const fullPage = document.createElement('div');
    fullPage.classList.add('content');
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Welcome to the Eatery';

    const btn = document.createElement('button');
    btn.innerHTML = 'Enter';







    fullPage.appendChild(h1);
    fullPage.appendChild(btn);

   return fullPage;
}

//document.body.appendChild(landingComponent());
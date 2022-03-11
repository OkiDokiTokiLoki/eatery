import header from '../components/header';
import landingComponent from '../components/home';
import footer from '../components/footer';
import overlay from '../components/overlay';

function firstLoad(){
    const content = document.querySelector("#content");
    
    content.appendChild(header());
    content.appendChild(landingComponent());
    content.appendChild(footer());
    content.appendChild(overlay());
}

export default firstLoad;
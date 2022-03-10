import header from '../components/header';
import landingComponent from '../components/home';
import footer from '../components/footer';
import overlay from '../components/overlay';

function firstLoad(){
    const content = document.querySelector("#content");
    
    const pageHeader = header();
    const landing = landingComponent();
    const pageFooter = footer();
    const pageOverlay = overlay();
    
    content.appendChild(pageHeader);
    content.appendChild(landing);
    content.appendChild(pageFooter);
    content.appendChild(pageOverlay);
}

export default firstLoad;
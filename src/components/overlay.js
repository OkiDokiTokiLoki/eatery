function overlayComponent(){
    const bgOverlay = document.createElement('div');
    bgOverlay.classList.add('overlay');
    
    return bgOverlay;
}

function overlay(){

    const content = document.getElementById('content');
    const pageOverlay = overlayComponent();
    content.appendChild(pageOverlay);
}

export default overlay;
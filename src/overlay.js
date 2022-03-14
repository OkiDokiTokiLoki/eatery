function overlayComponent(){
    const bgOverlay = document.createElement('div');
    bgOverlay.classList.add('overlay');
    
    return bgOverlay;
}

function overlay(){

    const content = document.getElementById('content');
    content.appendChild(overlayComponent());
}

export default overlay;
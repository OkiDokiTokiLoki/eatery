function render(){
    const content = document.querySelector('#content');
    content.style = "";
    while(content.children.length > 1){
        content.children.remove();
    }
}

export default render;
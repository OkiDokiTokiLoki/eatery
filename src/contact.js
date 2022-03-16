import './styles/contactStyle.css';

// function contactH1Component(){
//     const pageHeading = document.createElement('h1');
//     pageHeading.innerText = 'Get in touch';

//     return pageHeading;
// }

function bigSectionComponent() {

    const bigSection = document.createElement('section');
    bigSection.classList.add('top-contact-section');

    const mapImg = document.createElement('img');
    mapImg.setAttribute('src', 'https://via.placeholder.com/400');
    bigSection.appendChild(mapImg);

    const formDiv = document.createElement('div');
    formDiv.classList.add('form');
    bigSection.appendChild(formDiv);

    const heading2 = document.createElement('h2');
    heading2.textContent = "We'd love to hear from you";
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
    listLabelName.textContent = 'Name';
    listItem1.appendChild(listLabelName);

    const listInputName = document.createElement('input');
    listInputName.name = 'name';
    listInputName.id = 'contactName';
    listInputName.placeholder = 'Gordon Ramsay';
    listInputName.required = true;
    listItem1.appendChild(listInputName);

    const listItem2 = document.createElement('li');
    formList.appendChild(listItem2);

    const listLabelNumber = document.createElement('label');
    listLabelNumber.setAttribute('for', 'contactNumber');
    listLabelNumber.textContent = 'Number';
    listItem2.appendChild(listLabelNumber);

    const listInputNumber = document.createElement('input');
    listInputNumber.type = 'number';
    listInputName.name = 'number';
    listInputNumber.id = 'contactNumber';
    listInputNumber.placeholder = '123 456 789';
    listInputNumber.required = true;
    listItem2.appendChild(listInputNumber);

    const listItem3 = document.createElement('li');
    formList.appendChild(listItem3);

    const listLabelMessage = document.createElement('label');
    listLabelMessage.setAttribute('for', 'contactMessage');
    listLabelMessage.textContent = 'Message';
    listItem3.appendChild(listLabelMessage);

    const listInputMessage = document.createElement('textarea');  
    listInputMessage.name = 'message';
    listInputMessage.id = 'contactMessage';
    listInputMessage.cols = '35';
    listInputMessage.rows = '5';   
    listInputMessage.placeholder = 'Any questions or suggestions?';
    listInputMessage.required = true;
    listItem3.appendChild(listInputMessage);

    /* Small bottom section */
    /*
    const smallSection = document.createElement('section');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    smallSection.appendChild(contactDiv);

    const contactAddress = document.createElement('p');
    contactAddress.textContent = '123 Real Address, Fictional Town';
    contactDiv.appendChild(contactAddress);

    const contactDelivery = document.createElement('p');
    contactDelivery.textContent = 'Delivery: 123 123 1234';
    contactDiv.appendChild(contactDelivery);

    const socialsDiv = document.createElement('div');
    socialsDiv.classList.add('socials');
    smallSection.appendChild(socialsDiv);

    const fbBtn = document.createElement('button');
    socialsDiv.appendChild(fbBtn);

    const fbImg = document.createElement('img');      
    fbImg.src = '#';
    fbImg.alt = 'facebook';
    fbBtn.appendChild(fbImg);

    const igBtn = document.createElement('button');
    socialsDiv.appendChild(igBtn);

    const igImg = document.createElement('img');
    igImg.src = '#';
    igImg.alt = 'instagram';
    igBtn.appendChild(igImg);

    const twBtn = document.createElement('button');
    socialsDiv.appendChild(twBtn);

    const twImg = document.createElement('img');
    twImg.src = '#';
    twImg.alt = 'twitter';
    twBtn.appendChild(twImg);*/

   return bigSection /*&& smallSection*/;
}

function smallSectionComponent() {

    const smallSection = document.createElement('section');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    smallSection.appendChild(contactDiv);

    const contactAddress = document.createElement('p');
    contactAddress.textContent = '123 Real Address, Fictional Town';
    contactDiv.appendChild(contactAddress);

    const contactDelivery = document.createElement('p');
    contactDelivery.textContent = 'Delivery: 123 123 1234';
    contactDiv.appendChild(contactDelivery);

    const socialsDiv = document.createElement('div');
    socialsDiv.classList.add('socials');
    smallSection.appendChild(socialsDiv);

    const fbBtn = document.createElement('button');
    socialsDiv.appendChild(fbBtn);

    const fbImg = document.createElement('img');      
    fbImg.src = '#';
    fbImg.alt = 'facebook';
    fbBtn.appendChild(fbImg);

    const igBtn = document.createElement('button');
    socialsDiv.appendChild(igBtn);

    const igImg = document.createElement('img');
    igImg.src = '#';
    igImg.alt = 'instagram';
    igBtn.appendChild(igImg);

    const twBtn = document.createElement('button');
    socialsDiv.appendChild(twBtn);

    const twImg = document.createElement('img');
    twImg.src = '#';
    twImg.alt = 'twitter';
    twBtn.appendChild(twImg);

   return smallSection;
}



function contactComponent() {

    const main = document.querySelector(".mainContent");
    main.textContent = "";
    main.appendChild(bigSectionComponent());
    main.appendChild(smallSectionComponent());
}

export default contactComponent;
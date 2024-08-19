function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const back=document.querySelector('.m-back');
    const firstbox=document.querySelector('.m-first-box');
    const matn=document.querySelector('.m-idiom');
    const secondbox=document.querySelector('.m-second-box');
    const thirdbox=document.querySelector('.m-third-box');



    if (element.classList.contains('open')) {
        menu.style.display = 'block';
        back.style.marginTop='200px';
        firstbox.style.top='400px';
        matn.style.display='none';
        secondbox.style.top='850px';
        thirdbox.style.top='1300px';

    } else {
        menu.style.display = 'none';
        back.style.marginTop='0px';
        firstbox.style.top='250px';
        matn.style.display='block';
        secondbox.style.top='700px';
        thirdbox.style.top='1150px';

    
    }










}
function sendMessage(buttonId) {
    const phoneNumber = "00905526026689"; // Replace with the recipient's phone number
    let message = "";

    if (buttonId === 'm-first-button') {
        message = "I'm interested in the Small Group Classes.";
    } else if (buttonId === 'm-first-button-2') {
        message = "I'm interested in the Private Classes.";
    } else if (buttonId === 'm-first-button-3') {
        message = "I'm interested in the Kids Classes.";
    }

    console.log("Button clicked:", buttonId);
    console.log("Message:", message);

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    console.log("URL:", url);
    window.open(url, '_blank');
}

// Attach the function to each button
document.querySelector('.m-first-button').onclick = function() {
    sendMessage('m-first-button');
};

document.querySelector('.m-first-button-2').onclick = function() {
    sendMessage('m-first-button-2');
};

document.querySelector('.m-first-button-3').onclick = function() {
    sendMessage('m-first-button-3');
};


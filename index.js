function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const main = document.querySelector('.m-four-sign');
    const bg = document.querySelector('.m-text-parts');
    const signDiv = document.querySelector('.m-vocab-div-for-img');
    const avali=document.querySelector('.m-vocab-pp');
    const textPartsDiv = document.querySelector('.m-vocab-box');
    const boxes=document.querySelector('.m-vocab-box');

   

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (main) main.style.top = '150px';
        if (bg) bg.style.marginTop = '170px';
        

        if (avali) avali.style.opacity='0';

        if (signDiv) {
            signDiv.style.top = '350px'; 
        }
        if (textPartsDiv) textPartsDiv.style.marginTop = '230px';

        if(boxes)boxes.style.marginTop='200px';

    
    } else {
        menu.style.display = 'none';

        if (main) main.style.top = '20px';
        if(avali)avali.style.opacity='1';
        if (bg) bg.style.marginTop = '30px';
        if (signDiv) signDiv.style.top = '350px';
        if (textPartsDiv) textPartsDiv.style.marginTop = '0px';
        if(boxes)boxes.style.marginTop='200px';

    }
}


// script.js

let hasScrolledDown = false;  // Flag to track if the changes for scrolling down have been applied

window.addEventListener('scroll', () => {
    if (hasScrolledDown) return;  // Exit if changes have already been applied

    const avalin=document.querySelector('.m-vocab-pp');
    const bg = document.querySelector('.m-vocab-div-for-img');
    const back = document.querySelector('.m-vocab-box');
    const firstbox = document.querySelector('.m-vocab-first-box');
    const secondbox = document.querySelector('.m-vocab-second-box');
    const thirdbox = document.querySelector('.m-vocab-third-box');
    const fourthbox = document.querySelector('.m-vocab-second-part');
    const imgOne = document.querySelector('.m-vocab-img5');
    const topic = document.querySelector('.m-vocab-topic-div');
    const khodeTopic=document.querySelector('.m-vocab-topic');
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        // Apply the changes when scrolling down for the first time

        avalin.style.opacity='1';



        bg.style.height = '250px';
        bg.style.top = '350px';

        khodeTopic.style.fontSize='36px';
        
        topic.style.top = '190px';
        topic.style.width='80%';
        topic.style.marginLeft='10%';
        topic.style.height='60px';


        back.style.marginTop = '200px';

        firstbox.style.opacity = '1';
        firstbox.style.visibility = 'visible';
        firstbox.style.marginTop = '320px';

        secondbox.style.opacity = '1';
        secondbox.style.marginTop = '20px';
        secondbox.style.visibility = 'visible';

        thirdbox.style.marginTop = '20px';
        thirdbox.style.opacity = '1';
        thirdbox.style.visibility = 'visible';

        fourthbox.style.marginTop = '0px';
        fourthbox.style.opacity = '1';
        fourthbox.style.visibility = 'visible';

        imgOne.style.height = '300px';

        hasScrolledDown = true;  // Set the flag to true to prevent further changes
    }
});

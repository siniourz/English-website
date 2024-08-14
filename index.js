function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const main = document.querySelector('.m-four-sign');
    const bg = document.querySelector('.m-text-parts');
    const signDiv = document.querySelector('.m-vocab-div-for-img');
    const textPartsDiv = document.querySelector('.m-vocab-box');
    const boxes=document.querySelector('.m-vocab-box');

   

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (main) main.style.top = '150px';
        if (bg) bg.style.marginTop = '170px';
        


        if (signDiv) {
            signDiv.style.top = '350px'; 
        }
        if (textPartsDiv) textPartsDiv.style.marginTop = '230px';

        if(boxes)boxes.style.marginTop='290px';

    
    } else {
        menu.style.display = 'none';

        if (main) main.style.top = '20px';
        if (bg) bg.style.marginTop = '30px';
        if (signDiv) signDiv.style.top = '100px';
        if (textPartsDiv) textPartsDiv.style.marginTop = '0px';
        if(boxes)boxes.style.marginTop='0px';

    }
}


// script.js

window.addEventListener('scroll', () => {
    const bg=document.querySelector('.m-vocab-div-for-img');
    const firstbox=document.querySelector('.m-vocab-first-box');
    const secondbox=document.querySelector('.m-vocab-second-box');
    const thirdbox=document.querySelector('.m-vocab-third-box');
    const fourthbox=document.querySelector('.m-vocab-second-part');
    const imgOne=document.querySelector('.m-vocab-img5');
    const topic=document.querySelector('.m-vocab-topic-div');
    const scrollTop = window.scrollY;


    if (scrollTop > 0) {
     
        bg.style.height='250px';
 
        topic.style.top='150px';


        firstbox.style.opacity='1';
        firstbox.style.visibility='visible';
        firstbox.style.marginTop='290px';

        secondbox.style.opacity='1';
        secondbox.style.marginTop='20px';
        secondbox.style.visibility='visible';

        thirdbox.style.marginTop='20px';
        thirdbox.style.opacity='1';
        thirdbox.style.visibility='visible';

        fourthbox.style.marginTop='30px';
        fourthbox.style.opacity='1';
        fourthbox.style.visibility='visible';


        imgOne.style.height='300px';

    } else {

        firstbox.style.opacity='1';
        

    }
});

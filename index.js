function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const main = document.querySelector('.m-four-sign');
    const bg = document.querySelector('.m-text-parts');
    const signDiv = document.querySelector('.m-vocab-div-for-img');
    const textPartsDiv = document.querySelector('.m-vocab-box');
   

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (main) main.style.top = '150px';
        if (bg) bg.style.marginTop = '170px';


        if (signDiv) {
            signDiv.style.top = '350px'; 
        }
        if (textPartsDiv) textPartsDiv.style.marginTop = '250px';


    
    } else {
        menu.style.display = 'none';

        if (main) main.style.top = '20px';
        if (bg) bg.style.marginTop = '30px';
        if (signDiv) signDiv.style.top = '100px';
        if (textPartsDiv) textPartsDiv.style.marginTop = '0px';
    }
}


// script.js

window.addEventListener('scroll', () => {
    const firstbox=document.querySelector('.m-vocab-first-box');
    const secondbox=document.querySelector('.m-vocab-second-box');
    const header1=document.querySelector('.m-vocab-t3');
    const scrollTop = window.scrollY;


    if (scrollTop > 0) {
     
        firstbox.style.opacity='1';
        firstbox.style.visibility='visible';
        firstbox.style.marginTop='290px';

        secondbox.style.opacity='1';
        secondbox.style.marginTop='20px';
        secondbox.style.visibility='visible';

        header1.style.paddingTop='20px';
        header1.style.visibility='visible';

    } else {

        firstbox.style.opacity='1';
        

    }
});

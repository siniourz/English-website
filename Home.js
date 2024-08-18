function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const main = document.querySelector('.m-four-sign');
    const bg = document.querySelector('.m-text-parts');

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (main) main.style.top = '150px';
        if (bg) bg.style.marginTop = '170px';
        

      
    
    } else {
        menu.style.display = 'none';

        if (main) main.style.top = '20px';
        if (bg) bg.style.marginTop = '30px';
     
    }
}




let hasScrolledDown = false;  

window.addEventListener('scroll', () => {
    if (hasScrolledDown) return;  

    const sign1=document.querySelector('.sign1');
    const sign2=document.querySelector('.sign2');
    const sign3=document.querySelector('.sign3');
    const sign4=document.querySelector('.sign4');
    const firstbox=document.querySelector('.m-first-box');
    const arrow=document.querySelector('.m-arrow');
    const scroll=document.querySelector('.m-scroll');





    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      


        sign1.style.marginLeft='0px';
        sign1.style.opacity='1';

        sign2.style.marginLeft='0px';
        sign2.style.opacity='1';

        sign3.style.marginLeft='0px';
        sign3.style.opacity='1';

        sign4.style.marginLeft='0px';
        sign4.style.opacity='1';

        firstbox.style.opacity='1';
        firstbox.style.marginTop='0px';

        arrow.style.opacity='0';


        scroll.style.opacity='0';


    


    }
    

});



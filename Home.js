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

    const logo=document.querySelector('.main-div');
    const text=document.querySelector('.main-image');
    const khodetext=document.querySelector('.main-h1');
    const sign=document.querySelector('.m-four-sign');


    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      

        logo.style.top='0px';
        logo.style.left='0px';
        logo.style.width='100px';
        logo.style.height='100px';

        text.style.visibility='hidden';
        text.style.width='0px';
        text.style.height='0px';
        text.style.top='550px';
        text.style.right='0px';
        khodetext.style.fontSize='0px';

        sign.style.visibility='visible';
        sign.style.opacity='1';

    }
    

});

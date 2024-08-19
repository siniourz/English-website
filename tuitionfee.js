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

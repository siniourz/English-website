function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const matn=document.querySelector('.m-grammer-div');
    const aks=document.querySelector('.m-grammer-first-image');
    const header1=document.querySelector('.m-grammer-h1');
    const secondpart=document.querySelector('.m-grammer-second-part');
    

   

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (matn) matn.style.display='none';
        if(aks) aks.style.top='420px';
        if(header1) header1.style.top='590px';
        if (secondpart)secondpart.style.marginTop='550px';


    
    } else {
        menu.style.display = 'none';

        if (matn)matn.style.display='block';
        if(aks) aks.style.top='390px';

        if(header1) header1.style.top='560px';

        if (secondpart)secondpart.style.marginTop='270px';



    }
}




let hasScrolledDown = false; 

window.addEventListener('scroll', () => {
    if (hasScrolledDown) return;  

    const aks1=document.querySelector('.m-grammer-first-image');
    const topic1=document.querySelector('.m-grammer-h1');
    const menu=document.querySelector('.hamburger-icon');
    const firstbox=document.querySelector('.m-grammer-firstbox');
    const firstheader1=document.querySelector('.m-grammer-h1-1');
    const secondbox=document.querySelector('.m-grammer-secondbox');
    const secondheader1=document.querySelector('.m-grammer-h1-2');
    const thirdbox=document.querySelector('.m-grammer-thirdbox');
    const thirdheader1=document.querySelector('.m-grammer-h1-3');




    const scrollTop = window.scrollY;

    if (scrollTop > 0) {

        menu.style.opacity='1';

       aks1.style.height='250px';
       aks1.style.top='390px';

       topic1.style.width='100%';
       topic1.style.marginLeft='0px';
       topic1.style.borderRadius='0px';
       topic1.style.fontSize='30px';
       topic1.style.paddingTop='10px';
       topic1.style.height='50px';
       topic1.style.top='565px';

       firstbox.style.width='94%';
       firstbox.style.marginLeft='3%';

       firstheader1.style.fontSize='30px';
       firstheader1.style.top='-105px';


       secondbox.style.width='94%';
       secondbox.style.marginLeft='3%';

       secondheader1.style.fontSize='30px';
       secondheader1.style.top='-105px';

       thirdbox.style.width='94%';
       thirdbox.style.marginLeft='3%';

       thirdheader1.style.fontSize='30px';
       thirdheader1.style.top='-105px';





        hasScrolledDown = true;  
    }
    

});

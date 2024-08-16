function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const matn=document.querySelector('.m-skills-div');
    const aks=document.querySelector('.m-skills-img1');
    const header1=document.querySelector('.m-skills-h12');


   

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';

        if (matn) matn.style.display='none';
        if(aks) aks.style.top='400px';

        if(header1)header1.style.top='590px';
 


    
    } else {
        menu.style.display = 'none';

        if (matn)matn.style.display='block';
        if(header1)header1.style.top='600px';

        if(aks) aks.style.top='370px';

       

  



    }
}




let hasScrolledDown = false; 

window.addEventListener('scroll', () => {
    if (hasScrolledDown) return;  
    
    const menu=document.querySelector('.hamburger-icon');
    const aks=document.querySelector('.m-skills-img1');
    const header1=document.querySelector('.m-skills-h12');
    const firstbox=document.querySelector('.m-skills-firstbox');
    const secondbox=document.querySelector('.m-skills-secondbox');
    const thirdbox=document.querySelector('.m-skills-thirdbox');

    const header13=document.querySelector('.m-skills-h13');
    const header14=document.querySelector('.m-skills-h14');
    const header15=document.querySelector('.m-skills-h15');










    const scrollTop = window.scrollY;

    if (scrollTop > 0) {

        menu.style.opacity='1';

        aks.style.height='250px';
        aks.style.top='370px';

        header1.style.width='100%';
        header1.style.marginLeft='0px';
        header1.style.borderRadius='0px';
        header1.style.fontSize='30px';
        header1.style.paddingTop='10px';
        header1.style.height='50px';
        header1.style.top='565px';

        firstbox.style.width='94%';
        firstbox.style.marginLeft='3%';
        secondbox.style.width='94%';
        secondbox.style.marginLeft='3%';
        thirdbox.style.width='94%';
        thirdbox.style.marginLeft='3%';

        header13.style.fontSize='50px';
        header13.style.top='-130px';
        
        header14.style.fontSize='50px';
        header14.style.top='-130px';

        header15.style.fontSize='40px';
        header15.style.top='-140px';




        hasScrolledDown = true;  
    }
    

});

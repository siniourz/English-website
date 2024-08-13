function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const signDiv = document.querySelector('.m-four-sign');
    const textPartsDiv = document.querySelector('.m-text-parts');

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';
        signDiv.style.top = '150px'; // Adjust this value as needed to move the .m-four-sign div further down
        textPartsDiv.style.marginTop = '150px'; // Adjust this value to move the .m-text-parts div further down
    } else {
        menu.style.display = 'none';
        signDiv.style.top = '20px'; // Reset to the original position
        textPartsDiv.style.marginTop = '40px'; // Reset to the original position
    }
}
// script.js

window.addEventListener('scroll', () => {
    const container = document.querySelector('.m-test');
    const header1 =document.querySelector('.m-vocab-1');
    const header3 = document.querySelector('.m-vocab-2');
    const image=document.querySelector('.m-vocab-3')
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        container.style.backgroundColor = '#5d7762';
        container.style.height = '100vh';
        container.style.marginTop='0px';

        header1.style.backgroundColor = '#384859';
        header1.style.height='100px';
        header1.style.top='0px';
        header1.style.paddingTop='20px';
        header1.style.color='aliceblue';

        header3.style.top='323px';
        header3.style.backgroundColor='aliceblue';
        header3.style.paddingTop='20px';




        image.style.top='-40px';




    } else {
        container.style.backgroundColor = 'aliceblue';
        container.style.height = '500px'; // Revert to original height or whatever height you prefer
        container.style.marginTop='0px';

        header1.style.backgroundColor='aliceblue';
        header1.style.color='#384859';
        header1.style.height='100px';
        header1.style.top='0';


        header3.style.top='110px';
        header3.style.backgroundColor='aliceblue';
        header3.style.color='#384859';
        header3.style.paddingBottom='40px';



        image.style.top='50px';
 
    }
    

})



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
    const container = document.querySelector('.m-test');
    const header1 = document.querySelector('.m-vocab-1');
    const header3 = document.querySelector('.m-vocab-2');
    const image = document.querySelector('.m-vocab-3');
    const inside = document.querySelector('.vocab-first-box');
    const small = document.querySelector('.m-vocab-topic');
    const scrollTop = window.scrollY;

    // Adjust properties based on scroll amount
    if (scrollTop > 0) {
        container.style.backgroundColor = '#5d7762';
        container.style.height = `${100 + scrollTop / 10}px`; // Dynamic height based on scroll amount
        container.style.marginTop = '0px';

        header1.style.backgroundColor = '#384859';
        header1.style.height = `${100 + scrollTop / 10}px`; // Increase header height with scroll
        header1.style.top = `${scrollTop / 10}px`; // Adjust top position with scroll
        header1.style.paddingTop = '20px';
        header1.style.color = 'aliceblue';

        header3.style.top = `${323 + scrollTop / 10}px`; // Adjust top position based on scroll
        header3.style.backgroundColor = 'aliceblue';
        header3.style.paddingTop = '40px';
        header3.style.height = '90px';

        image.style.top = `${-30 + scrollTop / 10}px`; // Adjust image top position based on scroll

        small.style.opacity = '1'; // Fade in
        small.style.visibility = 'visible'; // Make visible
        inside.style.opacity = '1'; // Fade in
        inside.style.visibility = 'visible'; // Make visible

    } else {
        container.style.backgroundColor = 'aliceblue';
        container.style.height = '500px'; // Revert to original height or whatever height you prefer
        container.style.marginTop = '0px';

        header1.style.backgroundColor = 'aliceblue';
        header1.style.color = '#384859';
        header1.style.fontSize = '60px'
        header1.style.height = '100px'; // Reset height
        header1.style.top = '0'; // Reset top position

        header3.style.top = '100px'; // Reset top position
        header3.style.backgroundColor = 'aliceblue';
        header3.style.color = '#384859';
        header3.style.paddingBottom = '40px';

        image.style.top = '50px'; // Reset image top position

        small.style.opacity = '0'; // Fade out
        small.style.visibility = 'hidden'; // Hide from view
        inside.style.opacity = '0'; // Fade out
        inside.style.visibility = 'hidden'; // Hide from view
    }
});

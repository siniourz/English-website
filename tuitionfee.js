function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');

    if (element.classList.contains('open')) {
        menu.style.display = 'block';

    } else {
        menu.style.display = 'none';
    
    }










}

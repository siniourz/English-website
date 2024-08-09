function toggleMobileMenu(element) {
    element.classList.toggle("open");
    const menu = document.querySelector('.mobile-menu');
    const signDiv = document.querySelector('.m-four-sign');

    if (element.classList.contains('open')) {
        menu.style.display = 'flex';
        signDiv.style.top = '150px'; // Adjust this value as needed to move the div further down
    } else {
        menu.style.display = 'none';
        signDiv.style.top = '20px'; // Reset to the original position
    }
}

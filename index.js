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

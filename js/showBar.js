

document.querySelector(".menuMobile").addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
})

document.querySelector(".closeMenu").addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
})
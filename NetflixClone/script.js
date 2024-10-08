const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const moviesContainer = document.querySelector('.movies');

leftBtn.addEventListener('click', () => {
    moviesContainer.scrollBy({ left: -200, behavior: 'smooth' }); // Adjust the scroll amount as needed
});

rightBtn.addEventListener('click', () => {
    moviesContainer.scrollBy({ left: 200, behavior: 'smooth' }); // Adjust the scroll amount as needed
});

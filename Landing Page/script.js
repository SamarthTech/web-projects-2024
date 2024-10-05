document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Test drive request submitted. We will contact you soon.');
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});


setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000);




    document.addEventListener("DOMContentLoaded", function() {
        const hoverMessage = document.querySelector('.hover-message');

    
        setTimeout(() => {
            hoverMessage.style.opacity = 0;
            
            
            setTimeout(() => {
                hoverMessage.style.display = 'none';
            }, 300); 
        }, 3000);
    });


window.onload = function() {
    const hoverMessage = document.querySelector('.hover-message');
    hoverMessage.style.opacity = '1';
    setTimeout(() => {
        hoverMessage.style.opacity = '0';
    }, 3000);
};


function changeSlide(n) {
    showSlide(slideIndex += n);
}

showSlide(slideIndex);

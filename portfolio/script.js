
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dark mode toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.toggle('dark', savedTheme === 'dark');
    themeIcon.textContent = savedTheme === 'dark' ? '🌞' : '🌚';
}

// Update local storage on theme toggle
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeIcon.textContent = isDark ? '🌞' : '🌚';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Scroll-triggered animations with IntersectionObserver
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after visibility
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

hiddenElements.forEach(el => observer.observe(el));

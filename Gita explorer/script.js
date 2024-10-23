document.addEventListener('DOMContentLoaded', (event) => {
    // Animate hero section
    gsap.from("#hero h1", {duration: 1, opacity: 0, y: -50, ease: "power3.out"});
    gsap.from("#hero p", {duration: 1, opacity: 0, y: 50, ease: "power3.out", delay: 0.5});

    // Animate introduction section
    gsap.from("#introduction", {duration: 1, opacity: 0, y: 100, ease: "power3.out", scrollTrigger: {
        trigger: "#introduction",
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
    }});

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {duration: 0.3, color: "#e8491d", ease: "power1.out"});
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {duration: 0.3, color: "#fff", ease: "power1.out"});
        });
    });
});
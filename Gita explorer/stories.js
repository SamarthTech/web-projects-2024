document.addEventListener('DOMContentLoaded', (event) => {
    // Animate story cards
    gsap.from(".story-card", {
        duration: 0.8, 
        opacity: 0, 
        y: 50, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#story-list",
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        }
    });

    // Add click event to story cards
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.addEventListener('click', () => {
            const storyId = card.getAttribute('data-story');
            // Here you would typically load the full story content
            alert(`Loading full story for: ${storyId}`);
        });
    });

    // Add hover effect to story cards
    storyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {duration: 0.3, scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"});
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {duration: 0.3, scale: 1, boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"});
        });
    });
});
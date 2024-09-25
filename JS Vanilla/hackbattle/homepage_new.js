
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements you want to animate
    const animatableElements = document.querySelectorAll('.site-name, .socials, .lines, .line1, .line2, .line3');

    animatableElements.forEach(el => observer.observe(el));
});


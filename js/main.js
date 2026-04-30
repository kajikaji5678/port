const target = document.querySelectorAll('.about_us_achieve');

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

target.forEach(t => obs.observe(t));

console.log(document.querySelectorAll(".about_us_achieve"));
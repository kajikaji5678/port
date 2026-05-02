import Chart from 'chart.js/auto';
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

// new Chart(document.getElementById('about_us_chart_1'), {
//     type: 'pie',
//     data: {
//         labels: ['A', 'B', 'C'],
//         datasets: [{
//             data: [30, 50, 20]
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false
//     }
// });
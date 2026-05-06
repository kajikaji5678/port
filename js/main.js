// import Chart from 'chart.js/auto';
const target = document.querySelectorAll('.about_us_achieve');

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // すべての表示を消す
            contents.forEach(content => {
                content.classList.remove('display');
            });
            // Clickしたもののみ表示
            contents[index].classList.add('display');

            tabs.forEach(t => t.classList.remove('active'));
            tabs[index].classList.add('active')
        });
    });
});

// forEachメゾットでは第二引数でインデックスを取得できる
// とりあえず"すべて見る"という認識でいい

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

new Chart(document.getElementById('about_us_chart_1'), {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            data: [30, 50, 20]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


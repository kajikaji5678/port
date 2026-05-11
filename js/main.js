import Chart from 'chart.js/auto';
const target = document.querySelectorAll('.about_us_achieve');
import { interviewData } from "./data.js";

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

// スライダー
const cards = document.querySelectorAll(".card");
const next = document.querySelector(".interview_arrow");
const prev = document.querySelector(".interview_arrow_2");

let start = 0;
const dataLength = interviewData.length;
const visibleCount = cards.length;

function render() {

    cards.forEach((card, index) => {

        const item = interviewData[(start + index) % dataLength];

        card.innerHTML = `
            <div class="interview_image">
                <img src="${item.image}">
            </div>

            <div class="detail ${index === 0 ? 'show' : 'hide'}">
                <p class="detail_name">${item.name}</p>
                <p class="detail_job">${item.job}</p>
                <p>${item.content}</p>
            </div>
        `;
    });
}

render();

next.addEventListener("click", () => {
    start = (start + 1) % dataLength;
    render();
});

prev.addEventListener("click", () => {
    start = (start - 1 + dataLength) % dataLength;
    render();
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
        labels: ['はい', 'いいえ'],
        datasets: [{
            data: [90, 10],
            hoverOffset: 20
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
    },
});

new Chart(document.getElementById('about_us_chart_2'), {
    type: 'radar',
    data: {
        labels: [
            'LP制作',
            'WordPress制作',
            'SEO対策コラム作成',
            'Twitter運用',
            'システム開発'
        ],
        datasets: [{
            label: '弊社の業績',
            data: [30, 40, 60, 50, 50],
            fill: true
        }]
    },
    options: {
        scales: {
            r: {
                min: 10,
                max: 60,
                ticks: {
                    stepSize: 10
                }
            }
        },
        elements: {
            line: {
                borderWidth: 3
            }
        },
        responsive: true,
        maintainAspectRatio: true
    }
});

new Chart(document.getElementById('about_us_chart_3'), {
    type: 'line',
    data: {
        labels: [
            '2023年',
            '2024年',
            '2025年',
            '2026年'
        ],
        datasets: [
            {
                label: '合計売上金額',
                data: [10, 20, 25, 60]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
})
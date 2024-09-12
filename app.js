const ctx = document.getElementById('spendingChart').getContext('2d');
const spendingChart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
            label: '$53.45',
            data: [3, 6, 10, 5, 7, 9, 4],
            backgroundColor: [
                '#ff6b6b', '#ff6b6b', '#4ecdc4', '#ff6b6b', '#ff6b6b', '#ff6b6b', '#ff6b6b'
            ],
            borderRadius: 5,
        }]
    },
    options: {
        scales: {
            y: {
                display: false, 
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                display: true,
                grid: {
                    display: false 
                }
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        },
        elements: {
            bar: {
                borderRadius: 5
            }
        }
    }
});



// chart examples
// chart config
var chartColors = [
    getComputedStyle(document.documentElement).getPropertyValue('--teal'),
    getComputedStyle(document.documentElement).getPropertyValue('--blue'),
    getComputedStyle(document.documentElement).getPropertyValue('--purple'),
    getComputedStyle(document.documentElement).getPropertyValue('--red'),
    getComputedStyle(document.documentElement).getPropertyValue('--orange'),
    getComputedStyle(document.documentElement).getPropertyValue('--pink'),
    getComputedStyle(document.documentElement).getPropertyValue('--green'),
    getComputedStyle(document.documentElement).getPropertyValue('--light'),
];

function generateNumber(maxRange) {
    return Math.round((Math.random() * maxRange))
}

document.addEventListener("DOMContentLoaded", function() {
    // sample line chart data
    var lineChartDataExample = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: 'transparent',
            borderColor: chartColors[0],
            borderWidth: 4,
            pointBackgroundColor: chartColors[0]
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
            backgroundColor: chartColors[7],
            borderColor: chartColors[1],
            borderWidth: 4,
            pointBackgroundColor: chartColors[1]
        }]
    };

    // get the line chart dom wrapper element, the element must be <canvas>
    var lineChartExample = document.getElementById("lineChartWrapper");

    // generate the line chart
    if (lineChartExample) {
        new Chart(lineChartExample, {
            type: 'line',
            data: lineChartDataExample,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                legend: {
                    display: false
                }
            }
        });
    }

    // sample donut data 🍩
    var arDonutData = {
        labels: ['1-30 Days', '31-60 days', '61-90 days', '90+ Days'],
        datasets: [
            {
                backgroundColor: chartColors.slice(0, 4),
                borderWidth: 0,
                data: [54, 31, 6, 9]
            }
        ]
    };

    // get the donut chart dom wrapper element, the element must be <canvas>
    var arChartDonut = document.getElementById("arChartDonut");

    // generate the donut chart
    if (arChartDonut) {
        new Chart(arChartDonut, {
            type: "pie",
            data: arDonutData,
            options: {
                cutoutPercentage: 66,
                legend: {
                    position: 'bottom',
                    labels: {
                        pointStyle: 'circle',
                        usePointStyle: true
                    }
                }
            }
        })
    }

    // bar chart example 📊
    var barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: chartColors[2],
            borderColor: chartColors[7],
            borderWidth: 1,
            data: [
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100)
            ]
        }, {
            label: 'Dataset 2',
            backgroundColor: chartColors[5],
            borderColor: chartColors[7],
            borderWidth: 1,
            data: [
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100),
                generateNumber(100)
            ]
        }]
    }

    // get the donut chart dom wrapper element, the element must be <canvas>
    var barChart = document.getElementById("barChartContainer");

    // generate the bar chart
    if (barChart) {
        new Chart(barChart, {
            type: "bar",
            data: barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                }
            }
        })
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 获取 canvas 元素
    var ctx = document.getElementById('assetChart').getContext('2d');

    // 创建圆饼图
    var assetChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Tesla Stocks', 'Cash', 'Others'],
            datasets: [{
                label: 'Asset Allocation',
                data: [60, 30, 10], // 示例数据，单位是百分比
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });

    // 允许更新图表数据
    window.updateChartData = function(newData) {
        assetChart.data.datasets[0].data = newData;
        assetChart.update();
    };

    // 例如：更新数据
    updateChartData([50, 40, 10]); // 50% Tesla Stocks, 40% Cash, 10% Others
});

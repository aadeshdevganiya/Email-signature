// Bar + Line Combo Chart
const ctx1 = document.getElementById('barLineChart').getContext('2d');
new Chart(ctx1, {
    data: {
        labels: ['Dec 26', 'Dec 27', 'Dec 28', 'Dec 29', 'Dec 30', 'Dec 31'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#ff7f9f',
                data: [5, 40, 50, 70, 30, 5],
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: '#69b3f7',
                data: [52, 15, 30, 60, 15, 90],
            },
            {
                type: 'line',
                label: 'Dataset 3',
                borderColor: '#00c896',
                borderWidth: 2,
                fill: false,
                data: [35, 50, 35, 10, 70, 65],
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});


// Horizontal Bar Chart
 const ctx = document.getElementById('horizontalBarChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [60, 90, 40, -20, 85, 40, -40],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          label: 'Dataset 2',
          data: [60, 30, 20, 35, 75, 35, 10],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true
          }
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart'
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        }
      }
    }
  });


// Pie Chart
const ctx3 = document.getElementById('pieChart').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [{
            data: [25, 15, 10, 20, 30],
            backgroundColor: ['#ff6384', '#ff9f40', '#ffcd56', '#4bc0c0', '#36a2eb'],
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

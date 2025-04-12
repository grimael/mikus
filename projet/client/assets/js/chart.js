document.addEventListener('DOMContentLoaded', () => {
    // Graphique page d'accueil
    const homeChart = document.getElementById('homeChart');
    if (homeChart) {
      new Chart(homeChart, {
        type: 'bar',
        data: {
          labels: ['Projets', 'Compétences', 'Clients'],
          datasets: [{
            label: 'Statistiques',
            data: [10, 15, 5],
            backgroundColor: '#1e90ff',
          }],
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true } },
        },
      });
    }
  
    // Graphique compétences
    const skillsChart = document.getElementById('skillsChart');
    if (skillsChart) {
      new Chart(skillsChart, {
        type: 'radar',
        data: {
          labels: ['Python', 'R', 'Tableau', 'Figma', 'Adobe Suite'],
          datasets: [{
            label: 'Niveau de maîtrise',
            data: [90, 85, 80, 75, 70],
            backgroundColor: 'rgba(30, 144, 255, 0.2)',
            borderColor: '#1e90ff',
          }],
        },
        options: {
          responsive: true,
          scales: {
            r: { pointLabels: { font: { size: 14 } }, max: 100 },
          },
        },
      });
    }
  });
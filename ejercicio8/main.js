
        const votes = [0, 0, 0, 0, 0]; // Array para contar los votos
        const labels = ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"];
        let chart; // Variable para almacenar el gráfico

        // Función para votar
        function vote(option) {
            votes[option]++;
            updateChart(); // Actualizar el gráfico después de votar
        }

        // Función para resetear los votos
        function resetVotes() {
            for (let i = 0; i < votes.length; i++) {
                votes[i] = 0; // Reiniciar los votos
            }
            updateChart(); // Redibujar el gráfico
        }

        // Función para crear el gráfico
        function createChart() {
            const ctx = document.getElementById('votingChart').getContext('2d');
            chart = new Chart(ctx, {
                type: 'doughnut', // Cambiar a 'pie' si se desea un gráfico circular
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Votos por Partido',
                        data: votes,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ],
                        borderColor: 'rgba(0, 0, 0, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return tooltipItem.label + ': ' + tooltipItem.raw; // Personalizar el tooltip
                                }
                            }
                        }
                    }
                }
            });
        }

        // Función para actualizar el gráfico
        function updateChart() {
            chart.data.datasets[0].data = votes; // Actualizar los datos del gráfico
            chart.update(); // Redibujar el gráfico
        }

        // Inicializar el gráfico al cargar la página
        window.onload = createChart;

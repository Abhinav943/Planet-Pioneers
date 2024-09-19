document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const dataForm = document.getElementById('dataForm');
    const registrationSection = document.getElementById('registration');
    const dataEntrySection = document.getElementById('data-entry');
    const visualizationSection = document.getElementById('visualization');
    const recommendationsSection = document.getElementById('recommendations');
    const recommendationsList = document.getElementById('recommendationsList');
  
    
    // Handle registration form submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        registrationSection.classList.add('hidden');
        dataEntrySection.classList.remove('hidden');
    });

    // Handle data form submission
    dataForm.addEventListener('submit', (e) => {
        e.preventDefault();
        dataEntrySection.classList.add('hidden');
        visualizationSection.classList.remove('hidden');
        recommendationsSection.classList.remove('hidden');
        
        // Mock data for visualization
        createChart();
        generateRecommendations();
    });

    // Function to create a mock chart
    function createChart() {
        const ctx = document.getElementById('dataChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Excavation', 'Transportation', 'Equipment', 'Afforestation'],
                datasets: [{
                    label: 'Carbon Emissions',
                    data: [12, 19, 3, 5],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Function to generate recommendations
    function generateRecommendations() {
        const recommendations = [
            'Consider investing in carbon credits to offset emissions.',
            'Explore installing methane capture systems to reduce greenhouse gas emissions.',
            'Transition to renewable energy sources such as solar or wind to minimize carbon footprint.'
        ];

        recommendationsList.innerHTML = recommendations.map(rec => `<p>${rec}</p>`).join('');
    }
});

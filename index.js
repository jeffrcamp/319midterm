document.addEventListener("DOMContentLoaded", function() {
    // Fetch car data from the luxury.json file
    fetch('luxury.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Call function to display luxury cars
            displayCars(data, 'Luxury Cars');
        })
        .catch(error => {
            console.error('Error fetching car data:', error);
        });
});

// Function to display cars
function displayCars(cars, title) {
    // Get the container element where the cars will be displayed
    const carListContainer = document.getElementById('carList');

    // Create a heading element for the car category
    const heading = document.createElement('h2');
    heading.textContent = title;
    carListContainer.appendChild(heading);

    // Create a row element to hold the car cards
    const row = document.createElement('div');
    row.classList.add('row');
    carListContainer.appendChild(row);

    // Loop through each car object and create a card for it
    cars.forEach(car => {
        // Create a card element
        const card = document.createElement('div');
        card.classList.add('col-md-3', 'mb-3');

        // Construct HTML for the card
        card.innerHTML = `
            <div class="card">
                <img src="${car.image}" class="card-img-top" alt="${car.brand}">
                <div class="card-body">
                    <h5 class="card-title">${car.brand}</h5>
                    <p class="card-text">${car.description}</p>
                    <p class="card-text"><strong>Price Range:</strong> ${car.price_range}</p>
                    <a href="${car.brand.toLowerCase()}.html" class="btn btn-sm btn-outline-secondary">View Details</a>
                </div>
            </div>
        `;

        // Append the card to the row
        row.appendChild(card);
    });
}

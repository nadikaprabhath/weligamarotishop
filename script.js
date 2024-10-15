// Get all filter buttons and menu cards
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

// Get the modal and its elements
const modal = document.getElementById('menu-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalImage = document.getElementById('modal-image'); // Get the modal image element
const closeButton = document.querySelector('.close-btn');

// Add click event to all filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = button.getAttribute('data-category');

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');

        // Show/Hide cards based on category
        menuCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add click event to menu cards to open modal
menuCards.forEach(card => {
    card.addEventListener('click', function() {
        modalTitle.textContent = card.querySelector('h3').textContent;
        modalDescription.textContent = card.querySelector('p').textContent; // Set description
        modalPrice.textContent = card.querySelector('p').textContent; // Set price
        modalImage.src = card.querySelector('img').src; // Set the modal image source
        modal.style.display = 'block';
    });
});

// Add click event to close the modal
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

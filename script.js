document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const cardTemplate = document.querySelector('.card-template');

    // Data for each card
    const cardData = [
        {
            unitText: '1 Unit',
            standardPrice:'Standard Price',
            discountText: '10% off',
            currentPrice: '$10.00 USD',
            originalPrice: '$24.00 USD',
            badgeText: '',
            isBadgeVisible: false,
            size: 'S',
            color: 'Black'
        },
        {
            unitText: '2 Unit',
            discountText: '20% off',
            currentPrice: '$18.00 USD',
            originalPrice: '$24.00 USD',
            badgeText: 'MOST POPULAR',
            isBadgeVisible: false,
            size: 'S',
            color: 'Colour'
        },
        {
            unitText: '3 Unit',
            discountText: '30% off',
            currentPrice: '$24.00 USD',
            originalPrice: '$24.00 USD',
            badgeText: '',
            isBadgeVisible: false,
            size: 'S',
            color: 'Black'
        }
    ];

    // Create and append each card
    cardData.forEach(data => {
        // Clone the card template
        const cardClone = cardTemplate.cloneNode(true);
        cardClone.style.display = 'block'; // Make the cloned card visible
        cardClone.classList.add('card'); // Add a class for styling
        cardClone.addEventListener('click', () => toggleCard(cardClone));

        // Populate the card with data
        cardClone.querySelector('.unit-text').textContent = data.unitText;
        cardClone.querySelector('.discount-text').textContent = data.discountText;
        cardClone.querySelector('.current-price').textContent = data.currentPrice;
        cardClone.querySelector('.original-price').textContent = data.originalPrice;
       

        const standardPriceElement = cardClone.querySelector('.standard-price');
        if (data.standardPrice) {
            standardPriceElement.textContent = data.standardPrice;
            standardPriceElement.style.display = 'block'; // Make it visible
        }
        // Show the badge if necessary
        const badge = cardClone.querySelector('.badge');
        if (data.isBadgeVisible && data.badgeText) {
            badge.textContent = data.badgeText;
            badge.style.display = 'block';  // Changed from empty string to 'block'
            badge.style.visibility = 'visible'; // Ensure visibility
        } else {
            badge.style.display = 'none';
        }

        // Append the card to the container
        cardContainer.appendChild(cardClone);

            // Set the initial size and color selections
    const sizeSelect = cardClone.querySelector('.size-select');
    sizeSelect.value = data.size;

    const colorSelect = cardClone.querySelector('.color-select');
    colorSelect.value = data.color;
    });
});

function toggleCard(card) {
    // Collapse any already expanded card
    const expandedCards = document.querySelectorAll('.card.expanded');
    expandedCards.forEach(exp => {
        if (exp !== card) {
            exp.classList.remove('expanded');
            exp.querySelector('.size-color-selection').classList.add('hidden');
        }
    });

    // Toggle the clicked card
    const sizeColorSection = card.querySelector('.size-color-selection');
    card.classList.toggle('expanded');
    sizeColorSection.classList.toggle('hidden');
}


document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.btn1');

    radioButtons.forEach(button => {
        button.addEventListener('change', () => {
            radioButtons.forEach(btn => {
                if (btn !== button) btn.checked = false;
            });
        });
    });
});
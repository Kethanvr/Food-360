fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const product = data;

        // Update product information
        document.querySelector('.product-name').textContent = product.productName;
        document.querySelector('.manufacturer').textContent = `Manufacturer: ${product.manufacturer}`;
        document.querySelector('.location').textContent = `Location: ${product.location}`;
        document.querySelector('.price').textContent = `Price: ${product.price}`;
        document.querySelector('#main-product-image').src = product.image;
        document.querySelector('.source-of-origin').textContent = `Source of Origin: ${product.sourceOfOrigin}`;

        // Update ingredients list
        const ingredientsList = document.querySelector('.ingredients-list');
        ingredientsList.innerHTML = product.ingredients.map(ingredient => {
            const veganClass = ingredient.vegan ? 'vegan' : 'non-vegan';
            const veganText = ingredient.vegan ? 'Vegan' : 'Non-Vegan';
            return `<li class="${veganClass}">${ingredient.name} <span class="vegan-status">${veganText}</span></li>`;
        }).join('');

        // Update vegan indicator
        const allVegan = product.ingredients.every(ingredient => ingredient.vegan);
        const veganIndicator = document.querySelector('.vegan-indicator');
        veganIndicator.innerHTML = allVegan 
            ? '<span class="green-circle"></span> Vegan' 
            : '<span class="red-circle"></span> Non-Vegan';

        // Update preservatives list with side effects
        const preservativesList = document.querySelector('.preservatives-list');
        preservativesList.innerHTML = product.preservatives.map(preservative => {
            return `<li>${preservative.name} - Side Effects: ${preservative.sideEffects}</li>`;
        }).join('');
    });

function updateMainImage(imageSrc) {
    document.getElementById('main-product-image').src = imageSrc;
}
function alertPageComingSoon() {
    alert("This page will be updated soon");
}
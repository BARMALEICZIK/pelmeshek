// Функція для отримання всіх товарів з API
async function fetchProducts() {
    try {
        const response = await fetch('https://my-json-server.typicode.com/RobocodeSchool/marketplace/products');
        const products = await response.json();

        // Відображення товарів на сторінці
        displayProducts(products);
    } catch (error) {
        console.error('Помилка при отриманні товарів:', error);
    }
}

// Функція для відображення всіх товарів на сторінці
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    
    // Якщо немає товарів, вивести повідомлення
    if (products.length === 0) {
        productContainer.innerHTML = '<p>Немає доступних товарів для відображення.</p>';
        return;
    }

    // Створюємо картки товарів
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price} грн</div>
        `;

        productContainer.appendChild(productCard);
    });
}

// Викликаємо функцію для завантаження та відображення всіх товарів
fetchProducts();

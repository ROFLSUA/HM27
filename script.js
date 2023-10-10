const productsData = {
    Електроніка: [
        { id: 1, name: 'Смартфон', price: 1100 },
        { id: 2, name: 'Планшет', price: 1600 },
    ],
    Одяг: [
        { id: 3, name: 'Светер', price: 35 },
        { id: 4, name: 'Джинси', price: 60 },
    ],
    Книги: [
        { id: 5, name: 'Роман', price: 20 },
        { id: 6, name: 'Книга', price: 13 },
    ],
};

document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const productList = document.getElementById('product-list');
    const productInfo = document.getElementById('product-info');
    const orderForm = document.getElementById('order-form');
    const errorMessage = document.getElementById('error-message');

    for (const category in productsData) {
        const categoryItem = document.createElement('li');
        categoryItem.textContent = category;
        categoryItem.addEventListener('click', () => {
            displayProducts(category);
        });
        categoryList.appendChild(categoryItem);
    }

    function displayProducts(category) {
        productList.innerHTML = '';
        productInfo.innerHTML = '';
        errorMessage.textContent = '';

        const products = productsData[category];
        products.forEach(product => {
            const productItem = document.createElement('li');
            productItem.textContent = `${product.name} - ${product.price} грн`;
            productItem.addEventListener('click', () => {
                displayProductInfo(product);
            });
            productList.appendChild(productItem);
        });
    }

    function displayProductInfo(product) {
        productInfo.innerHTML = `
            <p>ID товару: ${product.id}</p>
            <p>Назва: ${product.name}</p>
            <p>Ціна: ${product.price} грн</p>
            <button id="buy-button">Купити</button>
        `;

        const buyButton = document.getElementById('buy-button');
        buyButton.addEventListener('click', () => {
            showOrderForm(product);
        });
    }

    function showOrderForm(product) {
        productInfo.innerHTML = '';
        orderForm.style.display = 'block';

        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const city = document.getElementById('city').value;
            const postOffice = document.getElementById('post-office').value;
            const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
            const quantity = document.getElementById('quantity').value;
            const comment = document.getElementById('comment').value;

            if (!name || !city || !postOffice || !paymentMethod || !quantity) {
                errorMessage.textContent = 'Будь ласка, заповніть всі поля.';
            } else {
                const orderDetails = `
                    <h3>Деталі замовлення:</h3>
                    <p>Товар: ${product.name}</p>
                    <p>Ціна: ${product.price} грн</p>
                    <p>ПІБ покупця: ${name}</p>
                    <p>Місто: ${city}</p>
                    <p>Склад Нової пошти: ${postOffice}</p>
                    <p>Спосіб оплати: ${paymentMethod.value}</p>
                    <p>Кількість: ${quantity}</p>
                    <p>Коментар: ${comment}</p>
                `;
                productInfo.innerHTML = orderDetails;
                orderForm.style.display = 'none';
            }
        });
    }
});
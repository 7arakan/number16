//!пишу заметки для себя!\\
const productsContainer = document.getElementById('products');

fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      //createElement() используется для создания нового элемента HTML
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      //createElement() используется для создания нового элемента HTML
      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      //createElement() используется для создания нового элемента HTML
      const nameElement = document.createElement('h2');
      nameElement.textContent = product.name;
      //createElement() используется для создания нового элемента HTML
      const priceElement = document.createElement('p');
      priceElement.classList.add('price');
      priceElement.textContent = `Цена: ${product.price} руб.`;
      //createElement() используется для создания нового элемента HTML
      const quantityElement = document.createElement('p');
      quantityElement.classList.add('quantity');
      quantityElement.textContent = `Количество: ${product.quantity}`;
      //appendChild() используется для добавления нового элемента в конец списка дочерних элементов указанного родительского элемента
      productElement.appendChild(imageElement);
      productElement.appendChild(nameElement);
      productElement.appendChild(priceElement);
      productElement.appendChild(quantityElement);
      productsContainer.appendChild(productElement);
    });
});
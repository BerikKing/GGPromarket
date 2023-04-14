// определение массива элементов в корзине
let cartItems = [];

// функция добавления элемента в корзину
function addToCart(item) {
  // проверяем, есть ли уже этот элемент в корзине
  let cartItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (cartItem) {
    // если элемент уже есть в корзине, увеличиваем количество
    cartItem.quantity++;
  } else {
    // если элемента еще нет в корзине, добавляем его в массив корзины
    cartItems.push({...item, quantity: 1});
  }

  // обновляем отображение корзины
  renderCart();
}

// функция удаления элемента из корзины
function removeFromCart(id) {
    // находим элемент в корзине по id
    let cartItemIndex = cartItems.findIndex(cartItem => cartItem.id === id);
  
    if (cartItemIndex !== -1) {
      // если элемент найден, удаляем его из массива корзины
      cartItems.splice(cartItemIndex, 1);
    }
  
    // обновляем отображение корзины
    renderCart();
  }
  
  // функция отображения корзины
  function renderCart() {
    // находим элемент с id "cart-items"
    let cartItemsElement = document.getElementById("cart-items");
  
    // очищаем его содержимое
    cartItemsElement.innerHTML = "";
  
    // создаем новые строки таблицы для каждого элемента в корзине
    cartItems.forEach(cartItem => {
      let row = document.createElement("tr");
  
      let nameCell = document.createElement("td");
      nameCell.innerText = cartItem.name;
      row.appendChild(nameCell);
  
      let quantityCell = document.createElement("td");
      quantityCell.innerText = cartItem.quantity;
      row.appendChild(quantityCell);
  
      let priceCell = document.createElement("td");
      priceCell.innerText = cartItem.price;
      row.appendChild(priceCell);
  
      let removeCell = document.createElement("td");
      let removeButton = document.createElement("button");
      removeButton.innerText = "Удалить";
      removeButton.addEventListener("click", () => {
        removeFromCart(cartItem.id);
      });
      removeCell.appendChild(removeButton);
      row.appendChild(removeCell);
  
      cartItemsElement.appendChild(row);
    });
  
    // находим элемент с id "total-price"
    let totalPriceElement = document.getElementById("total-price");
  
    // вычисляем общую цену всех элементов в корзине
    let totalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
  
    // отображаем общую цену на странице
    totalPriceElement.innerText = totalPrice;
  }
  
  // функция очистки корзины
  function clearCart() {
    cartItems = [];
    renderCart();
  }
  
  // находим кнопку "Очистить корзину" и добавляем обработчик события
  let clearCartButton = document.getElementById("clear-cart");
  clearCartButton.addEventListener("click", () => {
    clearCart();
  });
  
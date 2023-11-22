if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName("cart-remove");

    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addCartButtons = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener("click", addCartClicked);
    }

    var buyButton = document.querySelector(".btn-buy");
    buyButton.addEventListener("click", buyButtonClicked);

    updatetotal();
}

function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];

        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = parseFloat(quantityElement.value);
        if (!isNaN(quantity) && quantity > 0) {
            total = total + price * quantity;
        }
    }
    document.getElementsByClassName("total-price")[0].innerText = "$" + total.toFixed(2);
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartBox = buttonClicked.parentElement;
    cartBox.remove();
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg = shopProduct.getElementsByClassName("product-img")[0].src;

    addProducttoCart(title, price, productImg);
    updatetotal();
}

function addProducttoCart(title, price, productImg) {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartItems = cartContent.getElementsByClassName("cart-box");

    for (var i = 0; i < cartItems.length; i++) {
        var cartItemTitle = cartItems[i].getElementsByClassName("cart-product-title")[0].innerText;
        if (cartItemTitle === title) {
            alert("¡Ya agregaste este producto al carrito ! >.<");
            return; 
        }
    }

    var cartShopBox = document.createElement("div");
    cartShopBox.className = "cart-box";
    var cartContentHTML = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <i class='bx bxs-trash cart-remove'></i>
    `;

    cartShopBox.innerHTML = cartContentHTML;
    cartContent.appendChild(cartShopBox);
    var newQuantityInput = cartShopBox.querySelector(".cart-quantity");
    newQuantityInput.addEventListener("change", quantityChanged);
    cartShopBox.querySelector(".cart-remove").addEventListener("click", removeCartItem);
    updatetotal();
}

function buyButtonClicked() {
    alert("Tu compra fue realizada correctamente");
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}
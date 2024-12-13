function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Giá: ${item.price.toLocaleString()} VND</p>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toLocaleString();
}

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (!isLoggedIn) {
        productList.innerHTML = "<p>Vui lòng đăng nhập để xem sản phẩm đấu giá.</p>";
        return;
    }

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price.toLocaleString()} VND</p>
                <button class="button" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
            </div>
        `;

        productList.appendChild(productDiv);
    });
}

renderProducts();

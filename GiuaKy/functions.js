let isLoggedIn = false;
const cart = [];

function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        isLoggedIn = true;
        document.getElementById("login-button").style.display = "none";
        document.getElementById("logout-button").style.display = "inline-block";
        document.getElementById("login-form").style.display = "none";
        renderProducts();
        alert("Đăng nhập thành công!");
    } else {
        alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
    }
}

function logout() {
    isLoggedIn = false;
    document.getElementById("login-button").style.display = "inline-block";
    document.getElementById("logout-button").style.display = "none";
    renderProducts();
    alert("Đăng xuất thành công!");
}

function toggleCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.style.display = cartDiv.style.display === "block" ? "none" : "block";
    renderCart();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    }
}

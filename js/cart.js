const cartContainer = document.getElementById('cart-container');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addcart() {
    cartContainer.innerHTML = ""
}
const cartContainer = document.getElementById('cart-container');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addcart() {
    cartContainer.innerHTML = "";
    if(cart.length === 0){
        cartContainer.innerHTML = ` <h3>Your cart is Empty </h3>`;
        return
    }


    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-div');

        cartItem.innerHTML = `
            
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-decription">
                <div>
                    <h4> ${item.name} </h4>
                    <p class ="size"> ${item.size} <p>
                </div>
                    <p>Price: GHS ${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>SubTotal: GHS ${item.quantity * item.price}</p>
                    <i id="delete-icon" class="bx bx-trash"></i>
            </div>
        
        
        `

        cartContainer.appendChild(cartItem);
    });






}
addcart()

    //add copy write to page
    let currentYear = new Date().getFullYear()
    const cwyBox = document.querySelector("#currentYear");
    cwyBox.textContent += currentYear //display current year



 // update cart counter
  function updatweCartCounter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCounter = document.getElementById("cart-counter");
    let totalItems = cart.length;
    cartCounter.textContent = totalItems;
  }
  updatweCartCounter();
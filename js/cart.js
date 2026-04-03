
const cartContainer = document.getElementById('cart-container');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addcart() {
    cartContainer.innerHTML = "";
    let total = 0;
    if(cart.length === 0){
        cartContainer.innerHTML = ` <h3>Your cart is Empty </h3>`;
        return
    }


    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-div');

        cartItem.innerHTML = `
            
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-descripton-container">
                <div class="cart-decription">
                    <div>
                        <h4> ${item.name} </h4>
                        <p class ="size"> ${item.size} <p>
                    </div>
                        <p>Price: GHS ${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>SubTotal: &#x20B5 ${item.quantity * item.price}</p>
                </div>
                        <i id="delete-icon" class="bx bx-trash"></i>
            </div>
        `;
         total += item.price * item.quantity

        cartContainer.appendChild(cartItem);
    });

    // summary price calculations
    let delivP = 20;
    let TransportationCost = document.getElementById('deliveryCost').textContent = "GHS "+ delivP;
    let totalPrice = document.getElementById('totalCost');
    let itemqty = document.getElementById('itemQuantity').textContent =  cart.length;
    let SubTotal = document.getElementById('subtotal').textContent = "GHS "+ total.toFixed(1);
    let taxPrice = document.getElementById('tax');
    let discountPrice = document.getElementById('discount');
    
    let taxPercent = 3
    let priceAfterTax = (taxPercent / 100) * total.toFixed(1)
    taxPrice.textContent = "GHS "+ priceAfterTax.toFixed(1)

    let discountPercentage = 5
    let priceAfterDiscount = (discountPercentage / 100) * total.toFixed(1)
    discountPrice.textContent = priceAfterDiscount

    let Sum = (priceAfterTax + total + delivP) - priceAfterDiscount
    totalPrice.textContent ="GHS "+ Sum.toFixed(2);

    // ======= REMOVE PRODUCT FROM CART
  // Get popup elements
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let productIndexToDelete = null; // store which product user wants to delete

// Add remove event listeners
document.querySelectorAll("#delete-icon").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    productIndexToDelete = index; // store which product to delete
    popup.style.display = "flex"; // show popup
  });
});

// When user confirms deletion
yesBtn.addEventListener("click", () => {
  if (productIndexToDelete !== null) {
    removeFromCart(productIndexToDelete); 
    popup.style.display = "none"; // close popup
    productIndexToDelete = null;
    window.location.reload();
  }

});

// When user cancels deletion
noBtn.addEventListener("click", () => {
  popup.style.display = "none"; // close popup without deleting
  productIndexToDelete = null;
});


function removeFromCart(index) {
  cart.splice(index, 1); // remove one product
  localStorage.setItem("cart", JSON.stringify(cart));
  addcart(); // refresh cart
}

}
addcart()

// update cart counter
function updatweCartCounter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCounter = document.getElementById("cart-counter");
    let totalItems = cart.length;
    cartCounter.textContent = totalItems;
}
updatweCartCounter();



let CheckOutBtn = document.getElementById('checkOutBtn');





//navigation functionality
const menuBar = document.getElementById('menuBar')
const navLinks = document.querySelector('#navLinks')
const navitems = document.querySelectorAll('#navLinks li a, #navLinks i')

//toggle menu functionality
menuBar.addEventListener('click', () => {
    navLinks.classList.toggle("show");
});

//close menu when menu list is clicked
navitems.forEach((item) => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    })
} );




// show user name when logged in
let loginEl = document.getElementById('loginEl');
let profileIcon = document.getElementById('profile-icon');
let contactEl  = document.getElementById('contactEl');
let logOutIcon = document.getElementById('logout-icon');



let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
        loginEl.innerHTML = currentUser.name[0] // show user name in login
        loginEl.style.width = "30px"
        loginEl.style.height = "30px"
        loginEl.style.alignContent = "center"
        loginEl.style.textAlign = "center"
        loginEl.style.backgroundColor = "green"
        loginEl.style.borderRadius = "50%"
        profileIcon.style.display = "none" // disable the profile icon
        loginEl.style.color = "white"

        contactEl.addEventListener('click', () => {
            setTimeout(() => {
                window.location.href = "contact.html"
            }, 1000)
        })
    }else{
        loginEl.addEventListener('click', () => {
            window.location.href = 'login.html'
        })

        profileIcon.addEventListener('click', () => {
            window.location.href = 'login.html';
        })
    }







//add copy write to page
let currentYear = new Date().getFullYear()
const cwyBox = document.querySelector("#currentYear");
cwyBox.textContent += currentYear //display current year
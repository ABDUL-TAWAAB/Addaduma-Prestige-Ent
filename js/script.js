document.addEventListener('DOMContentLoaded', () => {
const product = [
    {
        id : 0,
        name: "Can-Malt",
        image: "multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: true 
    },
    {
        id : 1,
        name: "Can-fanta",
        image: "multimedia/products/can-fanta.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 2,
        name: "Guinness Malta",
        image: "multimedia/products/bottled-malta-guinness.jpg",
        size: "500ml",
        price: 120,
        recomended: true 
    },
    {
        id : 4,
        name: "Monster Energy",
        image: "multimedia/products/can-monster-energy.jpg",
        size: "350ml",
        price: 180,
        recomended: true 
    },
    {
        id : 4,
        name: "Sprite",
        image: "multimedia/products/can-sprite.jpg",
        size: "350ml",
        price: 120,
        recomended: true 
    },
    {
        id : 5,
        name: "Coca-Cola",
        image: "multimedia/products/can-coca-cola.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 6,
        name: "Fanta",
        image: "multimedia/products/fanta.jpg",
        size: "500ml",
        price: 135,
        recomended: true 
    },
    {
        id : 7,
        name: "Smirnoff",
        image: "multimedia/products/smirnoff.jpg",
        size: "350ml",
        price: 220,
        recomended: false
    },
    {
        id : 8,
        name: "Vittel Water",
        image: "multimedia/products/vittel-mineral-water.jpg",
        size: "500ml",
        price: 50,
        recomended: true 
    },
    {
        id : 9,
        name: "Cola",
        image: "multimedia/products/coca-cola.jpg",
        size: "250ml",
        price: 150,
        recomended: true 
    },
    {
        id : 10,
        name: "Bloom Sparkling",
        image: "multimedia/products/Bloom-Sparkling-Energy.jpg",
        size: "250ml",
        price: 120,
        recomended: false
    },
    {
        id : 11,
        name: "C4 Energy",
        image: "multimedia/products/C4-Preworkout.jpg",
        size: "250ml",
        price: 250,
        recomended: true
    },
    {
        id : 12,
        name: "Ceres",
        image: "multimedia/products/ceres-juice.jpg",
        size: "1 ltr",
        price: 127,
        recomended: false
    },
    {
        id : 13,
        name: "Choco-Listo",
        image: "multimedia/products/Choco-Listo-Instant-Chocolate.jpg",
        size: "250ml",
        price: 93,
        recomended: false
    },
    {
        id : 14,
        name: "Coca-Cola",
        image: "multimedia/products/coca-cola-bigsize.jpg",
        size: "1.5 ltr",
        price: 130,
        recomended: false
    },
    {
        id : 15,
        name: "Don Simon",
        image: "multimedia/products/Don-Simon-Multifrudas.jpg",
        size: "1.5 ltr",
        price: 150,
        recomended: false
    },
    {
        id : 16,
        name: "Hollandia Yoghurt",
        image: "multimedia/products/HOLLANDIA-YOGHURT.jpg",
        size: "1.5 ltr",
        price: 137,
        recomended: false
    },
    {
        id : 17,
        name: "Lucuzade",
        image: "multimedia/products/Lucuzade.jpg",
        size: "900ml",
        price: 150,
        recomended: false
    },
    {
        id : 18,
        name: "Nestle Water",
        image: "multimedia/products/nestle-water.jpg",
        size: "500ml",
        price: 45,
        recomended: false
    },
    {
        id : 19,
        name: "Vita Milk",
        image: "multimedia/products/vita-milk.jpg",
        size: "250ml",
        price: 350,
        recomended: true
    }
]


const productPage = document.querySelector(".product-page");


let productEl = []

productEl = product.map(data => {
    const card = document.createElement("div")
    card.classList.add('product-card')
    card.innerHTML=`
    <img src=${data.image} alt=${data.name} loading="lazy" />
        <div class="product-details">
            <h4>${data.name}</h4>
            <div class="description">
                <p class= "size">Size: ${data.size}</p>
                <h5 class="price"> ${data.price} &#x20B5;</h5>
            </div>
            
            <div class="action-btns">
                <div class="qty">
                    <button class="decrease"">-</button>
                    <input  min="1" class="qty-value" type="number" value="0" />
                    <button class="increase">+</button>
                </div>
                    <i id="addToCart" class="bx bx-cart-alt"></i>
            </div>
        </div>
    `;



    productPage.appendChild(card);
    // search funtionality
    const seachEl = document.getElementById("searchInput");

    seachEl.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();

        let filterProduct = product.filter(productItem => {
            productItem.name.toLowerCase().includes(searchText)
        })
        console.log(filterProduct)



   
    });




 //cart quantity count functionality
    const decreaseBtn = card.querySelector(".decrease");
    const increaseBtn = card.querySelector(".increase");
    let valueEl = card.querySelector(".qty-value");
    if(!decreaseBtn || !increaseBtn || !valueEl){
        console.error("button or element not found")
        return
    }

        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(valueEl.value);
            quantity++;
            valueEl.value = quantity;
        })

        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(valueEl.value) || 0;
            if(quantity > 1){
                quantity--;
            };
            valueEl.value = quantity;
        })


        card.querySelector('#addToCart').addEventListener('click', () => {
            const currentQuantity = parseInt(valueEl.value) || 0;
            if(currentQuantity > 0){
                addToCart(data, currentQuantity);
                valueEl.value = 0; // reset qauntity
            }
        })




        return{name: productEl.name, price: productEl.price, element: productEl.card}
        
    })

    //cart functionality

    function addToCart(product, qty) {
    // get existing cart or start new
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // check if product already in cart
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        size: product.size,
        price: product.price,
        image: product.image,
        quantity: qty,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    let cartCounter = document.getElementById("cart-counter");
    let totalItems = cart.length;
    cartCounter.textContent = totalItems;

  } // end of cart function

  // update cart counter
  function updatweCartCounter() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCounter = document.getElementById("cart-counter");
    let totalItems = cart.length;
    cartCounter.textContent = totalItems;
  }
  updatweCartCounter();


  // dirrect user user to cart page if cart icon is clicked
  const cartIcon = document.getElementById('cartIcon');
  cartIcon.addEventListener('click', () => {
    window.location.href = "cart.html";
  })
 

// filter recomended products
const recomendationPage = document.querySelector('.recomendations-page');
const recomendedProduct = product.filter(p => p.recomended)
recomendedProduct.forEach(recomendedItem => {
    const recomendedCard = document.createElement('div');
    recomendedCard.classList.add('recomended-card')

    recomendedCard.innerHTML = `
        <img src=${recomendedItem.image} alt=${recomendedItem.name}>
            <div class="product-details">
            <h4>${recomendedItem.name}</h4>
            <div class="description">
                <p class= "size">Size: ${recomendedItem.size}</p>
                <h5 class="price"> ${recomendedItem.price} &#x20B5;</h5>
            </div>
            
            <div class="action-btns">
                <div class="qty">
                    <button class="decrease"">-</button>
                    <input  min="1" class="qty-value" type="number" value="0" />
                    <button class="increase">+</button>
                </div>
                    <i class="bx bx-cart-alt"></i>
            </div>
        </div>
    `;

    recomendationPage.append(recomendedCard);
    
})



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


        logOutIcon.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            location.reload();
        })
    }else{
        logOutIcon.style.display = 'none';
        contactEl.addEventListener('click', () => {
            alert('Please Login to continue')

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000)
        })

        loginEl.addEventListener('click', () => {
            window.location.href = 'login.html'
        })

        profileIcon.addEventListener('click', () => {
            window.location.href = 'login.html';
        })
    }


    });




    







    


    

const product = [
    {
        id : 1,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: true 
    },
    {
        id : 2,
        name: "Can-fanta",
        image: "../multimedia/products/can-fanta.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 3,
        name: "Guinness Malta",
        image: "../multimedia/products/bottled-malta-guinness.jpg",
        size: "500ml",
        price: 120,
        recomended: true 
    },
    {
        id : 4,
        name: "Monster Energy",
        image: "../multimedia/products/can-monster-energy.jpg",
        size: "350ml",
        price: 180,
        recomended: true 
    },
    {
        id : 5,
        name: "Sprite",
        image: "../multimedia/products/can-sprite.jpg",
        size: "350ml",
        price: 120,
        recomended: true 
    },
    {
        id : 6,
        name: "Coca-Cola",
        image: "../multimedia/products/can-coca-cola.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 7,
        name: "Fanta",
        image: "../multimedia/products/fanta.jpg",
        size: "500ml",
        price: 135,
        recomended: true 
    },
    {
        id : 8,
        name: "Smirnoff",
        image: "../multimedia/products/smirnoff.jpg",
        size: "350ml",
        price: 220,
        recomended: false
    },
    {
        id : 9,
        name: "Vittel Water",
        image: "../multimedia/products/vittel-mineral-water.jpg",
        size: "500ml",
        price: 50,
        recomended: true 
    },
    {
        id : 10,
        name: "Cola",
        image: "../multimedia/products/coca-cola.jpg",
        size: "250ml",
        price: 150,
        recomended: true 
    },
    {
        id : 11,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 12,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 13,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 14,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 15,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 15,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 15,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 15,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 15,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: false
    },
    {
        id : 16,
        name: "Can-Malt",
        image: "../multimedia/products/can-malt.jpg",
        size: "250ml",
        price: 150,
        recomended: true
    }
]
const productPage = document.querySelector(".product-page");


let productEl = []

productEl = product.map(data => {
    const card = document.createElement("div")
    card.classList.add('product-card')
    card.innerHTML=`
    <img src=${data.image} alt=${data.name} loadin="lazy" />
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
                    <i class="bx bx-cart-alt"></i>
            </div>
        </div>
    `;



    productPage.appendChild(card);
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




        return{name: productEl.name, price: productEl.price, element: productEl.card}


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

// search funtionality

const seachEl = document.getElementById("searchInput");
seachEl.addEventListener("input", (e) => {
    const value = e.value
    console.log(value)
})

//navigation functionality
const menuBar = document.getElementById('menuBar')
const navLinks = document.querySelector('#navLinks')
const navitems = document.querySelectorAll('#navLinks li a, #navLinks i')

//toggle the menu
menuBar.addEventListener('click', () => {
    navLinks.classList.toggle("show");
});

//close menu when menu list is clicked
navitems.forEach((item) => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    })
} );

    

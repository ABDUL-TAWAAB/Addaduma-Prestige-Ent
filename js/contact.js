//show user name when logged in
let loginEl = document.getElementById('loginEl');
let profileIcon = document.getElementById('profile-icon');
let contactEl  = document.getElementById('contactEl');


let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
        loginEl.innerHTML = currentUser.name // show user name in login
        profileIcon.style.display = "none" // disable the profile icon
        loginEl.style.color = "red"
    }else{
        
        loginEl.addEventListener('click', () => {
            window.location.href = 'login.html'
        })
    }


  function sendMail() {
    console.log("Start sending...");

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    console.log(name, email, message);

    emailjs.send("service_6e1liye", "template_chywk9u", {
        name: name,
        email: email,
        message: message
    })
    .then(function(response) {
        console.log("SUCCESS!", response);
        alert("Message sent");
    })
    .catch(function(error) {
        console.error("FAILED...", error);
        alert("Failed to send");
    });
} 





// toogle bar
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
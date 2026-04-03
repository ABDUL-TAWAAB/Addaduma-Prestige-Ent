//show user name when logged in
let loginEl = document.getElementById('loginEl');
let profileIcon = document.getElementById('profile-icon');
let contactEl  = document.getElementById('contactEl');


let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
        loginEl.innerHTML = currentUser.name[0] // show user name in login
        loginEl.style.width = "30px"
        loginEl.style.height = "30px"
        loginEl.style.display = "flex"
        loginEl.style.justifyContent = "center"
        loginEl.style.alignContent = "center"
        loginEl.style.textAlign = "center"
        loginEl.style.backgroundColor = "green"
        loginEl.style.borderRadius = "50%"
        profileIcon.style.display = "none" // disable the profile icon
        loginEl.style.color = "white"
    }


// toogle functionality for conatct page
    const menuBar = document.getElementById('menuBar');
    const menuList = document.getElementById('navLinks')
    const listItems = document.querySelectorAll ('#navLinks li a, .cart-box i');
    menuBar.addEventListener('click', () => {
        menuList.classList.toggle('show');
    })

    listItems.forEach(list => {
        list.addEventListener('click', () => {
            menuList.classList.remove('show');
        })
    })




    // add copy write to page
    let currentYear = new Date().getFullYear()
    const cwyBox = document.querySelector("#currentYear");
    cwyBox.textContent += currentYear //display current year



  
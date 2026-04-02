// show password functionality
let passwordEl = document.getElementById('password');
let confirmPasswordEl = document.getElementById('confirmPassword')
let eyeCloseIcon = document.getElementById('eyeCloseEl');
let eyeOpenIcon = document.getElementById('eyeOpenEl');

eyeCloseIcon.addEventListener('click', ()=> {
    if(passwordEl.type == "password"){
        passwordEl.type = "text";
        eyeCloseIcon.style.display = "none";
        eyeOpenIcon.style.display = "flex"; 
    }
})
eyeOpenIcon.addEventListener('click', ()=> {
    if(passwordEl.type == "text"){
        passwordEl.type = "password";
        eyeOpenIcon.style.display = "none"; 
        eyeCloseIcon.style.display = "flex";
    }
})


eyeCloseIcon.addEventListener('click', ()=> {
    if(confirmPasswordEl.type == "password"){
        confirmPasswordEl.type = "text";
        eyeCloseIcon.style.display = "none";
        eyeOpenIcon.style.display = "flex"; 
    }
})


eyeOpenIcon.addEventListener('click', ()=> {
    if(confirmPasswordEl.type == "text"){
        confirmPasswordEl.type = "password";
        eyeOpenIcon.style.display = "none"; 
        eyeCloseIcon.style.display = "flex";
    }
})





// get the user details and store
const signUpBtn = document.getElementById('signUpBtn');
let form = document.getElementById("registerForm");
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let name = document.getElementById('name').value
    const message = document.querySelector('.message');
    const phoneNumber = document.querySelector('#phoneNumber').value;


    //password validation
    if(password !== confirmPassword){
        message.innerHTML = "password did much, check and try again"
        message.style.color = "red";
        return;
    }

    //phone number validation
    //let length = 10
    if(phoneNumber.length < 10){
        alert("invalid phone number")
    }


    // check if user exist
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
        (user) => users.email == email
    );

    if(existingUser){
        alert("hello you you already exist");
        return;
    }

    // save new user
    const newUser = {name, email, password};
    users.push((newUser));
    localStorage.setItem("users", JSON.stringify(users));


    //save login
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
        console.log(currentUser.name)
    }

    form.reset();

    setTimeout(() =>  {
        window.location.href = 'index.html'
        
    }, 2000)
})




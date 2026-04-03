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
        message.innerHTML = "Please check Your passwords"
        message.style.fontSize = "16px"
        message.classList.toggle('showMessage')
         setTimeout(() => {
        message.classList.remove('showMessage')
        }, 2500)
        return;
    }

    //phone number validation
    //let length = 10
    if(phoneNumber.length < 10){
        message.textContent = "invalid phone number";
        message.style.fontSize = "16px"
        message.classList.toggle('showMessage')
        setTimeout(() => {
            message.classList.remove('showMessage')
        }, 2500)
        return;
    }


    // check if user exist
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
        (user) => user.email.toLowerCase().trim() == email.toLowerCase().trim()
    );

    if(existingUser){
         message.textContent = "Account already exist Please login"
         message.style.fontSize = "16px"
         message.classList.toggle('showMessage')
         setTimeout(() => {
            message.classList.remove('showMessage');
        }, 2500)
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
message.textContent = "Successful. redirecting.."
message.style.fontSize = "16px"
message.classList.toggle('showMessage')
    setTimeout(() =>  {
        message.classList.remove("showMessage")
        window.location.href = 'index.html'
        
    }, 2500)
})




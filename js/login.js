
let eyeCloseEl = document.getElementById('eyeCloseEl');
let eyeOpenEl = document.getElementById('eyeOpenEl');
let passwrd = document.getElementById('passwordEl')

eyeCloseEl.addEventListener('click', () =>{
    if(passwrd.type == "password"){
        passwrd.type = "text";
        eyeCloseEl.style.display = "none"
        eyeOpenEl.style.display = "flex";
    }
})

eyeOpenEl.addEventListener('click', () => {
    if(passwrd.type == "text"){
        passwrd.type = "password";
        eyeOpenEl.style.display = "none";
        eyeCloseEl.style.display = "flex"
    }
})





let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailEl = document.getElementById('emailEl').value;
    let passwordEl = document.getElementById('passwordEl').value;
    const messageEl = document.getElementById('message');
    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    //find user
    let foundUser = users.find(user => user.email === emailEl && user.password === passwordEl);
     if(foundUser){
        //save the logins
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        messageEl.innerHTML = "Logged successfully";
        messageEl.style.color = "green";
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2500)
     }else{
         messageEl.innerHTML = "wrong credentials please try again";
         messageEl.style.color = "red";
        
    }
    
})



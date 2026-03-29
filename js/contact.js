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
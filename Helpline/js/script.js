// let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const signupLink = document.querySelector('#signup-link');
const loginLink = document.querySelector('#login-link');

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});

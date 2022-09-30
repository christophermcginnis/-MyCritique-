const createAccount = document.getElementById('create-account-btn');
const logo = document.getElementById('login-logo');
const logoContainer = document.querySelector('.background');
const loginForm = document.querySelector('.login-container');
const signupForm = document.querySelector('.signup-container');
const logoHeading = document.querySelector('.background-subcontainer');
const backToLogin = document.getElementById('back-to-login');
const footerContent = document.getElementById('footer-content');
const signUp = document.getElementById('signup-btn');

// Lets user cycle between "Log in" and "Sign up" forms
footerContent.classList.add('float-left');

createAccount.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  footerContent.classList.remove('float-left');
  footerContent.classList.remove('float-right');
    logoContainer.classList.remove("transition");
    logoContainer.classList.remove("transition-original");
    logo.classList.remove('close');
    logo.classList.remove('open');
    logoHeading.classList.remove('open');
    logoHeading.classList.remove('close');

  void logoContainer.offsetWidth;
  
  // -> and re-adding the class
  footerContent.classList.add('float-right');
    logoContainer.classList.add("transition");
    logo.classList.add('close');
    logoHeading.classList.add('open');
    setTimeout(() => {
        loginForm.style = "visibility: hidden;"
        signupForm.style = "visibility: visible;"
    }, 500)
  
}, false);

backToLogin.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  footerContent.classList.remove('float-left');
  footerContent.classList.remove('float-right');
    logoContainer.classList.remove("transition");
    logoContainer.classList.remove("transition-original");
    logo.classList.remove('close');
    logo.classList.remove('open');
    logoHeading.classList.remove('open');
    logoHeading.classList.remove('close');
  
  void logoContainer.offsetWidth;
  
  // -> and re-adding the class
  footerContent.classList.add('float-left');
    logoContainer.classList.add('close')
    logoContainer.classList.add('open');
    logoContainer.classList.add("transition");
    logoContainer.classList.add("transition-original");
    
    setTimeout(() => {
        loginForm.style = "visibility: visible;"
        signupForm.style = "visibility: hidden;"
    }, 500);
}, false);


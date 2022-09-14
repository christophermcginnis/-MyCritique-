const createAccount = document.getElementById('create-account-btn');
const logo = document.getElementById('logo');
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

// Validates users credentials
const input = document.querySelectorAll('.input');
const feedbackContainer = document.querySelectorAll('.validation-feedback');
const feedbackError = document.querySelectorAll('.validation-feedback-error');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

const email = document.getElementById('email');
const username = document.getElementById('signup-username');
const password = document.getElementById('signup-password');
const confirmPassword = document.getElementById('signup-password2')
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');

const emailRegExp = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$')
const usernameRegExp = new RegExp('^(?=[a-zA-Z0-9_]{3,15}$)(?!.*[_]{2})[^_].*[^_]$');
const passwordRegExp = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$`)
const firstNameRegExp = new RegExp("^([^ \\x21-\\x26\\x28-\\x2C\\x2E-\\x40\\x5B-\\x60\\x7B-\\xAC\\xAE-\\xBF\\xF7\\xFE]+)$")
const lastNameRegExp = new RegExp("^([^ \\x21-\\x26\\x28-\\x2C\\x2E-\\x40\\x5B-\\x60\\x7B-\\xAC\\xAE-\\xBF\\xF7\\xFE]+)$")

function Validator(input, expression, inputArrayNumber) {
  input.classList.remove('validated');
  input.classList.remove('invalidated');
  feedbackContainer[inputArrayNumber].classList.add('invisible')
  if(input.value == '') {
    feedbackContainer[inputArrayNumber].classList.remove('invisible');
    feedbackError[inputArrayNumber].innerText = 'Field is required.';
    return
  }
  if(expression.test(input.value)){
    input.classList.add('validated');
  }else {
    feedbackContainer[inputArrayNumber].classList.remove('invisible')
    feedbackError[inputArrayNumber].innerText = `${input.getAttribute('placeholder')} must be in valid format.`
    input.classList.add('invalidated');
  }
}

email.addEventListener('input', () => {
  Validator(email, emailRegExp, 2);
})

username.addEventListener("input", () => {
  Validator(username, usernameRegExp, 3);
  if(RegExp('[!@#$%^&*()+{}|":?><,;\\.]').test(username.value) == true){
    feedbackError[3].innerText = "Username cannot contain any special characters"
  }
  if(RegExp('[_]').test(username.value) == true){
    feedbackError[3].innerText = "Username cannot use underscores this way."
  }
  if(username.value.length < 3 && username.value.length > 0){
    feedbackError[3].innerText = "Password must be at least 3 characters in length."
  }
})

password.addEventListener("input", () => {
  Validator(password, passwordRegExp, 4);
  if(password.value.length < 8){
    feedbackError[4].innerText = "Password must be at least 8 characters in length."
  }
  if(RegExp('[!@#$%^&*()]').test(password.value) == false){
    feedbackError[4].innerText = "Password must contain a special character."
  }
  if(RegExp('[a-z]').test(password.value) == false){
    feedbackError[4].innerText = "Password must contain a lower-case letter."
  }
  if(RegExp('[A-Z]').test(password.value) == false){
    feedbackError[4].innerText = "Password must contain an upper-case letter."
  }
  if(RegExp('[0-9]').test(password.value) == false){
    feedbackError[4].innerText = "Password must contain a number."
  }
  if(password.value != confirmPassword.value){
    feedbackError[5].innerText = "Passwords must match."
  }
  if(password.value == ''){
    feedbackContainer[4].classList.remove('invisible');
    feedbackError[4].innerText = 'Field is required.';
  }
})

confirmPassword.addEventListener('input', () => {
  Validator(confirmPassword, passwordRegExp, 5);
  if(confirmPassword.value != password.value){
    feedbackError[5].innerText = "Passwords must match.";
   }
})

firstName.addEventListener('input', () => {
  Validator(firstName, firstNameRegExp, 6);
  if(RegExp('[0-9]').test(firstName.value) == true){
    feedbackError[6].innerText = "First name cannot contain numbers."
  }
  if(RegExp('[!@#$%^&*();,`]').test(firstName.value) == true){
    feedbackError[6].innerText = "First name cannot contain special characters."
  }
})

lastName.addEventListener('input', () => {
  Validator(lastName, lastNameRegExp, 7);
  if(RegExp('[0-9]').test(lastName.value) == true){
    feedbackError[7].innerText = "Last name cannot contain numbers."
  }
  if(RegExp('[!@#$%^&*();,`]').test(lastName.value) == true){
    feedbackError[7].innerText = "Last name cannot contain special characters."
  }
})

signupBtn.addEventListener('click', (e) => {
  
})


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
    feedbackError[inputArrayNumber].innerText = '';
  }else {
    feedbackContainer[inputArrayNumber].classList.remove('invisible')
    feedbackError[inputArrayNumber].innerText = `${input.getAttribute('placeholder')} must be in valid format.`
    input.classList.add('invalidated');
  }
}

function IsEmpty(input, errorArray, e){
  if(input.value == ''){
    feedbackError[errorArray].innerText = 'Field is required.'
    e.preventDefault()
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
    feedbackError[3].innerText = "Username must be at least 3 characters in length."
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
  if(password.value == ''){
    feedbackContainer[4].classList.remove('invisible');
    feedbackError[4].innerText = 'Field is required.';
  }
})

confirmPassword.addEventListener('input', () => {
  if(confirmPassword.value != password.value){
    feedbackContainer[5].classList.remove('invisible')
    feedbackError[5].innerText = "Passwords must match.";
   }
   else{
    feedbackError[5].innerText = "";
    feedbackContainer[5].classList.add('invisible')
   }
})

confirmPassword.addEventListener('focusout', () => {
  if(confirmPassword.value != password.value){
    feedbackError[5].innerText = "Passwords must match.";
    feedbackContainer[5].classList.remove('invisible')
    confirmPassword.classList.add('invalidated')
   }else{
    feedbackError[5].innerText = "";
    feedbackContainer[5].classList.add('invisible')
    confirmPassword.classList.add('validated')
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
    feedbackError.forEach((element) => {
      if(element.innerText != ''){
       e.preventDefault();
      }
    })

    IsEmpty(email, 2, e)
    IsEmpty(username, 3, e)
    IsEmpty(password, 4, e)
    IsEmpty(confirmPassword, 5, e)
    IsEmpty(firstName, 6, e)
    IsEmpty(lastName, 7, e)
})

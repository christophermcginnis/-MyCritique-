const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const AppError = require('./appError')
const morgan = require('morgan');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true}));

const validateRegistration = (req, res, next) => {
  const {email, username, password, confirmedPassword, firstname, lastname} = req.body;
  const emailExp = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$');
  const usernameExp = new RegExp('^(?=[a-zA-Z0-9_]{3,15}$)(?!.*[_]{2})[^_].*[^_]$');
  const passwordExp = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$`)
  const nameExp = new RegExp("^([^ \\x21-\\x26\\x28-\\x2C\\x2E-\\x40\\x5B-\\x60\\x7B-\\xAC\\xAE-\\xBF\\xF7\\xFE]+)$")
  const error = [];
  if(!emailExp.test(email)){
    error.push(" Email is not in valid format");
  }
  if(!usernameExp.test(username)){
    error.push(" Username is not in valid format");
  }
  if(!passwordExp.test(password)){
    error.push(" Password is not in valid format");
  }
  if(password != confirmedPassword){
    error.push(" Passwords must match");
  }
  if(!nameExp.test(firstname)){
    error.push(" First name is not in valid format");
  }
  if(!nameExp.test(lastname)){
    error.push("Last name is not in valid format");
  }
  if(error.length > 0){
    throw new AppError(error, 401)
  }
  next();
  }

app.use('/login', express.static('public'));
app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/register', validateRegistration, (req,res) => {
  res.redirect('login');
})

app.get('/home', (req, res) => {
  res.render('home')
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong."} = err;
  res.status(status).send(message);
})
  
app.listen(3000, () => {
  console.log("Server listening on port: 3000")
})
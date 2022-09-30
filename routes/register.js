const express = require('express');
const router = express.Router();
const AppError = require('../appError');
const wrapAsync = require('../utils/wrapAsync')
const User = require('../models/user')

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

router.get('/', (req, res) => {
    res.render('register')
  })
  
router.post('/', validateRegistration, wrapAsync(async(req,res) => {
  try {
    const {email, username, password, firstname, lastname} = req.body;
    const user = new User({email, username, firstname, lastname});
    const registeredUser = await User.register(user, password);
    req.flash('success', 'Thanks for creating an account!');
    res.redirect('/login');
  } catch (e) {
    req.flash('error', e.message)
    res.redirect('/register');
  }
  }))

router.use((req, res, next) => {
    throw new AppError("Error 404 NOT FOUND", 404)
  })
  
router.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong.", type = "Standard"} = err;
    res.status(status,).send(message);
    next(err);
  })

module.exports = router;
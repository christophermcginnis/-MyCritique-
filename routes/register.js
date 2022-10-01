const express = require('express');
const router = express.Router();
const AppError = require('../appError');
const wrapAsync = require('../utils/wrapAsync');
const User = require('../models/user');
const { validateRegistration } = require('../middleware')



router.get('/', (req, res) => {
    res.render('register')
  })
  
router.post('/', validateRegistration, wrapAsync(async(req,res) => {
  try {
    const {email, username, password, firstname, lastname} = req.body;
    const user = new User({email, username, firstname, lastname});
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
      if (err) return next();
      req.flash('success', 'Thanks for creating an account!');
      res.redirect('/home');
    })
   
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
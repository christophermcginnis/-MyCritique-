const express = require('express');
const router = express.Router();
const AppError = require('../appError');
const passport = require('passport');

router.get('/', (req, res) => {
    res.render('login')
  })

  router.post('/', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login'}), (req, res) => {
    res.redirect('/home')
  })

router.use((req, res, next) => {
    throw new AppError("Error 404 NOT FOUND", 404)
  })
  
router.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong.", type = "Standard"} = err;
    res.status(status).send(message);
    next(err);
  })

module.exports = router;
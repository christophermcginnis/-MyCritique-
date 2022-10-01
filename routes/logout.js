const express = require('express');
const router = express.Router();
const AppError = require('../appError');

router.get('/', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash('success', 'Logout Successful')
      res.redirect('/login');
    });
  });

router.use((req, res, next) => {
    throw new AppError("Error 404 NOT FOUND", 404)
  })
  
router.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong.", type = "Standard"} = err;
    res.status(status).send(message);
    next(err);
  })

module.exports = router;
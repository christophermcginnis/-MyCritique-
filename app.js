const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const AppError = require('./appError');
const engine = require('ejs-mate');
const morgan = require('morgan');
const passport = require('passport');
const LocalStategy = require('passport-local');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user')

const loginPage = require('./routes/login');
const registerPage = require('./routes/register');
const homePage = require('./routes/home');
const profilePage = require('./routes/profile');
const gamesPage = require('./routes/games');
const logoutPage = require('./routes/logout');

const app = express();

mongoose.connect('mongodb://localhost:27017/mycritique')
  .then(() => {
    console.log("Connection Open")
  })

  .catch(err => {
    console.log("ERROR:")
    console.log(err)
  })

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
const sessionConfig = {
  secret: 'thisshouldbeabettersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}
app.use(session(sessionConfig))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true}));

app.use('/login', express.static('public'))
app.use('/register', express.static('public'))
app.use('/home', express.static('public'))
app.use('/games', express.static('public'))
app.use('/profile', express.static('public'))
 
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.user = req.user;
  next();
})

app.use('/logout', logoutPage)
app.use('/login', loginPage)
app.use('/register', registerPage)
app.use('/home', homePage)
app.use('/profile', profilePage)
app.use('/games', gamesPage)

app.use((req, res, next) => {
  throw new AppError("Error 404 NOT FOUND", 404)
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong.", type = "Standard"} = err;
  res.status(status,).send(message);
  next(err);
})

app.listen(3000, () => {
  console.log("Server listening on port: 3000")
})
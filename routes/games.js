const express = require('express');
const router = express.Router();
const axios = require('axios')
const AppError = require('../appError');

router.get('/', (req, res) => {
    currentPage = 'Games'
    res.render('games', {page: currentPage})
})

router.get('/:id', (request, response) => {
  currentPage = 'Game'
  const id = request.params.id

  const config = {headers: {Accept: 'application/json', 'Client-ID': '8fe6uv07vt46g1nfr9t9iafznil012', Authorization: 'Bearer jlnmgwfhfexo93oexnlsq0ypiig1ur', 'Access-Control-Allow-Origin': '*'}}
  const data = `fields name,cover.url,involved_companies.publisher, involved_companies.developer,involved_companies.company.name, screenshots.url, rating; where id = ${id};)`
  axios.post('https://api.igdb.com/v4/games',data,config,(err, req, res, next) => {
  
  }).then((res) => {
    const result = res.data
    const game = result[0]
    const name = game.name
    const ratingdata = game.rating || 0
    rating = Math.round(ratingdata)
    let companies = game.involved_companies
    let developer = false
    let publisher = false
    let dev = null
    let pub = null
    while (developer == false && publisher == false && game.involved_companies != null){
      companies.forEach((e) => {
        if(e.developer == true){
          developer = true;
           dev = e.company.name
        }
        if(e.publisher == true){
          publisher = true;
           pub = e.company.name
        }
      })
    }
    cover_image_url = game.screenshots[0].url
    cover_image_prefix = cover_image_url.slice(0,36)
    cover_image_suffix = cover_image_url.slice(43)
    const gameCover = cover_image_prefix + 't_1080p' + cover_image_suffix
    
    const gameLogoString = game.cover.url
    game_logo_prefix = gameLogoString.slice(0,36)
    game_logo_suffix = gameLogoString.slice(43)
    const gameLogo = game_logo_prefix + 't_cover_big' + game_logo_suffix

    console.log(game)
    console.log(rating)
    response.render('game', {page: currentPage, name: name, game_cover: gameLogo, developer: dev, publisher: pub, cover_image: gameCover, rating: rating})
  }, 
  ).catch((err) => {
      console.log(err)
  });
  
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
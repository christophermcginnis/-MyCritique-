const express = require('express');
const router = express.Router();
const AppError = require('../appError');
const axios = require('axios')


router.get('/', (request, response) => {
  currentPage = 'Games'
  const config = {headers: {Accept: 'application/json', 'Client-ID': 'ze5xar99r5cxnnfqdkn89awd2u4isu', Authorization: 'Bearer xy9jqm8nsrjst0h6kzejtz5onzfrjg', 'Access-Control-Allow-Origin': '*'}}
  const data = `fields name, first_release_date, cover.url, screenshots.url; where first_release_date > 1650995200 & rating > 85; limit 1;)`
  axios.post('https://api.igdb.com/v4/games',data,config,(err, req, res, next) => {
  
  }).then((res) => {
    const result = res.data
    current_top_game = result[0].screenshots[0].url
    picture_prefix = current_top_game.slice(0,36)
    picture_suffix = current_top_game.slice(43)

    const top_game_cover = picture_prefix + 't_720p' + picture_suffix
    response.render('games', {page: currentPage, top_game_cover: top_game_cover})
  }, 
  ).catch((err) => {
      console.log(err)
  });
  
})


  router.get('/:id', (request, response) => {
    currentPage = 'Game'
    const id = request.params.id
  
    const config = {headers: {Accept: 'application/json', 'Client-ID': 'ze5xar99r5cxnnfqdkn89awd2u4isu', Authorization: 'Bearer xy9jqm8nsrjst0h6kzejtz5onzfrjg', 'Access-Control-Allow-Origin': '*'}}
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
      if (game.screenshots == undefined) {
        cover_image_url = 'images/placeholder.jpeg'
        const gameCover = 'images/placeholder.jpeg'
        const gameLogoString = game.cover.url
        game_logo_prefix = gameLogoString.slice(0,36)
        game_logo_suffix = gameLogoString.slice(43)
        const gameLogo = game_logo_prefix + 't_cover_big' + game_logo_suffix
        response.render('game', {page: currentPage, name: name, game_cover: gameLogo, developer: dev, publisher: pub, cover_image: gameCover, rating: rating})
      }else {
        cover_image_url = game.screenshots[0].url

        cover_image_prefix = cover_image_url.slice(0,36)
        cover_image_suffix = cover_image_url.slice(43)
        const gameCover = cover_image_prefix + 't_1080p' + cover_image_suffix

        const gameLogoString = game.cover.url
        game_logo_prefix = gameLogoString.slice(0,36)
        game_logo_suffix = gameLogoString.slice(43)
        const gameLogo = game_logo_prefix + 't_cover_big' + game_logo_suffix
        response.render('game', {page: currentPage, name: name, game_cover: gameLogo, developer: dev, publisher: pub, cover_image: gameCover, rating: rating})
      }
     
  
      console.log(game)
      console.log(rating)
      
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
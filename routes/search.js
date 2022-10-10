const express = require('express');
const router = express.Router();
const AppError = require('../appError');
const axios = require('axios');
const regexp = require('cors-anywhere/lib/regexp-top-level-domain');


router.get('', (request, response) => {
    const duplicateRegExp = new RegExp('^(/--)$')
    currentPage = 'Search'
    const search_query = request.query.q
    const config = {headers: {Accept: 'application/json', 'Client-ID': '8fe6uv07vt46g1nfr9t9iafznil012', Authorization: 'Bearer jlnmgwfhfexo93oexnlsq0ypiig1ur', 'Access-Control-Allow-Origin': '*'}}
  const data = `fields name, cover.url, slug; search "${search_query}"; limit 15;)`
  axios.post('https://api.igdb.com/v4/games',data,config,(err, req, res, next) => {
  
  }).then((res) => {
  const result = res.data
  const collection = result[0].collection
  searchResults_nocover = []
  searchResults_cover = []
    console.log(result[0])
  result.forEach(element => {
    string = element.slug
    if (element.cover == undefined){
        searchResults_nocover.push(element)
    }

    else if(RegExp('--').test(string)) {
        searchResults_nocover.push(element)
    } 

    else {
        const gameLogoString = element.cover.url
        game_logo_prefix = gameLogoString.slice(0,36)
        game_logo_suffix = gameLogoString.slice(43)
        element.gameLogo = game_logo_prefix + 't_cover_big' + game_logo_suffix
        searchResults_cover.push(element)
    }
    
  });

  response.render('search', {page: currentPage, image_covers: searchResults_cover})
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
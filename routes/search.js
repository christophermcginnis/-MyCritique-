const express = require('express');
const router = express.Router();
const AppError = require('../appError');
const axios = require('axios');
const regexp = require('cors-anywhere/lib/regexp-top-level-domain');


router.get('/games', (request, response) => {
    const duplicateRegExp = new RegExp('^(/--)$')
    currentPage = 'Search'
    const search_query = request.query.q
    const config = {headers: {Accept: 'application/json', 'Client-ID': 'ze5xar99r5cxnnfqdkn89awd2u4isu', Authorization: 'Bearer xy9jqm8nsrjst0h6kzejtz5onzfrjg', 'Access-Control-Allow-Origin': '*'}}
  const data = `fields name, cover.url, slug; search "${search_query}"; limit 20;)`
  axios.post('https://api.igdb.com/v4/games',data,config,(err, req, res, next) => {
  
  }).then((res) => {
  const result = res.data
  let name = 'Not available'
  searchResults_nocover = []
  searchResults_cover = []
  console.log(result)
  result.forEach(element => {
    name = element.name || 'Not Available'
    string = element.slug
    id = element.id
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

  response.render('gamesearch', {searchQ: search_query,page: currentPage, image_covers: searchResults_cover, name: name, id: id, slug: string})
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
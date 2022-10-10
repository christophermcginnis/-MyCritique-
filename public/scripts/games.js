/*const config = {headers: {Accept: 'application/json', 'Client-ID': '8fe6uv07vt46g1nfr9t9iafznil012', Authorization: 'Bearer jlnmgwfhfexo93oexnlsq0ypiig1ur', 'Access-Control-Allow-Origin': '*'}}
const data = 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres.name,hypes,involved_companies.developer,involved_companies.publisher,involved_companies.company.slug,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites; search "Rust"; limit 1;)'
axios.post('http://localhost:8080/https://api.igdb.com/v4/games',data,config,(err, req, res, next) => {

}).then((res) => {
const result = res.data
company1 = result[0].involved_companies[0]
company2 = result[0].involved_companies[1]
if(company1.developer == false){
    developer = company2.company.slug
    publisher = company1.company.slug
}else {
    developer = company1.company.slug
    publisher = company2.company.slug
}
console.log(result)

console.log(developer)
console.log(publisher)
}, 
).catch((err) => {
    console.log(err)
});

*/

const API_KEY = "cfc3b1b7cbb15bfa9b87733756fe2e04"
const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=cfc3b1b7cbb15bfa9b87733756fe2e04&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
const IMG_PATH = "https://image.tmdb.org/t/p/w500/"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=cfc3b1b7cbb15bfa9b87733756fe2e04&page=1"
const FILTER  = "https://api.themoviedb.org/3/genre/movie/list?api_key=cfc3b1b7cbb15bfa9b87733756fe2e04"

let listMovies = document.getElementById("list")

let fetchmovieAPI = async(inputSearch) => {
    let url = API_URL
    if(inputSearch){
        url = inputSearch
    }
    let response = await fetch(url)
    let movies = await response.json()
    listMovies.innerHTML = ``
    movies.results.forEach(el => {
        listMovies.innerHTML += 
        `<div class="col mb-4 d-flex justify-content-center card-movies" id="card">
        <div class="card" style="width: 18rem;">
          <img src=${IMG_PATH + el.backdrop_path} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title movie-title">${el.title}</h5>
            <div class="data d-flex justify-content-between">
              <p class="release-date">${el.release_date}</p>
              <p class="card-text rating">${el.vote_average}</p>
            </div>            
          </div>
        </div>`

    });
}

fetchmovieAPI()

let search = document.querySelector(".cari-film")
let form = document.getElementById("form")

search.addEventListener('input', async function(e) {
    e.preventDefault()
    let inputSearch = search.value 

    if(inputSearch){
        console.log(inputSearch)
        fetchmovieAPI(SEARCH_API+`&query=`+inputSearch)
    }else{
        fetchmovieAPI()
    }
})



const url = "https://yts.lt/api/v2/list_movies.json"
async function fetchMovies(){
    const res = await fetch('https://yts.lt/api/v2/list_movies.json?sort_by=year');
    const data = await res.json();
    moviefirst = data.data.movies["0"].title;
    ratingfirst = data.data.movies["0"].rating;
console.log(data.data.movies);
/* if (rating>3){
    document.getElementById('f').innerHTML = movies;
} else {
    document.getElementById('f').innerHTML = "Rating low";
} */

for (i = 0; i < data.data.movies.length; i++) {
    
    if (data.data.movies[i].rating>2){
        document.getElementById('f').innerHTML += data.data.movies[i].title;
    } else {
        document.getElementById('f').innerHTML = "Rating low";
    }
    
  }

}
fetchMovies(); 

// console.log(data.data.movies["0"]);

let movieName = document.querySelector("#movie-name");
let searchBtn = document.querySelector("#search-btn");
let results = document.querySelector("#result");

function getData() {
    let movieNameData = movieName.value;
    let url = `http://www.omdbapi.com/?t=${movieNameData}&apikey=${api}`;
    
    if(movieNameData <= 0) {
        results.innerHTML = `<h2 class="error">Please type a movie name to show results</h2>`;
    } else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data.Title)
            console.log(data.Actors)
            console.log(data.Year)
            console.log(data.Rated)
            console.log(data.Genre)
            console.log(data.Runtime)
            console.log(data.Poster)
            console.log(data.Director)
            console.log(data.Writer)
            console.log(data.Plot)
            console.log(data.Released)
            console.log(data.imdbRating)
            console.log(data.Country)

            results.innerHTML = `
                <div class="info">
                    <div class="image">
                        <img src=${data.Poster} class="poster">
                    </div>
                    <div class="information">
                        <div class="title">${data.Title}</div>
                        <div class="rating">Rating: ${data.imdbRating} <img src="https://staging.svgrepo.com/show/111254/star.svg"> </div>
                        <div class="release">Release date: <br>${data.Released} </div>
                        <div class="genre">${data.Genre}</div>
                        <div class="country">Country: ${data.Country}</div>
                        <div class="runtime">Runtime: ${data.Runtime}</div>
                        <div class="director">Director/s: ${data.Director}</div>
                        <div class="actors">Actors: ${data.Actors}</div>
                        <div class="write">Writer/s: ${data.Writer}</div>
                    </div>
                </div>
            `
        });
    }
};

window.addEventListener("load", getData);
searchBtn.addEventListener("click", () => {
    getData();
})

window.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        getData();
    }
})
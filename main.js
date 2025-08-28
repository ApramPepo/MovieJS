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
                    <img src=${data.Poster} class="poster">
                    <div class="title">${data.Title}</div>
                    <div class="year">Release date: ${data.Year}</div>
                </div>
            `
        });
    }
};

window.addEventListener("load", getData);
searchBtn.addEventListener("click", () => {
    getData();
})
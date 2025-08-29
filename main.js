let movieName = document.querySelector("#movie-name");
let searchBtn = document.querySelector("#search-btn");
let results = document.querySelector("#result");

function getData() {
    let movieNameData = movieName.value;
    let url = `https://www.omdbapi.com/?t=${movieNameData}&apikey=${api}`;
    
    if(movieNameData <= 0) {
        results.innerHTML = `<h2 class="error">Please type a movie name to show results</h2>`;
    } else {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {

            results.innerHTML = `
                <div class="info">
                    <div class="image">
                        <img src=${data.Poster} class="poster">
                    </div>
                    <div class="information">
                        <div class="title">${data.Title}</div>
                        <div class="age">${data.Rated}</div>
                        <div class="rating">Rating: ${data.imdbRating}/10 <img src="https://staging.svgrepo.com/show/111254/star.svg"> </div>
                        <div class="release">Release date: <br>${data.Released} </div>
                        <div class="genre">
                        <div>${data.Genre}</div>
                        </div>
                        <div class="country">Country: ${data.Country}</div>
                        <div class="runtime">Runtime: ${data.Runtime}</div>
                        <div class="director">Director/s: ${data.Director}</div>
                        <div class="actors">Actors: ${data.Actors}</div>
                        <div class="write">Writer/s: ${data.Writer}</div>
                    </div>
                </div>
                <br>
                <div class="plot">${data.Plot}</div>

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
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
            console.log(data)
        });
    }
};

window.addEventListener("load", getData);
searchBtn.addEventListener("click", () => {
    getData();
})

let imgPath = document.createElement("img")
let target = document.getElementById("imgContent")
target.append(imgPath)
let loader = document.getElementById("loader")
let movieData = document.getElementById("data")

//Function starts here

async function searchMovie(){
    let movieName = document.getElementById("searchBar").value;
    let Title = document.getElementById("Title");
    let Released = document.getElementById("Released");
    let Runtime = document.getElementById("Runtime");
    let Genre = document.getElementById("Genre");
    let Director = document.getElementById("Director");
    let Writer = document.getElementById("Writer");
    let Actors = document.getElementById("Actors");
    let Plot = document.getElementById("Plot");
    let Language = document.getElementById("Language");
    let Country = document.getElementById("Country");
    let Awards = document.getElementById("Awards");
    let imdbRating = document.getElementById("imdbRating");
    let BoxOffice = document.getElementById("BoxOffice");
    loader.classList.add('loader')


    let fetchData = await fetch(`https://www.omdbapi.com/?apikey=61e576a4&t=${movieName}`);
    let data = await fetchData.json();

    Title.innerText = `Title : ${data.Title}`;
    Released.innerText = `Released : ${data.Released}`;
    Runtime.innerText = `Runtime : ${data.Runtime}`;
    Genre.innerText = `Genre : ${data.Genre}`;
    Director.innerText = `Director : ${data.Director}`;
    Writer.innerText = `Writer : ${data.Writer}`;
    Actors.innerText = `Actors : ${data.Actors}`;
    Plot.innerText = `Plot : ${data.Plot}`;
    Language.innerText = `Language : ${data.Language}`;
    Country.innerText = `Country : ${data.Country}`;
    Awards.innerText = `Awards : ${data.Awards}`;
    imdbRating.innerText = `Rating : ${data.imdbRating}/10`;
    BoxOffice.innerText = `BoxOffice : ${data.BoxOffice}`;
    imgPath.src = data.Poster;
    imgPath.style.visibility = "visible"
    loader.classList.remove('loader')
    
}
// this api is used to provide the most popular movies
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fb205d94d02ed30871de31d057c6fe75&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// this api is used to provide most serached movies.
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=fb205d94d02ed30871de31d057c6fe75&query=";


    const moiveBox = document.querySelector("#movie-box")
    const getMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        showMovies(data)
    }
    getMovies(APIURL);
    
    
    const showMovies = (data) => {
        moiveBox.innerHTML = "";
        data.results.forEach(
            (result) => {
                const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
                const box = document.createElement("div")
                box.classList.add("box")
                box.innerHTML = `
                    <img src="${imagePath}" alt="" />
                    <div class="overlay">
                        <div class="title"> 
                            <h2> ${result.original_title}  </h2>
                            <span> ${result.vote_average} <span>
                        </div>
                        <h3>Overview:</h3>
                        <p> 
                            ${result.overview}
                        </p>
                     </div>
                `
                moiveBox.appendChild(box)
            }
        )
    }

    document.querySelector("#search").addEventListener(
        "keyup",
        function (event) {
            if (event.target.value != "") {
                getMovies(SEARCHAPI + event.target.value)
            } else {
                getMovies(APIURL);
            }
        }
    )
// initial call of function when page gets load
getMovies(APIURL);
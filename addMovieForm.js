root.innerHTML += `
    <main>
    <div class="imageWrapper">Movie Tracker</div>
    <div class="container">
    <div class="leftItem">
    <form id="add-movie">
        <input type="text" placeholder=" search for a title..." name="title" id="title"/>
        <input type="submit" value="add"/>
    </form>
    <div class="buttons"></div>
    </div>
    </div>
    </main>

`

function addMovieFunctionality() {
    const form = document.querySelector("#add-movie");
    form.addEventListener("submit", function(event) {
        console.log(event);
        event.preventDefault();
        let movieTitle;
        if (event.target.title.value.indexOf(' ') >= 0) {
            let splitTitle = event.target.title.value.split(' ');
            movieTitle = splitTitle.join('+');
            console.log(movieTitle);
        } else {
            movieTitle = event.target.title.value;
            console.log(movieTitle);
        }
        const url = `https://www.omdbapi.com/?apikey=fced3ba8&t=${movieTitle}`;
        console.log(url)
        fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong...try again');
            }

        }).then(data => {
            console.log(data);

            const newMovie = {
                'title': data.Title,
                'description': data.Plot,
                'image': data.Poster,
                'year': data.Year,
                'rating': data.imdbRating + '/10',
                'addedDate': `${new Date().toISOString().slice(0, 10)}`
            };

            console.log(newMovie.image);

            if(newMovie.image == "N/A") {
                newMovie.image = "https://images.wallpaperscraft.com/image/no_image_inscription_text_151413_1920x1080.jpg";
            }

            console.log(newMovie.image);

            const localStorageMovies = getMovies();
            localStorageMovies.push(newMovie);
            setMovies(localStorageMovies);

            renderMovieList(localStorageMovies);
            
        });

    });
}

window.addEventListener("load", addMovieFunctionality);
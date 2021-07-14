const container = document.querySelector(".container");
container.innerHTML += `
    <div class="rightItem">
    <section id="yourMovies">
    <h2>Your Movies:</h2>
    <ul id="movie-list"></ul>
    <section>
    </div>
`;

function renderMovieList(movies) {
    const movieList = document.querySelector("#movie-list");
    movieList.innerHTML = '';
    movies.forEach(function(element) {
        const movie = new Movie(element.title, element.description, element.image, element.year, element.rating, element.addedDate);
        movie.renderMovie();
    });
}
const root = document.querySelector("#root");

const movies = [
    {
    'title': 'Spider-Man: Into the Spider-Verse',
    'description': 'Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.',
    'image': 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg',
    'year': 2018,
    'rating': '8.4/10',
    'addedDate': '2021-06-05'
}, {
    'title': 'Marriage Story',
    'description': "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    'image': 'https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg',
    'year': 2019,
    'rating': '7.9/10',
    'addedDate': '2021-06-12'
}, {
    'title': 'Pulp Fiction',
    'description': "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    'image': 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    'year': 1994,
    'rating': '8.9/10',
    'addedDate': '2021-06-17'
}];

console.log(movies);

function getMovies() {
    const localStorageMovies = localStorage.getItem("movies");
    console.log(localStorageMovies);
    const parsedMovies = JSON.parse(localStorageMovies);
    return parsedMovies;
}

function setMovies(movies) {
    const stringifiedMovies = JSON.stringify(movies);
    localStorage.setItem("movies", stringifiedMovies);
}

if(getMovies() == null) {
    setMovies(movies);
}

function startRendering() {
    const localStorageMovies = getMovies();
    renderMovieList(localStorageMovies);
}

window.addEventListener("load", startRendering);


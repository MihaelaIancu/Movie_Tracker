// left = document.querySelector(".leftItem");
buttons.innerHTML += `
    <button id="sort-by-rating">sort by rating</button>
`;

function sortMoviesByRating(sortType) {
    switch(sortType) {
        case "SORT_BY_RATING":
            let localStorageMovies = getMovies();
            let sortedArray = localStorageMovies.sort((elem1, elem2) => {
                if (elem1.rating < elem2.rating) {
                    return -1;
                } else if (elem1.rating > elem2.rating) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setMovies(sortedArray);
            renderMovieList(sortedArray);
            break;
    }
}

function addSortingByRatingFunctionality() {
    const sortByRating = document.querySelector('#sort-by-rating');
    sortByRating.addEventListener('click', function() {
        sortMoviesByRating('SORT_BY_RATING');
    });
}
window.addEventListener('load', addSortingByRatingFunctionality);
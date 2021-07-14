buttons.innerHTML += `
    <button id="sort-by-year">sort by year</button>
`;

function sortMoviesByYear(sortType) {
    switch(sortType) {
        case "SORT_BY_YEAR":
            let localStorageMovies = getMovies();
            let sortedArray = localStorageMovies.sort((elem1, elem2) => {
                if (elem1.year < elem2.year) {
                    return -1;
                } else if (elem1.year > elem2.year) {
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

function addSortingByYearFunctionality() {
    const sortByYear = document.querySelector('#sort-by-year');
    sortByYear.addEventListener('click', function() {
        sortMoviesByYear('SORT_BY_YEAR');
    });
}
window.addEventListener('load', addSortingByYearFunctionality);
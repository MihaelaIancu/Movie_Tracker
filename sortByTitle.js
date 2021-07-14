const buttons = document.querySelector(".buttons");
buttons.innerHTML += `
    <button id="sort-by-name">sort by title</button>
`;


function sortMoviesByTitle(sortType) {
    switch(sortType) {
        case "SORT_BY_TITLE":
            let localStorageMovies = getMovies();
            let sortedArray = localStorageMovies.sort((elem1, elem2) => {
                if (elem1.title < elem2.title) {
                    return -1;
                } else if (elem1.title > elem2.title) {
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

function addSortingByTitleFunctionality() {
    const sortByTitle = document.querySelector('#sort-by-name');
    sortByTitle.addEventListener('click', function() {
        sortMoviesByTitle('SORT_BY_TITLE');
    });

}
window.addEventListener('load', addSortingByTitleFunctionality);
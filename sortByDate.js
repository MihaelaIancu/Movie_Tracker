// left = document.querySelector(".leftItem");
buttons.innerHTML += `
    <button id="sort-by-date">sort by date</button>
`;

function sortMoviesByDate(sortType) {
    switch(sortType) {
        case "SORT_BY_DATE":
            let localStorageMovies = getMovies();
            let sortedArray = localStorageMovies.sort((elem1, elem2) => {
                if (elem1.addedDate < elem2.addedDate) {
                    return -1;
                } else if (elem1.addedDate > elem2.addedDate) {
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

function addSortingByDateFunctionality() {
    const sortByDate = document.querySelector('#sort-by-date');
    sortByDate.addEventListener('click', function() {
        sortMoviesByDate('SORT_BY_DATE');
    });
}
window.addEventListener('load', addSortingByDateFunctionality);
// left = document.querySelector(".leftItem");
buttons.innerHTML += `
    <button id="remove">reset your list</button>
`;
let movieList = document.querySelector("#movie-list");

function removeFunctionality() {
    const removeBtn = document.querySelector('#remove');
    removeBtn.addEventListener('click', function() {
            localStorage.removeItem("movies", movies);  
            movieList.innerHTML = '';
            setTimeout(location.reload.bind(location), 500);
    });
}
window.addEventListener('load', removeFunctionality);
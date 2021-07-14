class Movie {
    constructor(title, description, image, year, rating, addedDate) {
        this.title = title;
        this.description = description;
        this.image = image;
        this.year = year;
        this.rating = rating;
        this.addedDate = addedDate;
    }
    renderMovie() {
        const movieList = document.querySelector('#movie-list');
        movieList.innerHTML += `
            <li class="movie">
                <p id="movieTitle">${this.title}</p>
                <br>
                <p class="titleDetails">${this.description}</p>
                <p class="titleDetails">Year: ${this.year}</p>
                <p class="titleDetails">Rating: ${this.rating}</p>
                <p class="titleDetails">Added on: ${this.addedDate}</p>
                <img src="${this.image}" alt="movieImg" width="100px">
            </li>
        `;
    }
}
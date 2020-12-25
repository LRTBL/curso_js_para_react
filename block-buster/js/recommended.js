import movies from "./movies.js";
import { renderMovieList } from "./render.js";
const $button = document.querySelector("#recommended");

$button.addEventListener("click", () => {
  renderMovieList(setRecomendedeMovies(movies));
});

function setRecomendedeMovies(movies) {
  return movies.map((movie) => {
    return { ...movie, recommended: movie.vote_average >= 7 };
  });
}

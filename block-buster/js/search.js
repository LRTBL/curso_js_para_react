import movies from "./movies.js";
import { renderMovieList } from "./render.js";

const $form = document.querySelector("#search-form");
$form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const query = formData.get("title");
  if (!query) return alert("No encontramos tu película");
  const movies = searchMovie(query);
  if (movies) return renderMovieList(movies);
  return alert("No encontramos tu película");
});

function filterByTitle(inputText) {
  // find
  // filter
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(inputText.toLowerCase());
  });
}

function filterById(inputText) {
  return movies.find((movie) => {
    return movie.id === parseInt(inputText, 10);
  });
}

function searchMovie(query) {
  if (isNaN(query)) return filterByTitle(query);
  return [filterById(query)];
}

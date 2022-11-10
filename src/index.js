
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";
import { initSortable } from "./plugins/init_sortable";


window.Stimulus = Application.start();
// responsavel pot importar e expoxtar nosso codigo stimulus
const context = require.context("./controllers", true, /\.js$/);
// eslint-disable-next-line no-undef
Stimulus.load(definitionsFromContext(context));

initSortable();

// const list = document.querySelector("#results");

// const insertMovies = (data) => {
//   data.Search.forEach((result) => {
//     const movieTag = `<li class="list-group-item border-0">
//     <img src="${result.Poster}" alt="" width="100">
//     </li>`;
//     list.insertAdjacentHTML("beforeend", movieTag);
//   });
// };

// const fetchMovies = (query) => {
//   // fetch(`https://www.omdbapi.com/?s=${query}&apikey=8986a3f4`)
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=8986a3f4`)
//     .then(response => response.json())
//     .then(data => insertMovies(data));
// };

// fetchMovies("harry potter"); // on 1st page load

// const form = document.querySelector("#search-form");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   list.innerHTML = "";
//   const input = document.querySelector("#search-input");
//   fetchMovies(input.value);
// });

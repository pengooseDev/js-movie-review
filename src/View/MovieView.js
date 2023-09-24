import { MovieComponent } from '../components/MovieComponent';
import { SELECTOR } from '../constants';

export class MovieView {
  #movieList = document.querySelector(SELECTOR.ITEM_LIST);

  constructor() {}

  createMovieComponent(amount) {
    const components = Array(amount)
      .fill(null)
      .map(() => new MovieComponent());

    components.forEach((v) => this.#movieList.appendChild(v.component));

    return components;
  }

  clearMovies() {
    this.#movieList.innerHTML = '';
  }

  hideMovieFetchButton() {
    const fetchButton = document.querySelector(SELECTOR.FETCH_BUTTON);

    fetchButton.classList.remove('display');
    fetchButton.classList.add('hidden');
  }

  renderMovieFetchButton() {
    const fetchButton = document.querySelector(SELECTOR.FETCH_BUTTON);

    fetchButton.classList.remove('hidden');
    fetchButton.classList.add('display');
  }

  getSearchTerm() {
    return document.querySelector(SELECTOR.SEARCH_INPUT);
  }
}

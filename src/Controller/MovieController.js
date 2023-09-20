import { MovieService } from '../Models/Movie/MovieService';
import { Fetcher } from '../Models/Fetcher';
import { View } from '../View/View';
import { EVENT } from '../constants';

export class MovieController {
  #service;
  #view = new View();
  #fetcher = new Fetcher();
  #searchTerm = '';

  constructor() {
    this.#service = new MovieService(this.#fetcher);
    this.#initial();
  }

  async #initial() {
    this.#setupFetchButtonEvent();
    this.#setupSearchButtonEvent();
    this.#getMovie();
  }

  /* BindEvent */
  #setupFetchButtonEvent() {
    const fetchButton = document.querySelector('#movie-fetch-button');
    fetchButton.addEventListener(EVENT.CLICK, async () => {
      this.#getMovie();
    });
  }

  #setupSearchButtonEvent() {
    const searchButton = document.querySelector('#movie-search-button');
    const searchInput = document.querySelector('#movie-search-input');

    searchButton.addEventListener(EVENT.CLICK, async () => {
      this.#view.clearMovies();
      this.#service.resetPage();
      this.#searchTerm = searchInput.value.trim();
      this.#getMovie();
    });
  }

  #fetcherIsLoading({ onLoading, onLoadEnd }) {
    this.#fetcher.eventListener.addEventListener(
      EVENT.LOADING_STATE_CHANGE,
      ({ detail: { isLoading } }) => {
        isLoading ? onLoading() : onLoadEnd();
      }
    );
  }

  async #getMovie() {
    const components = this.#view.createMovieComponent(20);
    this.#optionalRender(components);

    const movies = await this.#service.fetchMovieBranch(this.#searchTerm);
    if (movies.length < 20) this.#view.hideMovieFetchButton();
    if (movies.length === 20) this.#view.renderMovieFetchButton();

    this.#optionalRender(components, movies);
  }

  #optionalRender(components, movies = []) {
    components.forEach((component, index) => {
      this.#fetcherIsLoading({
        onLoading: () => {
          component.showSkeleton();
        },
        onLoadEnd: () => {
          component.render(movies[index]);
        },
      });
    });
  }
}

import './styles/index.css';
// import logo from './assets/logo.png';
import { MovieList } from './Components';

class App {
  constructor() {
    this.init();
  }

  init() {
    const movieList = document.querySelector('.movie-list');

    if (movieList)
      new MovieList({
        $parent: movieList as HTMLElement,
        state: {
          movie: [1, 2, 3],
        },
      });
  }
}

new App();

// document.querySelector("img[src='./src/assets/logo.png']").src = logo;

import './styles/index.css';
// import logo from './assets/logo.png';
import { Component } from './Components';

class App {
  constructor() {
    this.init();
  }

  init() {
    const movieList = document.querySelector('.movie-list');

    if (movieList) new Component(movieList as HTMLElement);
  }
}

new App();

// document.querySelector("img[src='./src/assets/logo.png']").src = logo;

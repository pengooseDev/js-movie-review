import './styles/index.css';
// import logo from './assets/logo.png';
import { Component } from './Components';

class App {
  constructor() {
    this.init();
  }

  init() {
    const app = document.querySelector('#app');

    if (app) new Component(app as HTMLElement);
  }
}

new App();

// document.querySelector("img[src='./src/assets/logo.png']").src = logo;
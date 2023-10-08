import './styles/index.css';
// import logo from './assets/logo.png';
import { MovieController } from './Controller';
import { Component } from './Components';

class App {
  private controller = new MovieController();
}

new App();

// document.querySelector("img[src='./src/assets/logo.png']").src = logo;

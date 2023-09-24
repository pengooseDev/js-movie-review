import './styles/index.css';
import logo from './assets/logo.png';
import { MovieController } from './Controller/MovieController';

const initializeApp = () => {
  new MovieController();

  document.querySelector("img[src='./src/assets/logo.png']").src = logo;
};

initializeApp();

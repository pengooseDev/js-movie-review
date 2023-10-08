export class Component {
  $root = document.createElement('div');
  $parent;
  state;

  constructor(parent) {
    this.$parent = parent;
    this.setup();
    this.#render();
  }

  setup() {}

  template() {
    return 'defaultTemplate';
  }

  #render() {
    this.$root.innerHTML = this.template();
    this.$parent.appendChild(this.$root);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.#render();
  }

  addEvent(eventName, callback) {
    this.$root.addEventListener(eventName, callback);
  }

  removeEvent(eventName) {
    this.$root.removeEventListener(eventName);
  }
}

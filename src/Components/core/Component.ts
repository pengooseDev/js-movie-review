interface State {
  [key: string]: any;
}

interface Props {
  [key: string]: any;
}

export class Component {
  $root = document.createElement('div');

  constructor(
    private $parent: HTMLElement,
    private state: State = {},
    private props: Props = {}
  ) {
    this.setup();
    this.render();
  }

  setup() {}

  template() {
    return 'defaultTemplate';
  }

  private render() {
    this.$root.innerHTML = this.template();
    this.$parent.appendChild(this.$root);
  }

  setState(newState: any) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEvent(eventName: any, callback: any) {
    this.$root.addEventListener(eventName, callback);
  }

  removeEvent(eventName: any, callback: any) {
    this.$root.removeEventListener(eventName, callback);
  }
}

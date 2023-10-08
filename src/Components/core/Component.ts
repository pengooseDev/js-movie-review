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
    this.render();
  }

  template(): string {
    return 'DEFAULT_TEMPLATE';
  }

  private render() {
    this.$root.innerHTML = this.template();
    this.$parent.appendChild(this.$root);
  }

  setState(newState: State) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}

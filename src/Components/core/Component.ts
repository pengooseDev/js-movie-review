interface State {
  [key: string]: any;
}

interface Props {
  [key: string]: any;
}

interface ComponentOptions {
  $parent: HTMLElement;
  props?: Props;
  state?: State;
}

export class Component {
  private $parent;
  private props;
  $root = document.createElement('div');
  state: State;

  constructor({ $parent, props = {}, state = {} }: ComponentOptions) {
    this.$parent = $parent;
    this.props = props;
    this.state = state;
    this.render();
    this.bindEvent();
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

  bindEvent() {}
}

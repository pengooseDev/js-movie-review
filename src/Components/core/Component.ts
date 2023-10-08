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

type EventProps = {
  element: Element;
  type: string;
  listener: EventListenerOrEventListenerObject;
};

type EventListeners = Array<EventProps>;

export class Component {
  private $parent;
  private props;
  private eventListeners: EventListeners = [];
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

  addEvent({ element, type, listener }: EventProps) {
    element.addEventListener(type, listener);
    this.eventListeners.push({ element, type, listener });
  }

  removeEvent({ element, type, listener }: EventProps) {
    element.removeEventListener(type, listener);
    this.eventListeners = this.eventListeners.filter(
      (eventListener) =>
        eventListener.element !== element ||
        eventListener.type !== type ||
        eventListener.listener !== listener
    );
  }

  clearAllEvents() {
    this.eventListeners.forEach(({ element, type, listener }: EventProps) => {
      element.removeEventListener(type, listener);
    });

    this.eventListeners = [];
  }
}

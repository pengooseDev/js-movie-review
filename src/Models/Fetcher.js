import { ERROR, EVENT } from '../constants';

export class Fetcher {
  eventListener = new EventTarget();

  async get(endpoint, config = {}) {
    const { method, headers } = config;

    this.#setLoading(true);

    const response = await fetch(endpoint, {
      method,
      headers,
    });

    if (!response.ok) throw new Error(ERROR.HTTP(response.status));

    this.#setLoading(false);

    return await response.json();
  }

  #setLoading(loadingState) {
    this.eventListener.dispatchEvent(
      new CustomEvent(EVENT.LOADING_STATE_CHANGE, {
        detail: { isLoading: loadingState },
      })
    );
  }
}

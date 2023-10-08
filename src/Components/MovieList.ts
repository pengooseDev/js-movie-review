import { Component } from './core/Component';

export class MovieList extends Component {
  template(): string {
    const { movie } = this.state;
    const movieList = movie
      .map((movie: number) => `<li>${movie}</li>`)
      .join('');

    console.log(movieList);
    const btn = `<button class='add'>Add</button>`;

    return `
    <section>
        <div>영화 리스트</div>
        <ul>${movieList}</ul>
        ${btn}
    </section>
    `.trim();
  }

  bindEvent() {
    this.$root?.addEventListener('click', ({ target }) => {
      //@ts-ignore
      if (target?.classList?.contains('add')) this.AddList();
    });
  }

  AddList() {
    this.setState({
      ...this.state,
      movie: [...this.state.movie, this.state.movie.length + 1],
    });
  }
}

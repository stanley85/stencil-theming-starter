import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  @Prop({reflect: true}) brand: string = "default";

  toggleBrandProperty() {
    this.brand = this.brand === 'default' ? 'brandtwo' : 'default';
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          I am main component having the brand property
        </p>
        <app-test>I am child component consuming the styles</app-test>
        <button onClick={() => this.toggleBrandProperty()}>Toggle brand</button>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}

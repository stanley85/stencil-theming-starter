import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-test',
  styleUrl: 'app-test.scss',
  shadow: true
})
export class AppTest {

  render() {    
    return (
      <div class="app-test">
        I am child consuming the style
      </div>
    );
  }
}

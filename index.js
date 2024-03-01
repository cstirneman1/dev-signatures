import { LitElement,html,css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class HelloWorld extends LitElement{
   render() {
    return html`<p>Hello, world!</p>`;
   }
}
customElements.define('my-element', HelloWorld);
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
    static styles = css`
    :host {
      display: block;
      background-color: #f0f0f0;
      padding: 1rem;
    }
    nav a {
      margin-right: 1rem;
    }
  `;

    render() {
        return html`
      <header>
        <h1>Task Management App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/tasks">Tasks</a>
          <a href="/about">About</a>
        </nav>
      </header>
    `;
    }
}
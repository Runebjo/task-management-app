import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-view')
export class HomeView extends LitElement {
    render() {
        return html`
      <h2>Welcome to Task Management</h2>
      <p>This is a simple task management application.</p>
    `;
    }
}
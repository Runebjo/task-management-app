import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/task-list';
import '../components/task-form';

@customElement('tasks-view')
export class TasksView extends LitElement {
    static styles = css`
    :host {
      display: block;
      padding: 1rem;
    }
  `;

    render() {
        return html`
      <h2>Tasks</h2>
      <task-form></task-form>
      <task-list></task-list>
    `;
    }
}
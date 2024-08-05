import { html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { MobxLitElement } from '@adobe/lit-mobx';
import { taskStore } from '../store/task-store';
import './task-item';

@customElement('task-list')
export class TaskList extends MobxLitElement {
    static styles = css`
    ul {
      list-style-type: none;
      padding: 0;
    }
    .summary {
      margin-top: 1rem;
      font-style: italic;
    }
  `;

    render() {
        return html`
      <ul>
        ${taskStore.tasks.map(task => html`
          <task-item .task=${task}></task-item>
        `)}
      </ul>
      <div class="summary">
        Completed tasks: ${taskStore.completedTaskCount} / ${taskStore.tasks.length}
      </div>
    `;
    }
}
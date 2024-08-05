import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '../types/task';
import { taskStore } from '../store/task-store';

@customElement('task-item')
export class TaskItem extends LitElement {
    @property({ type: Object })
    task!: Task;

    static styles = css`
    :host {
      display: block;
      margin-bottom: 0.5rem;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    button {
      margin-left: 0.5rem;
      cursor: pointer;
    }
  `;

    render() {
        return html`
      <div>
        <input 
          type="checkbox" 
          .checked=${this.task.completed}
          @change=${this.toggleTask}
        />
        <span class=${this.task.completed ? 'completed' : ''}>
          ${this.task.title}
        </span>
        <button @click=${this.removeTask}>Delete</button>
      </div>
    `;
    }

    private toggleTask() {
        taskStore.toggleTask(this.task.id);
    }

    private removeTask() {
        taskStore.removeTask(this.task.id);
    }
}
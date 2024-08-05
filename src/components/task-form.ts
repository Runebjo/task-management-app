import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { taskStore } from '../store/task-store';

@customElement('task-form')
export class TaskForm extends LitElement {
    static properties = {
        taskTitle: { type: String }
    };
    taskTitle: string;

    constructor() {
        super();
        this.taskTitle = '';
    }

    static styles = css`
    form {
      display: flex;
      margin-bottom: 1rem;
    }
    input {
      flex-grow: 1;
      padding: 0.5rem;
    }
    button {
      padding: 0.5rem 1rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }
  `;

    render() {
        return html`
      <form @submit=${this.handleSubmit}>
        <input 
          type="text" 
          .value=${this.taskTitle}
          @input=${this.handleInput}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
    `;
    }

    private handleInput(e: InputEvent) {
        this.taskTitle = (e.target as HTMLInputElement).value;
    }

    private handleSubmit(e: Event) {
        e.preventDefault();
        if (this.taskTitle.trim()) {
            taskStore.addTask(this.taskTitle.trim());
            this.taskTitle = '';
        }
    }
}
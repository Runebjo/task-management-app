import { makeAutoObservable } from 'mobx';
import { Task } from '../types/task';

class TaskStore {
    tasks: Task[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTask(title: string): void {
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            completed: false
        };
        this.tasks.push(newTask);
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    toggleTask(id: string): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

    get completedTaskCount(): number {
        return this.tasks.filter(task => task.completed).length;
    }
}

export const taskStore = new TaskStore();
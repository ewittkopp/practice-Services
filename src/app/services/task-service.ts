import { computed, Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item';
import { NewTask } from '../new-task/new-task';
import { TaskStatus } from '../models/task-item';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // tasks:TaskItem[] = []
  tasks = signal<TaskItem[]>([]);
  taskCount = computed(() => this.tasks().length);

  addTask(taskName: string) {
    const NewTask: TaskItem = {
      id: this.generateTaskId(),
      name: taskName,
      status: 'Active',
    };
    this.tasks.update((tasks) => [...tasks, NewTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
    );
  }

  deleteTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  private generateTaskId = () => {
    return 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  };
}

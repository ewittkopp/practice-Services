import { Component, signal, output, inject } from '@angular/core';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  taskService = inject(TaskService);
  showWarning = signal<boolean>(false); //signal to manage inline warning for required task name

  constructor() {}

  onCreateTask(taskInput: HTMLInputElement) {
    const taskName = taskInput.value;
    // Trim whitespace
    if (!taskName || taskName.trim() === '') {
      this.showWarning.set(true); // show inline warning
      return;
    }
    this.taskService.addTask(taskName);

    taskInput.value = '';
  }

  //private method to generate task id
  private generateTaskId = () => {
    return 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  };
}

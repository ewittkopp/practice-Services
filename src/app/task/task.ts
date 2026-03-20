import { Component, inject, input, output } from '@angular/core';
import { TaskService } from '../services/task-service';
import { TaskStatus } from '../models/task-item';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<{ id: string; name: string; status: string }>();
  TaskService = inject(TaskService);

  onSetTo(status: TaskStatus) {
    this.TaskService.updateTaskStatus(this.task().id, status);
  }

  //method to dynamically assign the appropriate bootstrap class to the the badge.
  badgeClass() {
    const status = this.task().status;
    if (!status) return 'badge bg-secondary small';

    switch (status) {
      case 'Completed':
        return 'badge bg-success';
      case 'In-Active':
        return 'badge bg-danger';
      case 'Active':
        return 'badge bg-warning';
      default:
        return 'badge bg-secondary';
    }
  }
  //method invoked when user clicks on the trash button to delete a task
  onDeleteTask() {
    this.TaskService.deleteTask(this.task().id);
  }
}

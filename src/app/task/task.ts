import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input.required<{ id:string, name: string; status: string }>();
  statusChanged = output<{ id: string, newStatus: string }>();
  taskDeleted = output<string>();

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.task().id, newStatus: status });
  }

  //method to dynamically assign the appropriate bootstrap class to the the badge.
  badgeClass()
  {
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
  this.taskDeleted.emit(this.task().id); // emit to parent
  }
}

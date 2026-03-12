import { Component, signal } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [NewTask,Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    tasks = [
      {id: '1000', name: 'Eat Healthy', status: 'Active'},
      {id: '1001', name: 'Exercise Regularly', status: 'Completed'},
      {id: '1002', name: 'Meditate Everyday', status: 'In-Active'}
  ];

  //Adds the new task to the tasks array
  onTaskAdded(newTask: { id: string; name: string; status: string }) {
    this.tasks.push(newTask);
  }

  //Updates the status of the task with the matching id.
  onStatusChanged(updatedStatus: { id: string, newStatus: string }) {
    for (let task of this.tasks) {
      if (task.id == updatedStatus.id)
        task.status = updatedStatus.newStatus;
    }

  }
  //delete task with the matching task id
  deleteTask(taskId:string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}


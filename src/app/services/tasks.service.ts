import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [];

  constructor() { }

  deleteTask(i) {
    this.tasks.splice(i, 1);
  }

  saveTask(taskTitl, taskDes) {
    this.tasks.push({
      title: taskTitl,
      description: taskDes
    })
  }

  editTask(i, data) {
    this.tasks[i] = data;
  }
}

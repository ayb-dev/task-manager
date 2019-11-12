import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [];

  constructor() {

    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    } else {
      this.tasks = [];
    }

  }

  deleteTask(i) {
    this.tasks.splice(i, 1);
    this.saveAll();
  }

  saveTask(taskTitl, taskDes) {
    this.tasks.push({
      title: taskTitl,
      description: taskDes
    });
    this.saveAll();
  }

  editTask(i, data) {
    this.tasks[i] = data;
    this.saveAll();
  }

  saveAll() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

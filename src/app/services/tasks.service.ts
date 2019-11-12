import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Array<Task> = [
    {
      title: '1',
      description: 'test'
    }
  ];

  constructor() { }

  deleteTask(i) {
    this.tasks.splice(i, 1);
  }
}

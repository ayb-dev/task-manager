import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskSer: TasksService, private router: Router) { }

  ngOnInit() {
  }

  saveTask(title, des) {
    this.taskSer.saveTask(title.value, des.value);
    this.router.navigate(['/']);
  }
}

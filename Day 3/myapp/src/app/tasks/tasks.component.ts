import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Id:string='';
  Title:string='';
  Status:string='';

allTasks:Task[]=[
  new Task('1','add to staging area','done'),
  new Task('2','commit to git','pending'),
  new Task('3','push to github','pending')
];
  constructor() { }

  onDelete(item){
    this.allTasks.splice(this.allTasks.indexOf(item), 1);
  }

  onAddTask(){
    this.allTasks.push(new Task(this.Id, this.Title, this.Status));
  }
  ngOnInit() {
  }

}

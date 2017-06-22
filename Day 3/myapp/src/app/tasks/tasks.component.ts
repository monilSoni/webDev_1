import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
import { TaskdataService } from "../taskdata.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Id:string='';
  Title:string='';
  Status:string='';

allTasks:Task[]=[];
  constructor(public _data:TaskdataService) { }

  onDelete(item){
    this.allTasks.splice(this.allTasks.indexOf(item), 1);
  }

  onAddTask(){
    this.allTasks.push(new Task(this.Id, this.Title, this.Status));
  }

  ngOnInit() {
    this._data.getAllTask().subscribe(
      (data:Task[])=>{
        this.allTasks=data;
      }
      
    )

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onClick(){
  alert("Hello World");
  }
  str:string="Monil Soni";
  num1:number;
  num2:number;
  ans:number;

  flag:boolean=true;

  onClick1(){
  if(this.flag===true){
  this.flag=false;
  }

  else{
  this.flag=true;
  }
  }

  onAdd(){
  this.ans = this.num1 + this.num2;
  }
  }

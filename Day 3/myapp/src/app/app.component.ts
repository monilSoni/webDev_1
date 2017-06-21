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
  str:string="jinal shah";
  num1:number = 0;
  num2:number = 0;
  ans:number = 0;

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

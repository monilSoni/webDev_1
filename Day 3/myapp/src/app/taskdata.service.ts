import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class TaskdataService {

  url:string="https:rkdemotask.herokuapp.com/Tasks/";
  constructor(public _http:Http) { }

  getAllTask(){
    return this._http.get(this.url).map((res:Response)=>res.json());
  }
}

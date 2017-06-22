import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TasksComponent } from './tasks/tasks.component';
import { Routing } from "./app.routing";
import { HeaderComponent } from './header.component';
import { TaskdataService } from "./taskdata.service";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TasksComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

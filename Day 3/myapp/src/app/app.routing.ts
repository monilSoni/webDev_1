import { Routes,RouterModule } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { DemoComponent } from "./demo/demo.component";

const arr:Routes=[
    {path:'', redirectTo: '/allTask', pathMatch:'full'},
    {path:'allTask', component:TasksComponent},
    {path:'Demo', component:DemoComponent}
];
export const Routing =RouterModule.forRoot(arr); //We need to export the things we need to import
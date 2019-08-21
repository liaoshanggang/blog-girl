import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [];
const appRoutes:Routes = [
  {path:'todo',component:TodoComponent},
  {path:'about',loadChildren:'./about/about.module#AboutModule'},
  {path:'',redirectTo:'/todo',pathMatch:'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

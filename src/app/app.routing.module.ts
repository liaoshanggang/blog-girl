import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DetailComponent } from './todo/detail/detail.component';
import { InlineComponent } from './inline/inline.component';


const routes: Routes = [];
const appRoutes:Routes = [
  {path:'home',loadChildren:'./pages/home/home.module#HomeModule'},
  {path:'todo',component:TodoComponent},
  {path:'todo/:id',component:DetailComponent},
  {path:'about',loadChildren:'./about/about.module#AboutModule'},
  {path:'inline',component:InlineComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

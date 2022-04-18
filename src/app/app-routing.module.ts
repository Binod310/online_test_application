import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { QuestionComponent } from './question/question.component';
import {WelcomeComponent} from './welcome/welcome.component'

const routes: Routes = [
  {path:"" , component:WelcomeComponent},
  {path:'question' , component:QuestionComponent},
  {path:'welcome' , component:WelcomeComponent},
  {path:'login' , component:AdminloginComponent},
  {path:'admin' , component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

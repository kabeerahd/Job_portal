import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { StudentsinfoComponent } from './studentsinfo/studentsinfo.component';

const routes: Routes = [
  {
    path:"firstpage",component:FirstpageComponent
  },
  {
    path:"secondpage",component: SecondpageComponent
  },
  {
    path:"loginpage",component:LoginpageComponent
  },
  {
    path:"registerpage",component:RegisterpageComponent
  },
  {
    path:"studentsinfo",component:StudentsinfoComponent
  }  
          
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

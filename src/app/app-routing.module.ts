import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DetailsComponent } from './details/details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:"details/:id",component:DetailsComponent
  },
  {
    path:"addEmp",component:AddEmployeeComponent
  },
  {
    path:'**',component:NotFoundComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './Person/person.component';
import { StudentListComponent } from './student-list/student-list.component';

// const routes: Routes = [];
const routes:Routes=[
  // {path:'',component:''},
  {path:'person',component:PersonComponent},
  {path:'student-list',component:StudentListComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

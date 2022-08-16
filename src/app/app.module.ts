import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './Person/person.module';
import { StudentListComponent } from './student-list/student-list.component';
// import { StudentListComponent } from './student-list/student-list.component';
import { StudentListModule } from './student-list/student-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
// import { PersonComponent } from './person/person.component';
// import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentListModule,
    PersonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

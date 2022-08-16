import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  Student:any[]=[
    {StudentId:1,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",Department:"Science",rollNo:"1",Math:30,English:50,Hindi:45,Science:60,Drawing:30 },
    {StudentId:2,firstName:"Mitesh",middleName:"chandrashekhar",lastName:"Sahu",Department:"x",rollNo:"1",Math:30,English:50,Hindi:75,Science:60,Drawing:30 },
    {StudentId:3,firstName:"suyog",middleName:"chandrashekhar",lastName:"Sahu",Department:"VI",rollNo:"1",Math:30,English:50,Hindi:45,Science:90,Drawing:30 },
    {StudentId:4,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",Department:"VII",rollNo:"1",Math:30,English:50,Hindi:45,Science:60,Drawing:30 },
    {StudentId:5,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",Department:"X",rollNo:"1",Math:40,English:50,Hindi:75,Science:60,Drawing:30 },
    {StudentId:6,firstName:"Akhi",middleName:"chandrashekhar",lastName:"Sahu",Department:"X",rollNo:"1",Math:30,English:50,Hindi:45,Science:60,Drawing:30 },
    {StudentId:7,firstName:"Mark",middleName:"chandrashekhar",lastName:"Sahu",Department:"Science",rollNo:"1",Math:90,English:70,Hindi:45,Science:60,Drawing:30 },
    {StudentId:8,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",Department:"Science",rollNo:"1",Math:60,English:10,Hindi:45,Science:60,Drawing:30 },
    {StudentId:10,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",Department:"Science",rollNo:"1",Math:30,English:10,Hindi:45,Science:60,Drawing:30 },
    {StudentId:9,firstName:"Aman",middleName:"chandrashekhar",lastName:"Sahu",Department:"Science",rollNo:"1",Math:30,English:50,Hindi:75,Science:60,Drawing:30 },
    
  ];
  ngOnInit(): void {
  }

}

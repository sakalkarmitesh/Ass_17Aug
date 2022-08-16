import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
 firstname:string="";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

  }

  //pop up msg
  onClick(){
    alert("Your details inserted successfully.");
  }

}

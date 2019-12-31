import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  personName = ''
  personSex = 'Undefid'
  toggleEvent = true;
  state = false


  toggleEvents(){

// this function will change the gender by button based on given name 

    this.toggleEvent = !this.toggleEvent
    if (this.toggleEvent === false){
      this.personSex = 'Female'
    } else {
      this.personSex = 'Male'
    } 
    return this.personSex
  }
  
  checkName(){
  // function will be disble untill any name will enter
    if (this.personName === ''){
      this.state = true
      return this.state 
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}

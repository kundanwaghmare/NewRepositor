import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public sampleText:string = "";
  public link:string="";
  public fullName:string="Ganesh";
  // private sampleText2 ="Hi How are u ?";
  // protected sampleText3 ="I am fine";

  constructor() { }

  ngOnInit(): void {
    // interpolation or string interpolation
    this.sampleText ="Hello Angular 14";

    // Property or attribute binding 
    this.link = "https://www.youtube.com/";
  }

  // event binding
  clickEvent(){
      console.log("Hello this is an event");
  
  }

}

import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ref: ElementRef) { 
    this.text = 'helo';
  }

  ngOnInit(): void {
  }

  defaultValue = "Untitled presentation";

  public text!: String;

  @HostListener('document:click')
  clickout() {
    if(this.sname ===''){
      this.sname = 'Untitled presentation';
    }
  }

  sname = 'Untitled presentation';

  // myMethod(value:any){
  //   // console.log(value);
  //   // if(value.value ===''){
  //   //   this.sname = 'Untitled presentation';
  //   // } 
  // }

}

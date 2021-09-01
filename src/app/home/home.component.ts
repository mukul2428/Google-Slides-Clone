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

  classArray=[
    'add_box','arrow_drop_down','undo', 'redo', 'print',
    'format_paint','zoom_in','arrow_drop_down','format_shapes',
    'image','arrow_drop_down','add_comment'
  ]
  menuArray=[
    'File','Edit','View','Insert','Slide','Arrange','Tools',
    'Add-ons','Help'
  ]

}

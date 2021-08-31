import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {


  @ViewChild ('largeInputText') Input1!: ElementRef;
  @ViewChild ('smallInputText') Input2!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  lText:string = "Click to add title";
  sText:string = "Click to add subtitle"
 
  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if(!this.Input1.nativeElement.contains(event.target)){
      // console.log('hello');
      if(this.Input1.nativeElement.value === ''){
        this.Input1.nativeElement.value = 'Click to add title';
      }
    }
    if(!this.Input2.nativeElement.contains(event.target)){
      // console.log('hello');
      if(this.Input2.nativeElement.value === ''){
        this.Input2.nativeElement.value = 'Click to add subtitle';
      }
    }
  }

  inputClick1(){
    this.Input1.nativeElement.value = '';
  }
  inputClick2(){
    this.Input2.nativeElement.value = '';
  }
}

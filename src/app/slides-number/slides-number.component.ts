import { Component, OnInit } from '@angular/core';
import { ClickEventService } from '../appServices/click-event.service';

@Component({
  selector: 'app-slides-number',
  templateUrl: './slides-number.component.html',
  styleUrls: ['./slides-number.component.css']
})
export class SlidesNumberComponent implements OnInit {

  constructor(private click: ClickEventService) { }

  ngOnInit(): void {
    this.clicked();
  }

  blockArr:any = [1];

  clickEvent:boolean = false;

  clicked(){
    this.click.clicked.subscribe(res => {
      this.clickEvent = res;
      // res = false;
      // console.log(this.clickEvent);
      if(this.clickEvent){
        // console.log('sds');
        this.blockArr.push(this.blockArr.length);
      }
    });
    
  }

}

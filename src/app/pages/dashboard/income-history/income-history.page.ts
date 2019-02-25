import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-income-history',
  templateUrl: './income-history.page.html',
  styleUrls: ['./income-history.page.scss'],
})
export class IncomeHistoryPage implements OnInit {
  @ViewChild('sliders') slider: IonSlides;
  segment='tag'
  show= false;
  constructor() { }

  ngOnInit() {
  }
  next(){
    this.slider.slideNext();
  }

  prev(){
    this.slider.slidePrev();
  } 
  doSomethingOnOpen(){
    this.show = true;
  }

  doSomethingOnClose(){
    this.show = false;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  
})

export class MenuPage implements OnInit {
  @ViewChild('sliders') slider: IonSlides;
  constructor() { }
  show= false;
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

import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, ModalController} from '@ionic/angular';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.page.html',
  styleUrls: ['./invest.page.scss'],
})
export class InvestPage implements OnInit {

  stepper="first";
  @ViewChild('sliders') slider: IonSlides;
  flag = true;

  show= false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
  setStepper(val){
    this.stepper = val;
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 },
      cssClass: 'modal'
    });
    return await modal.present();
  }


}

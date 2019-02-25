import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {AccordionModule} from "ngx-accordion";


import { IonicModule } from '@ionic/angular';

import { InvestPage } from './invest.page';
import { ModalComponent } from '../../modal/modal.component';

const routes: Routes = [
  {
    path: '',
    component: InvestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvestPage, ModalComponent],
  entryComponents: [ModalComponent]
})
export class InvestPageModule {}

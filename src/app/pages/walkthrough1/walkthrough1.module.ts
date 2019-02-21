import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Walkthrough1Page } from './walkthrough1.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrough1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Walkthrough1Page]
})
export class Walkthrough1PageModule {}

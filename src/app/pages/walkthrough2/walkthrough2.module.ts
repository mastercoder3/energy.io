import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Walkthrough2Page } from './walkthrough2.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrough2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Walkthrough2Page]
})
export class Walkthrough2PageModule {}

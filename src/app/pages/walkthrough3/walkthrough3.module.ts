import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Walkthrough3Page } from './walkthrough3.page';

const routes: Routes = [
  {
    path: '',
    component: Walkthrough3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Walkthrough3Page]
})
export class Walkthrough3PageModule {}

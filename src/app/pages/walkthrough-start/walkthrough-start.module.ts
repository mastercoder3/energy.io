import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WalkthroughStartPage } from './walkthrough-start.page';

const routes: Routes = [
  {
    path: '',
    component: WalkthroughStartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WalkthroughStartPage]
})
export class WalkthroughStartPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoInternetConnectionPage } from './no-internet-connection.page';

const routes: Routes = [
  {
    path: '',
    component: NoInternetConnectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoInternetConnectionPage]
})
export class NoInternetConnectionPageModule {}

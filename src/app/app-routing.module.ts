import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registeration',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'no-internet-connection', loadChildren: './pages/no-internet-connection/no-internet-connection.module#NoInternetConnectionPageModule' },
  { path: 'walkthrough1', loadChildren: './pages/walkthrough1/walkthrough1.module#Walkthrough1PageModule' },
  { path: 'walkthrough2', loadChildren: './pages/walkthrough2/walkthrough2.module#Walkthrough2PageModule' },
  { path: 'walkthrough3', loadChildren: './pages/walkthrough3/walkthrough3.module#Walkthrough3PageModule' },
  { path: 'walkthrough-start', loadChildren: './pages/walkthrough-start/walkthrough-start.module#WalkthroughStartPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

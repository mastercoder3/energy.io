import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'walkthrough',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registeration', loadChildren: './pages/registration/registration.module#RegistrationPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: './pages/dashboard/home/home.module#HomePageModule' },
    { path: 'start', loadChildren: './pages/dashboard/start/start.module#StartPageModule' },
    { path: 'invest', loadChildren: './pages/dashboard/invest/invest.module#InvestPageModule' },
    { path: 'vertage', loadChildren: './pages/dashboard/vertage/vertage.module#VertagePageModule' },
    { path: 'menu', loadChildren: './pages/dashboard/menu/menu.module#MenuPageModule' },
    { path: 'income-history', loadChildren: './pages/dashboard/income-history/income-history.module#IncomeHistoryPageModule' },
    { path: 'setup', loadChildren: './pages/dashboard/setup/setup.module#SetupPageModule' },
    { path: 'profile', loadChildren: './pages/dashboard/profile/profile.module#ProfilePageModule' },
    { path: 'dashboard2', loadChildren: './pages/dashboard/dashboard2/dashboard2.module#Dashboard2PageModule' }

  ]},
  { path: 'no-internet-connection', loadChildren: './pages/no-internet-connection/no-internet-connection.module#NoInternetConnectionPageModule' },
  { path: 'walkthrough', loadChildren: './pages/walkthrough/walkthrough.module#WalkthroughPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./auth/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cash-and-bank',
    loadChildren: () => import('./pages/cash-and-bank/cash-and-bank.module').then( m => m.CashAndBankPageModule)
  },
  {
    path: 'add-new-bank',
    loadChildren: () => import('./pages/add-new-bank/add-new-bank.module').then( m => m.AddNewBankPageModule)
  },
  {
    path: 'bill-invoice',
    loadChildren: () => import('./pages/bill-invoice/bill-invoice.module').then( m => m.BillInvoicePageModule)
  },
  {
    path: 'received-payment',
    loadChildren: () => import('./pages/received-payment/received-payment.module').then( m => m.ReceivedPaymentPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./pages/add-service/add-service.module').then( m => m.AddServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'browsePets',
    loadChildren: () => import('./pages/browse-pets/browse-pets.module').then( m => m.BrowsePetsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'confirmRegistration',
    loadChildren: () => import('./pages/confirm-registration/confirm-registration.module').then( m => m.ConfirmRegistrationPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sessionExpired',
    loadChildren: () => import('./pages/session-expired/session-expired.module').then( m => m.SessionExpiredPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./pages/provider/provider.module').then( m => m.ProviderPageModule)
  },
  {
    path: 'adoption-survey',
    loadChildren: () => import('./pages/adoption-survey/adoption-survey.module').then( m => m.AdoptionSurveyPageModule)
  },
  {
    path: 'confirmProviderApplication',
    loadChildren: () => import('./pages/confirm-provider-application/confirm-provider-application.module').then( m => m.ConfirmProviderApplicationPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-console/admin-console.module').then( m => m.AdminConsolePageModule)
  },
  {
    path: 'providerManage',
    loadChildren: () => import('./pages/provider-manage/provider-manage.module').then( m => m.ProviderManagePageModule)
  },
  // wildcard, redirect non-recognized routes to the base route
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

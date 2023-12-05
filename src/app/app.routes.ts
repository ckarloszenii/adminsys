import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [
      AuthGuard
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });

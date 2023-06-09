import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginGuard } from './auth/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () =>
    import('./home/home.module')
    .then(module => module.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'mascotas',
    loadChildren: () => import('./mascotas/mascotas.module').then(
      (module) => module.MascotasModule),
      canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

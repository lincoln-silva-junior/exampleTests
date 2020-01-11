import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { UsuariosGuard } from './auth/guards/usuarios.guard';

const routes: Routes = [
  { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
  },
  { path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  { path: 'home',
    component: HomeComponent },
  { path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [UsuariosGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HomeGuard } from './guards/home.guard';
import { UsuariosGuard } from './guards/usuarios.guard';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token.interceptor';



@NgModule({
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    AuthService,
    UsuariosGuard,
    HomeGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

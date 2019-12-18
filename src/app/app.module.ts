import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridBaseComponent } from './shared/grid-base/grid-base.component';
import { ModalComponent } from './shared/modal/modal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { EditButtonModalComponent } from './shared/grid-base/edit-button-modal/edit-button-modal.component';
import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GridBaseComponent,
    ModalComponent,
    UsuariosComponent,
    EditButtonModalComponent,
    CampoControlErroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([EditButtonModalComponent]),
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

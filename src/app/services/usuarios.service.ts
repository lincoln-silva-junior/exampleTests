import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends CrudService<User> {
  users: User[];
  constructor(protected http: HttpClient) {
    super(http, `${environment.API}users`);
  }
}

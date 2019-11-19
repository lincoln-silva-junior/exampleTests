import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  users: User[] = [
    {id: 1, nome: 'Pedro Souza', login: 'psouza', email:'psouza@email.com'},
    {id: 2, nome: 'Carlos José', login: 'cjose', email:'cjose@email.com'},
    {id: 3, nome: 'Ana Cristina', login: 'acristina', email:'acristina@email.com'},
    {id: 4, nome: 'Maria Clara', login: 'mclara', email:'mclara@email.com'},
  ];   
  constructor() { }

  getUsers(){
    return this.users;
  }

  getUser(id: number) {    
    for (let i = 0; i < this.users.length; i++) {
      const usuario = this.users[i];      
      if (usuario.id == id) {        
        return usuario;
      }
    }
    return null;
  }
}

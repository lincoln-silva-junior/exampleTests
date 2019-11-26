import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  users: User[];
  constructor() {
    if ((this.users === undefined) || (this.users.length === 0)) {
      this.users = [
        {id: 1, nome: 'Pedro Souza', login: 'psouza', email:'psouza@email.com'},
        {id: 2, nome: 'Carlos José', login: 'cjose', email:'cjose@email.com'},
        {id: 3, nome: 'Ana Cristina', login: 'acristina', email:'acristina@email.com'},
        {id: 4, nome: 'Maria Clara', login: 'mclara', email:'mclara@email.com'},
      ];
    }
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      const usuario = this.users[i];
      if (usuario.id === id) {
        return usuario;
      }
    }
    return null;
  }

  put(usuario: any): boolean {
    
    try {
      for (let i = 0; i < this.users.length; i++) {
        //const user = this.users[i];
        if (this.users[i].id === usuario.id) {
          this.users[i].nome = usuario.nome;
          this.users[i].login = usuario.login;
          this.users[i].email = usuario.email;          
        }
      }
      return true;

    } catch (error) {
      return false;    
    }

  }

  post(usuario: any): boolean {
    
    try {
      let newId = 0;

      newId = (Math.max(...this.users.map(b => b.id)) + 1);
      usuario.id = newId;
      this.users.push(usuario);

      return true;

    } catch (error) {
      return false;
    }

  }
}

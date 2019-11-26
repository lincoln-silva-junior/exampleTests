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
    const retorno = false;
    try {
      for (let i = 0; i < this.users.length; i++) {
        const user = this.users[i];
        if (usuario.id === usuario.value.id) {
          usuario.value.map((b: any) => {
            return <User> b.json();
          })
          return usuario;
        }
      }
      return null;

    } catch (error) {
      throw error;
    } finally {
      return retorno;
    }

  }

  post(usuario: any): boolean {
    let retorno = false;
    try {
      let newId = 0;

      newId = (Math.max(...this.users.map(b => b.id)) + 1);
      usuario.value.id = newId;
      this.users.push(usuario.value);

      retorno = true;

    } catch (error) {
      throw error;
    } finally {
      return retorno;
    }

  }
}

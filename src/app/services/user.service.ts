import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private user: Usuario = new Usuario();
  logged: boolean = false;
  constructor(public router: Router) { }


  // comprueba si usuario y contraseña son correctos.
  login(usuario: Usuario) {

    if (usuario !== null && usuario !== undefined && usuario.usuario === 'adrian' && usuario.password === '123456') {
      this.user.usuario = usuario.usuario;
      this.user.password = usuario.password;
      console.log('Loged with user: ' + this.user.usuario);
      this.logged = true;
      return true;
    }
    return false;
  }

  resetPedido() {
    this.user.pedido = undefined;
  }

  // Devuelve el usuario
  getUsuario() {
    return this.user;
  }

  // Devuelve si el usuario esta loggeado
  isLogged() {
    return this.logged;
  }

  logout() {
    console.log('Logged out');
    this.logged = false;

    localStorage.clear();
    this.router.navigate(['/home']);
  }

  // Funcion que guarda los datos del usuario en el localstorage

  saveData(user: Usuario) {

    // Antes de guardar eliminamos los datos anteriores
    if (localStorage.getItem('usuario')) {
      localStorage.removeItem('usuario');
    }
    if (localStorage.getItem('hub')) {
      localStorage.removeItem('hub');
    }
    if (localStorage.getItem('plate')) {
      localStorage.removeItem('plate');
    }
    if (localStorage.getItem('km')) {
      localStorage.removeItem('km');
    }

    this.user = user;
    localStorage.setItem('hub', this.user.hub);
    localStorage.setItem('plate', this.user.plate);
    localStorage.setItem('km', this.user.odometer.toString());
  }


// Metodo que retorna un booleano que indica si el repartidor lleva un pedido
repartiendo(repartidor: Usuario) {
  if (repartidor.pedido !== undefined) {
    return true;
  }
  return false;
}

// Metodo que dado un codigo de pedido se lo asigna al repartidor
asignarPedido(code: number) {
  this.user.pedido = code;
}

entregado() {
  this.user.pedido = undefined;
}

}

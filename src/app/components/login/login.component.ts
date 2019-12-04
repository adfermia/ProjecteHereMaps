import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { HeremapService } from 'src/app/services/heremap.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario;
  constructor(public userService: UserService, public router: Router, public here: HeremapService) { }

  ngOnInit() {
    this.user = {
      usuario: '',
      password: '',
      hub: '',
      plate: '',
      dni: '',
      telefono: null,
      odometer: null,
      pedido: undefined
    };
  }


  login(forma: NgForm) {

    if ( forma.invalid) {
      return;
    }

    if (this.userService.login(this.user)) {
      // Login correcte
      this.router.navigate(['/pages/inputsForm']);
    } else {

      // Login false, error en l'usuari o la contrasenya
      swal.fire('User Information', 'Incorrect username or password. Try again.', 'error');
    }


  }

}

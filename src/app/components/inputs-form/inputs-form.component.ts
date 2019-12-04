import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs-form',
  templateUrl: './inputs-form.component.html',
  styleUrls: ['./inputs-form.component.css']
})
export class InputsFormComponent implements OnInit {

  user: Usuario = this.userService.getUsuario();
  hubs: string[] = ['oliva', 'tavernes', 'gandia', 'all'];
  constructor( public userService: UserService, public router: Router) { }

  ngOnInit() {
  }

  saveData(forma: NgForm) {

    if (forma.invalid) {
        return;
    }
    this.userService.saveData(this.user);

    this.router.navigate(['/pages/online']);

  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { TranslationService } from '../services/translation.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  language: string[] = ['en', 'es'];

  constructor(public userService: UserService, private translateService: TranslationService) { }

  ngOnInit() {
  }

  logout() {
    Swal.fire({
      title: 'Are you sure',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.userService.logout();
      }
    });
  }

  cambiarIdioma( idioma: string) {
    this.translateService.changeLanguage(idioma);
  }

}

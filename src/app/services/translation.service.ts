import { Injectable } from '@angular/core';
import { TranslationSet } from '../models/translationSet';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public languages = ['en', 'es'];

  public language = 'es';
  private dictionary: {[key: string]: TranslationSet} = {

    en: {
      language: 'en',
      values: {
        welcome: 'Welcome',
        login: 'Log In',
        username: 'User name',
        validUsername: 'Username is required',
        validPassword: 'Password is  required',
        titleInputForm: 'Select Hub',
        validHub: 'Hub is required',
        titlePlate: 'Enter your plate',
        validPlate: 'Plate is required',
        titleOdometer: 'Odometer value',
        validOdometer: 'Odometer required',
        saveButton: 'Save Data',
        onlineButton: 'Go online!',
        offlineButton: 'Go offline!',
        logoutButton: 'Logout',
        notificationPickUp: 'Hurry! You have to deliver the order!',
        notificationDeliver: 'Congratulations! You delivered the order in time!',
        buttonPickUp: 'Pick Up!',
        buttonEntregar: 'Deliver'
      }
    },
    es: {
      language: 'es',
      values: {
        welcome: 'Bienvenido',
        login: 'Entrar',
        validUsername: 'Nombre de usuario obligatorio',
        validPassword: 'Contraseña obligatoria',
        titleInputForm: 'Selecciona Hub',
        validHub: 'Hub obligatorio',
        titlePlate: 'Ingresar matricula',
        validPlate: 'Matricula obligatoria',
        titleOdometer: 'Cuentakilometros',
        validOdometer: 'Cuentakilometros obligatorio',
        saveButton: 'Guardar',
        onlineButton: 'Conectar!',
        offlineButton: 'Desconectar!',
        logoutButton: 'Salir',
        notificationPickUp: 'Date Prisa! Tienes que entregar el pedido!',
        notificationDeliver: 'Enhorabuena! Has repartido el pedido a tiempo!',
        buttonPickUp: 'Recoger!',
        buttonEntregar: 'Entregar'
      }
    }
  };

  constructor() { }

  translate(key: string): string {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[key];
    }
  }

  changeLanguage(idioma: string) {
    this.language = idioma;
  }
}

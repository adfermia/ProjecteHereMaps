import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

// Aquesta es la configuracio que hem de gastar per a que funcione el firebase cloud-messaging
export const firebaseConfig = {
  apiKey: "AIzaSyAe_nW9kpnCDbSyBuAFcwbskz4pCXmNLD4",
  authDomain: "notificationproject-72594.firebaseapp.com",
  databaseURL: "https://notificationproject-72594.firebaseio.com",
  projectId: "notificationproject-72594",
  storageBucket: "notificationproject-72594.addspot.com",
  messagingSenderId: "10395800507",
  appId: "1:651932795394:android:811d2fad52ab2b1a"
};


@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);

  constructor(
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
      if (navigator.userAgent == 'hcapp') {

       // window['android'].onMessageReceived();
      } else {
        this.angularFireMessaging.messaging.subscribe( (messaging) => {
          messaging.onMessage = messaging.onMessage.bind(messaging);
          messaging.onTokenRefresh = messaging.onTokenRefresh.bind(messaging);
        });
      }


    }

  // Update token on firebase database
  updateToken(userId, token) {
    console.log('updating token');
    this.angularFireAuth.authState.pipe(take(1)).subscribe(() => {
      const data = {};
      data[userId] = token;
      this.angularFireDB.object('fcmTokens/').update(data);
    });
  }

  // request permission for notification from firebase cloud messaging
  requestPermission(userId) {

    if (navigator.userAgent == 'hcapp') {

      console.log('Asking for permission from mobile');
    } else {
      this.angularFireMessaging.requestToken.subscribe(
        (token) => {
          console.log(token);
          this.updateToken(userId, token);
        },
        (err) => {
          console.error('Unable to get permission to notify.' +  err);
        });
    }
  }

  // Funcion que se ejecuta cuando recibimos un mensaje
  receiveMessage() {

    if (navigator.userAgent == 'hcapp') {
      // Como tenemos configurado el cloud-messaging nativamente en android aqui no necesitamos hacer nada
    } else {
      // Esto en cambio se ejecuta cuando estamos en un navegador
      this.angularFireMessaging.messages.subscribe(
        (payload) => {
          console.log('new message received. ', payload);
          this.currentMessage.next(payload);
        });
    }
  }

}






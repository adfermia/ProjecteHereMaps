import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { HeremapService } from './heremap.service';
import { PedidoService } from './pedido.service';
import { TranslationService } from './translation.service';
import { Translate } from './pipes/translate.pipe';
import {DeviceDetectorModule} from 'ngx-device-detector';
import { MessagingService, firebaseConfig } from './messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire//auth';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireMessagingModule
  ],
  providers: [
    UserService,
    HeremapService,
    PedidoService,
    TranslationService,
    Translate,
    MessagingService
  ]
})
export class ServicesModule { }

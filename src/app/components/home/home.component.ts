import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { Posicion } from 'src/app/models/posicion';
import { MessagingService } from 'src/app/services/messaging.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: any;

  constructor(public router: Router, public pedidoS: PedidoService, public msService: MessagingService) { }

  ngOnInit() {


    // Aci he de fer una funcio que solicite el permis per a android
    // i una altra per a rebre missatges  que crec que deu ser aquesta

const userId = 'user001';

if (navigator.userAgent == 'hcapp') {

 } else {
   this.msService.requestPermission(userId);
   this.msService.receiveMessage();
   this.message = this.msService.currentMessage;


 }

  }

  logIn() {
    this.router.navigate(['/login']);
  }

}

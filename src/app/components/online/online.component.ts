import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeremapService } from 'src/app/services/heremap.service';
import { API_KEY } from 'src/app/config/config';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido.model';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styles: [
    '.container {width: 70vw; height: 20px; }'
  ]
})
export class OnlineComponent implements OnInit {

  online = false;
  apikey = API_KEY;

  // Mi posicion
  myLat: number;
  myLong: number;
  pedidos: Pedido[] = [];

  pedidoSeleccionado;
  constructor(public here: HeremapService, public pedidoS: PedidoService, public usuarioService: UserService) {
   }

   public ngOnInit() {

    this.myLat = this.here.myLat;
    this.myLong = this.here.myLong;

    this.pedidos = this.pedidoS.pedidosPendientes();


    }



    // BORRAR
    saveData(f) {

    }

    // Funcion go offline, esta funcion cambiara el valor de online y ademas setUsuario.pedido a undefined
    goOffline() {
      this.online = !this.online;
      this.usuarioService.resetPedido();
    }


}

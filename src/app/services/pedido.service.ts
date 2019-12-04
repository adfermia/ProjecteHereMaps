import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';
import { Posicion } from '../models/posicion';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  pedidos: Pedido[] = [];

  constructor() {
    // añadimos unos cuantos pedidos para probar la aplicacion
    let pos = new Posicion();
    pos.latitud = 38.9704127;
    pos.longitud = -0.1629648;
    this.añadirPedido( 100, pos, 'oliva');

    let pos1 = new Posicion();
    pos1.latitud = 39.9704127;
    pos1.longitud = -0.1629648;
    this.añadirPedido( 101, pos1, 'gandia');

    let pos2 = new Posicion();
    pos2.latitud = 38.5704127;
    pos2.longitud = -0.1629648;
    this.añadirPedido( 102, pos2, 'tavernes');

    let pos3 = new Posicion();
    pos3.latitud = 37.9704127;
    pos3.longitud = -1.1629648;
    this.añadirPedido( 103, pos3, 'oliva');

    let pos4 = new Posicion();
    pos4.latitud = 37.5704127;
    pos4.longitud = -1.1629648;
    this.añadirPedido( 104, pos4, 'gandia');

   }

  fechaSalida: Date;
  fechaLlegada: Date;
  repartidor: string;
  enCamino: boolean = false;
  lugarEntrega: Posicion;

  // Funcion que añade pedidos al array
  añadirPedido( codi: number, lugarEntrega: Posicion, tienda: string) {
    let pedido: Pedido = {
      idPedido: codi,
      fechaSalida: null,
      fechaLlegada: null,
      repartidor: null,
      enCamino: false,
      lugarEntrega,
      tienda
    };
    // añadimos el pedido al array de pedidos
    this.pedidos.push(pedido);


  }

  getPedidos() {
    return this.pedidos;
  }

  // El metodo salida le asignara una fecha y hora a la fechaSalida del pedido
  // además cambiará la variable enCamino a true y le asignara un repartidor.
  // Esta funcion se llamara cuando el repartidor recoja el pedido.
  salida( codi: number, repartidor: string) {

    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.pedidos.length; i++ ) {
      if ( this.pedidos[i].idPedido == codi) {
        let time = new Date().getTime();
        let date = new Date(time);
        this.pedidos[i].fechaSalida = date;
        this.pedidos[i].enCamino = true;
        this.pedidos[i].repartidor = repartidor;
      }
    }
  }

  // Funcion que asigna fecha y hora a la fechaLlegada y cambia la variable enCamino a false
  // Esta funcion se llamara cuando el repartidor haya realizado la entrega
  llegada(codi: number) {

    console.log('Pedido entregado');
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.pedidos.length; i++ ) {
      if ( this.pedidos[i].idPedido == codi) {
        let time = new Date().getTime();
        let date = new Date(time);
        this.pedidos[i].fechaLlegada = date;
        this.pedidos[i].enCamino = false;
      }
    }
  }

  // Funcion que retornara todos los pedidos que esten pendientes de recoger,
  // es decir aquellos que no esten en camino y los que la fecha de entrega sea igual a null
  pedidosPendientes() {
    let pedidosPendientes: Pedido[] = [];
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.pedidos.length; i++ ) {
      if ( !this.pedidos[i].enCamino && this.pedidos[i].fechaLlegada === null) {
          pedidosPendientes.push(this.pedidos[i]);
        }
      }

    return pedidosPendientes;
    }

    clearData() {
      this.pedidos = [];
    }

    // Funcion que recibido un id de pedido retorna el pedido con el mismo id

    getPedidoById(code: number) {

      for (let pedido of this.pedidos) {
        if (pedido.idPedido == code) {

          return pedido;
        }
      }
    }

    // Funcion que dado un hub retorna un array con el codigo de los pedidos de esta tienda
    getPedidosTienda(hub) {
      let pedidosTienda: Pedido[] = [];
      if (hub == 'all') {
        return this.pedidosPendientes();
      } else {
        for (let pedido of this.pedidosPendientes()) {

          if (pedido.tienda == hub) {
            pedidosTienda.push(pedido);
          }
        }
      }
      return pedidosTienda;
      }

}

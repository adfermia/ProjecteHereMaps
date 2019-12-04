import { Posicion } from './posicion';





export class Pedido {
  idPedido: number;
  fechaSalida: Date;
  fechaLlegada: Date;
  repartidor: string;
  enCamino: boolean = false;
  lugarEntrega: Posicion;
  tienda: string;

  constructor() {

  }

}







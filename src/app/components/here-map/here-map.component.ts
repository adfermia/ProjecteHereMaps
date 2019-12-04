import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HeremapService } from 'src/app/services/heremap.service';
import { Posicion } from 'src/app/models/posicion';
// tslint:disable-next-line: max-line-length
import { URL_REPARTIDOR, TIENDA_OLIVA, TIENDA_GANDIA, TIENDA_TAVERNES, URL_TIENDA, URL_PEDIDO, INFO_OLIVA, INFO_GANDIA, INFO_TAVERNES } from 'src/app/config/config';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Observable, interval, timer, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { PushNotificationsService } from 'ng-push';




declare var H: any;

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styles: [
    '.map { width: 70vw; height: 50vh; display: block; }',
    '.container {width: 70vw; height: 50vh; border: 2px}',
    '.containeret {width: 70vw; height: 30px; border: 2px}'
  ]
})
export class HereMapComponent implements OnInit {


  // Propiedades por parametro
  @ViewChild('map', { static: false})
  public mapElement: ElementRef;

  @Input()
  public apikey: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;




  // Propiedades del mapa
  public map: any;
  miMarker: any;
  platform: any;
  defaultLayers: any;
  ui: any;

  // Iconos de los markers
  iconRepartidor = new H.map.Icon(URL_REPARTIDOR, {size: {w: 56, h: 56}});
  iconTienda = new H.map.Icon(URL_TIENDA, {size: {w: 56, h: 56}});
  iconPedido = new H.map.Icon(URL_PEDIDO, {size: {w: 56, h: 56}});
  // Variables de los pedidos
  pedidos: Pedido[] = [];
  pedidosTienda: Pedido[] = [];
  pedido: Pedido;
  // Variable online
  online: boolean = true;

  // variable loading
  loading: boolean = true;
  // Mi posicion
  myActualPosition = new Posicion();
  markerPedido: any;
  posicionSuscripcion: Subscription;
  posicionFinal: any;

  // Inyectamos los servicios que necesitamos
// tslint:disable-next-line: max-line-length
constructor(public here: HeremapService, public pedidoS: PedidoService, public usuarioService: UserService, private pushNotifications: PushNotificationsService) {
  this.pushNotifications.requestPermission();
}


ngOnInit() {
    // Instanciamos los iconos:
    this.iconRepartidor = new H.map.Icon(URL_REPARTIDOR, {size: {w: 56, h: 56}});
    this.iconTienda = new H.map.Icon(URL_TIENDA, {size: {w: 56, h: 56}});
    this.iconPedido = new H.map.Icon(URL_PEDIDO, {size: {w: 56, h: 56}});

    // Paso 1: Inicializamos la comunicacion con la plataforma --> No poner la apikey entre comas
    this.platform = new H.service.Platform({
      apikey: this.apikey,
    });
    this.defaultLayers = this.platform.createDefaultLayers();

    // Añadiendo el timer hacemos que lea del observable al inicio y cada 10 segundos
    this.posicionSuscripcion = timer(0, 5000)
    .subscribe( () => {

        console.log('Leyendo coordenadas');
        this.here.getLocation().subscribe((coordenadas) => {
        this.myActualPosition.latitud = coordenadas.latitud;
        this.myActualPosition.longitud = coordenadas.longitud;

        this.here.updateRepartidor( this.myActualPosition.latitud, this.myActualPosition.longitud);


        // tslint:disable-next-line: max-line-length
        this.miMarker = new H.map.Marker({lat: this.myActualPosition.latitud, lng: this.myActualPosition.longitud}, {icon: this.iconRepartidor});
        this.refreshMap();
      });
    });
  }


  public ngAfterContentInit() {

    // Pongo el Timeout para que el programa tenga tiempo de conseguir mi posicion
    setTimeout(() => {
      this.loading = false;

      // Paso 2: Inicializamos el mapa
      this.map = new H.Map(
        this.mapElement.nativeElement,
        this.defaultLayers.vector.normal.map,
        {
          zoom: 4,
          center: { lat: 40.4165000, lng: -3.7025600}
        }
      );

      // Paso 3: Hacemos que el mapa sea interactivo
      let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers, 'es-ES');

      // Una vez instanciado el mapa empezamos a cargar los pedidos y las tiendas


      this.cargarPedidos(this.iconPedido);
      this.añadirTiendas();

      this.here.addInfoBubble(this.map, this.here.getRepartidor(), 'repartidor', this.iconRepartidor, this.ui );
    }, 2000);

  }

  // Funcion que se encarga de cargar los pedidos en el mapa
  // Si el repartidor se encuentra repartiendo un pedido, solo mostrara en el mapa el marker del pedido que esta llevando
  // En cambio si el repartidor no lleva ningun pedido encima el programa mostrara todos los pedidos de la tienda a la que esta asignado
  cargarPedidos(icon: any) {
    if (this.ui != undefined) {
      // Cargamos nuestros arrays uno con todos los pedidos pendientes y el otro con los pedidos de la tienda seleccionada
      this.pedidos = this.pedidoS.pedidosPendientes();
      this.pedidosTienda = this.pedidoS.getPedidosTienda(localStorage.getItem('hub'));
      // Compruebo si el repartidor esta llevando un pedido
      if (this.usuarioService.getUsuario().pedido !== undefined) {
        this.map.addObject(this.markerPedido);

      } else {
        // Si no esta llevando ningun pedido muestro todos los pedidos del hub al que esta asignado
        // tslint:disable-next-line: prefer-for-of
        for ( let i = 0; i < this.pedidos.length; i++) {
          let pedido = this.pedidos[i];
          // Si el hub es igual a 'all' entonces muestra los pedidos de todas las tiendas
          if (localStorage.getItem('hub') === 'all') {
            // tslint:disable-next-line: max-line-length
            this.here.addInfoBubble(this.map, {latitud: pedido.lugarEntrega.latitud, longitud: pedido.lugarEntrega.longitud }, pedido.idPedido.toString(), this.iconPedido, this.ui );
          } else {
            // Si no lo es muestra todos los pedidos de la tienda
            if ( pedido.tienda === localStorage.getItem('hub')) {
              // tslint:disable-next-line: max-line-length
              this.here.addInfoBubble(this.map, {latitud: pedido.lugarEntrega.latitud, longitud: pedido.lugarEntrega.longitud }, pedido.idPedido.toString(), this.iconPedido, this.ui );
          }
        }
      }
    }

    }
  }

  // Este metodo se llama cuando el repartidor ha llegado a su destino
  // Comprueba si esta a menos de 100m
  // Le asigna al pedido una fecha de llegada y quita el pedido al repartidor
  entregarPedido() {
      if (this.markerPedido !== undefined) {
        if (this.here.getDistance(this.miMarker, this.markerPedido)) {
          this.posicionFinal = undefined;
          this.pedidoS.llegada(this.usuarioService.getUsuario().pedido);
          this.usuarioService.entregado();
          this.usuarioService.resetPedido();
          this.notify('Congratulations! You delivered the order in time!');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al entregar el pedido',
            text: 'Debes estar a menos de 100 metros para poder recoger el pedido'
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al entregar el pedido',
          text: 'No llevas ningun pedido!'
        });
      }
    }
  // Funcion que borra todo lo que hay en el mapa
  borrarTodo() {
    if (this.map !== undefined && this.map !== null) {

      this.map.removeObjects(this.map.getObjects());

    }
  }
  // Funcion llamada cuando el repartidor va a recoger el pedido de la tienda
  // Per calcular la distancia entre el repartidor i la tenda necessite el marker dels dos
  recogerPedido(markerRepartidor, form) {

    let tiendaMarker: any;
    let pedidoSeleccionat = this.pedidoS.getPedidoById(form.value.pedidoSeleccionado);

    // Primer hem de comprobar quina es la tenda del pedido
    if (pedidoSeleccionat !== undefined && this.usuarioService.getUsuario().pedido == undefined) {
      if ( this.here.getMarkerTienda().length <= 1) {

        // Si el array retornat sols te un marker es perque el repartidor sols ha seleccionat una tenda
        tiendaMarker = this.here.getMarkerTienda()[0];


    } else {

      switch (pedidoSeleccionat.tienda) {
        case 'oliva':     tiendaMarker = new H.map.Marker({lat: TIENDA_OLIVA.latitud, lng: TIENDA_OLIVA.longitud});
                          break;
        case 'gandia':    tiendaMarker = new H.map.Marker({lat: TIENDA_GANDIA.latitud, lng: TIENDA_GANDIA.longitud});
                          break;
        case 'tavernes':  tiendaMarker = new H.map.Marker({lat: TIENDA_TAVERNES.latitud, lng: TIENDA_TAVERNES.longitud});
                          break;
      }
    }
    // Una volta ja sabem de quina tenda es tracta aleshores fem les comprobacions de la distancia
    // Comprobem que es troba a menys de 100m

      if (this.here.getDistance(markerRepartidor, tiendaMarker) ) {
        // Una vegada validada la distancia i la tenda li posem la posicionFinal per a que faja la ruta
        this.posicionFinal = pedidoSeleccionat.lugarEntrega;
        // Assignem el pedido al repartidor
        this.usuarioService.asignarPedido(form.value.pedidoSeleccionado);
        // Guardem el pedido
        this.pedido = this.pedidoS.getPedidoById(form.value.pedidoSeleccionado);
        if (this.pedido !== undefined) {
          // tslint:disable-next-line: max-line-length
          this.markerPedido = new H.map.Marker({lat: this.pedido.lugarEntrega.latitud, lng: this.pedido.lugarEntrega.longitud}, {icon: this.iconPedido});
          this.markerPedido.setData('Repartidor en camino!');
          // Luego deberemos llamar a la funcion salida del pedidos Service
          this.pedidoS.salida(form.value.pedidoSeleccionado, this.usuarioService.getUsuario().usuario);
          this.notify('Hurry! You have to deliver the order!');
          this.here.calcularRuta(this.posicionFinal, this.map, this.platform);
        }
      } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al recoger el pedido',
            text: 'Debes estar a menos de 100 metros para poder recoger el pedido'
          });
      }

    } else {
      if (this.usuarioService.getUsuario().pedido !== undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Error al recoger el pedido',
          text: 'Ya llevas un pedido'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al recoger el pedido',
          text: 'No has seleccionado ningun pedido'
        });
      }
    }

  }



  // Funcion que refresca el mapa para actualizar las posiciones de los marcadores
  refreshMap( ) {

    if (this.here.positionChange()) {

      this.borrarTodo();
      let infoRepartidor = '';
      if (this.usuarioService.getUsuario().pedido !== undefined) {
        infoRepartidor += 'En camino';
      } else {
        infoRepartidor += 'Volviendo a por un pedido';
      }

      if ( this.map) {

        this.cargarPedidos(this.iconPedido);
        // Añadimos al repartidor
        this.here.addInfoBubble(this.map, this.here.getRepartidor(), infoRepartidor, this.iconRepartidor, this.ui );
        this.añadirTiendas();
        // Si volem posar els incidents de trafic que hi ha en les carreteres
        // this.map.addLayer(this.defaultLayers.vector.normal.trafficincidents);
      }

      if (this.posicionFinal !== undefined ) {

        this.here.calcularRuta(this.posicionFinal, this.map, this.platform);
      }
    }
      }

  // Funcion que añade las tiendas al mapa segun el hub seleccionado por el usuario
  añadirTiendas() {
        // Segun el hub añadiremos su marker
        if (this.ui != undefined) {
          switch (localStorage.getItem('hub')) {


            case 'oliva':     this.here.addInfoBubble(this.map, TIENDA_OLIVA, INFO_OLIVA, this.iconTienda, this.ui);
                              break;

            case 'gandia':    this.here.addInfoBubble(this.map, TIENDA_GANDIA, INFO_GANDIA, this.iconTienda, this.ui);
                              break;

            case 'tavernes':  this.here.addInfoBubble(this.map, TIENDA_TAVERNES, INFO_TAVERNES, this.iconTienda, this.ui);
                              break;

            case 'all':     this.here.addInfoBubble(this.map, TIENDA_OLIVA, INFO_OLIVA, this.iconTienda, this.ui);
                            this.here.addInfoBubble(this.map, TIENDA_GANDIA, INFO_GANDIA, this.iconTienda, this.ui);
                            this.here.addInfoBubble(this.map, TIENDA_TAVERNES, INFO_TAVERNES, this.iconTienda, this.ui);
                            break;
          }
        }
  }
  ngOnDestroy() {
      // Elimino la suscripcion al observable de mi posicion
      this.usuarioService.resetPedido();
      this.posicionSuscripcion.unsubscribe();
    }

  // Funcion llamada para crear una notificacion, recibe como parametro el texto de la notificacion
  notify(texto: string) {

    let options = {
      body: texto
    };
    this.pushNotifications.create('webmpcaptains', options).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  }






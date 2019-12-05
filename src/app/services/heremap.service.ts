import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, interval, timer } from 'rxjs';
import { Posicion } from '../models/posicion';
import { URL_REPARTIDOR, TIENDA_OLIVA, URL_TIENDA, TIENDA_GANDIA, TIENDA_TAVERNES } from '../config/config';
import { DeviceDetectorService } from 'ngx-device-detector';



declare var H: any;
@Injectable({
  providedIn: 'root'
})
export class HeremapService {

  markers: any [] = [];

  markerRepartidor: any;
  myLat: number;
  myLong: number;
  posicionAnterior: Posicion = new Posicion();
  posicionActual: Posicion = new Posicion();
  minDistance = 100;
  android: any;

constructor( public router: Router, public http: HttpClient, private deviceService: DeviceDetectorService) { }

// Metodo que retorna un observable que muestra la posicion actual del repartidor

getLocation(): Observable<any> {


  if (this.posicionActual != null || this.posicionActual != undefined) {

    this.posicionAnterior.latitud = this.posicionActual.latitud;
    this.posicionAnterior.longitud = this.posicionActual.longitud;

  }

  if (navigator.userAgent == 'hcapp') {

    this.posicionActual.latitud =  window['android'].getLatitude();
    this.posicionActual.longitud = window['android'].getLongitude();


    // Ahora como ya tenemos la posicion actual tenemos que comprobar la distancia
    // entre la anterior posicion y esta
    return Observable.create(observer => {
        // tslint:disable-next-line: max-line-length
        if (this.distance(this.posicionAnterior.latitud, this.posicionAnterior.longitud, this.posicionActual.latitud, this.posicionActual.longitud) > 10) {

        observer.next(this.posicionActual);

        observer.complete();

        } else {
          observer.next(null);
          observer.complete();
        }
      });




  } else {

    return Observable.create(observer => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition( (position) => {


          this.posicionActual.latitud = position.coords.latitude;
          this.posicionActual.longitud = position.coords.longitude;
          this.myLat = position.coords.latitude;
          this.myLong = position.coords.longitude;
          observer.next(this.posicionActual);
          observer.complete();
        },
          (error) => observer.error(error)
        );
      } else {
        observer.error('Unsupported Browser');
      }
    });
  }
}





// Funcion que retorna true si la distancia entre los puntos A y B es menor a minDistance y retorna false si la distancia es mayor
getDistance( positionA, positionB) {

  if (positionA.getGeometry().distance(positionB.getGeometry()) < this.minDistance) {
     return true;
   }

  return false;
}


// Funcion que lee del localstorage la variable 'hub' en caso de ser igual a oliva, tavernes o Gandia, devuelve un array con solo un marker
// en la posicion de la tienda.
// En caso de ser 'all' retornara un array de markers con todas las tiendas.


getMarkerTienda() {
  let iconTienda = new H.map.Icon(URL_TIENDA, {size: {w: 56, h: 56}});
  let markers: any[] = [];
  let marker: any;

  switch (localStorage.getItem('hub')) {
    case 'oliva': marker = new H.map.Marker({lat: TIENDA_OLIVA.latitud, lng: TIENDA_OLIVA.longitud}, {icon: iconTienda});
                  markers.push(marker);
                  return markers;
                  break;

    case 'gandia': marker = new H.map.Marker({lat: TIENDA_GANDIA.latitud, lng: TIENDA_GANDIA.longitud}, {icon: iconTienda});
                   markers.push(marker);
                   return markers;
                   break;

    case 'tavernes': marker = new H.map.Marker({lat: TIENDA_TAVERNES.latitud, lng: TIENDA_TAVERNES.longitud}, {icon: iconTienda});
                     markers.push(marker);
                     return markers;
                     break;
    case 'all':     let markerOliva = new H.map.Marker({lat: TIENDA_OLIVA.latitud, lng: TIENDA_OLIVA.longitud}, {icon: iconTienda});
                    let markerGandia = new H.map.Marker({lat: TIENDA_GANDIA.latitud, lng: TIENDA_GANDIA.longitud}, {icon: iconTienda});
                    // tslint:disable-next-line: max-line-length
                    let markerTavernes = new H.map.Marker({lat: TIENDA_TAVERNES.latitud, lng: TIENDA_TAVERNES.longitud}, {icon: iconTienda});
                    markers.push(markerOliva);
                    markers.push(markerGandia);
                    markers.push(markerTavernes);
                    return markers;
                    break;

  }

}

// creates a marker and adds it to a group
addMarkerToGroup(group, coordinate, html, icon?: any) {

  let marker = new H.map.Marker(coordinate, {icon});
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);

}

addInfoBubble(map, position, info, icon, ui) {


  let group = new H.map.Group();
  map.addObject(group);

  // Add a 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', (evt) => {
    // Event target is the marker itself, group is a parent event target
    // for all object that it contains
    let bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
      // read custom data
      content: evt.target.getData()
    });
    // Show info bubble
    ui.addBubble(bubble);
  }, false);


  this.addMarkerToGroup(group, {lat: position.latitud, lng: position.longitud}, info, icon);
}

deleteMarker( marker: any, mapa: any) {

    if ( marker instanceof H.map.Marker) {
      mapa.removeObjects(marker);

    }
  }

updateRepartidor(lat: number, lng: number) {
  let iconRepartidor = new H.map.Icon(URL_REPARTIDOR, {size: {w: 56, h: 56}});
  this.markerRepartidor = new H.map.Marker({lat, lng}, {icon: iconRepartidor});
}

getRepartidor() {
  let pos = {latitud: this.posicionActual.latitud, longitud: this.posicionActual.longitud};
  return pos;
}

calcularRuta(posicionFinal, map, platform) {
  // Creando los parametros para la peticion de la ruta
let routingParameters = {
    // The routing mode:
    'mode': 'fastest;car',
    // El punto inicial de la ruta:
    'waypoint0': 'geo!' + this.posicionActual.latitud + ',' + this.posicionActual.longitud,
    // The end point of the route
    'waypoint1': 'geo!' + posicionFinal.latitud + ',' + posicionFinal.longitud,
    'representation': 'display'
  };
  // Define a callback function to process the routing response
let onResult = (result) => {
    // tslint:disable-next-line: one-variable-per-declaration
    let route,
    routeShape,
    startPoint,
    endPoint,
    linestring;

    if (result.response.route) {
      // Pick the first route from the response:
      route = result.response.route[0];
      // Pick the route's shape:
      routeShape = route.shape;

      // Create a linestring to use as a point for the route line
      linestring = new H.geo.LineString();

      // push all the pointsin the shape into the linestring:
      routeShape.forEach((point) => {
        let parts = point.split(',');
        linestring.pushLatLngAlt(parts[0], parts[1]);
      });

      // Retrieve the mapped positions of the requested waypoints:
      startPoint = route.waypoint[0].mappedPosition;
      endPoint = route.waypoint[1].mappedPosition;

      // Create a polyline to display the route
      let routeLine = new H.map.Polyline(linestring, { style: { strokeColor: 'blue', lineWidth: 3}});

      // Create a patterned polyline:
      let routeArrows = new H.map.Polyline(linestring, {
        style: {
          lineWidth: 10,
          fillColor: 'white',
          strokeColor: 'rgba(255, 255, 255, 1)',
          lineDash: [0, 2],
          lineTailCap: 'arrow-tail',
          lineHeadCap: 'arrow-head'
        }
      });

      // Aci el tutorial crea un marker per als dos punts el d'inici i el final pero vamos que passem q te cagas
      map.addObjects([routeLine, routeArrows]);


    }

  };


  // Get an instance of the routing service
let router = platform.getRoutingService();

  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function
  // (called if a communication error occurs):
router.calculateRoute(routingParameters, onResult, (error) => {
    alert(error.message);
  });

}
distance(lat1, lon1, lat2, lon2) {


if (lat1 != undefined && lat2 != undefined && lon1 != undefined && lon2 != undefined) {
  if ((lat1 === lat2) && (lon1 === lon2)) {
    return 0;
  } else {
      let radlat1 = Math.PI * lat1 / 180;
      let radlat2 = Math.PI * lat2 / 180;
      let theta = lon1 - lon2;
      let radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      dist = dist * 1.609344 ; // Distancia en kilometres
      dist = dist * 1000; // Ho passem a metres
      console.log('Distancia: ' + dist.toFixed(2));
      return dist;
  }

} else {
  return 0;
}
}

mostrarPosiciones() {
  console.log('Posicion Anterior: ');
  console.log('Latitud: ' + this.posicionAnterior.latitud);
  console.log('Longitud: ' + this.posicionAnterior.longitud);
  console.log('Posicion Actual: ');
  console.log('Latitud: ' + this.posicionActual.latitud);
  console.log('Longitud: ' + this.posicionActual.longitud);
}

// Metodo que retorna si la posicion actual ha cambiado mas de 10 metros de la anterior
positionChange(): boolean {


    // tslint:disable-next-line: max-line-length
    if (this.posicionAnterior.latitud !== this.posicionActual.latitud || this.posicionAnterior.longitud !== this.posicionActual.latitud && this.distance(this.posicionAnterior.latitud, this.posicionAnterior.longitud, this.posicionActual.latitud, this.posicionActual.longitud) > 10  ) {

      return true;
      } else {
        return false;
      }








    return false;
}
}

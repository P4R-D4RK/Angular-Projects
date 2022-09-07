import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor( private placeService: PlacesService,
               private mapService: MapService) { }


  goToMyLocation() {
    
    if( !this.placeService.isUserLocationReady ) throw console.error('No hay ubicación de usuario');
    if( !this.mapService.isMapReady ) throw console.error('No se ha inicializado el mapa');
    

    this.mapService.flyTo( this.placeService.userLocation! );

  }

}

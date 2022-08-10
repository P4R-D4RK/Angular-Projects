import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: [ ]
})
export class BasicosComponent {

  nombreLower: string = 'luis';
  nombreUpper: string = 'LUIS';
  nombreCompleto: string = 'lUiS PolInA';

  fecha: Date = new Date(); //el dia de hoy
  
}

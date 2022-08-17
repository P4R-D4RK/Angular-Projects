import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  mensaje: string = 'Este campo es necesario';
  color: string = 'red';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.mensaje = Math.random().toString(36).substring(0,10); 
  }

  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}

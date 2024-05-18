import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css',
})
export class IniciarsesionComponent {
  formularioCredenciales = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(''),
  });
  manejarEnvio() {
    console.log('formularioCredenciales: ', this.formularioCredenciales.value);
  }
}

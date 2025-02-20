import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @description
 * Componente que gestiona el formulario de contacto de la aplicación.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm: FormGroup; // Formulario
  mensajeExito: string = ''; // Mensaje de confirmación
  enviado: boolean = false; // Para mostrar el mensaje

  /**
   * Constructor del componente que inicializa el formulario con validaciones.
   * 
   * @param fb FormBuilder para construir el formulario reactivo.
   */
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]], // Mínimo 3 caracteres
      email: ['', [Validators.required, Validators.email]], // Email válido
      mensaje: ['', [Validators.required, Validators.minLength(10)]] // Mínimo 10 caracteres
    });
  }

  /**
   * Método que se ejecuta al enviar el formulario.
   * Si el formulario es válido, se muestra un mensaje de éxito y el formulario se limpia.
   * Además, el mensaje de éxito se oculta después de 2 segundos.
   */
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      this.mensajeExito = 'Mensaje enviado con éxito.';
      this.enviado = true;

      // Limpiar el formulario después de enviarlo
      this.contactForm.reset();

      // Ocultar el mensaje de éxito después de 2 segundos
      setTimeout(() => {
        this.enviado = false;
      }, 2000);
    }
  }
}

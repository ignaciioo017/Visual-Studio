import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @description
 * Componente que gestiona el formulario de la cesta de compras, donde el usuario ingresa sus datos para proceder con el pago
 */

@Component({
  selector: 'app-formulario-cesta',
  templateUrl: './formulario-cesta.component.html',
  styleUrls: ['./formulario-cesta.component.css']
})
export class FormularioCestaComponent {
  mensaje: string = ''; // Mensaje de confirmación
  formData: any = { // Datos del formulario
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    cp: '',
    tarjeta: '',
    expiracion: '',
    cvv: ''
  };

  errores: any = {}; // Errores de validación

  /**
   * Constructor del componente.
   * 
   * @param router Router para realizar redirecciones después de enviar el formulario.
   */
  constructor(private router: Router) {}

  /**
   * Método que valida los campos del formulario.
   * 
   * @returns boolean Retorna true si no hay errores de validación, false si hay errores.
   */
  validarFormulario(): boolean {
    this.errores = {};

    // Validar nombre
    if (!this.formData.nombre.trim()) {
      this.errores.nombre = 'El nombre es obligatorio';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.formData.email.trim()) {
      this.errores.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(this.formData.email)) {
      this.errores.email = 'Correo electrónico no válido';
    }

    // Validar teléfono
    const telefonoRegex = /^[0-9]{9,12}$/;
    if (!this.formData.telefono.trim()) {
      this.errores.telefono = 'El teléfono es obligatorio';
    } else if (!telefonoRegex.test(this.formData.telefono)) {
      this.errores.telefono = 'Número de teléfono inválido';
    }

    // Validar dirección
    if (!this.formData.direccion.trim()) {
      this.errores.direccion = 'La dirección es obligatoria';
    }

    // Validar ciudad
    if (!this.formData.ciudad.trim()) {
      this.errores.ciudad = 'La ciudad es obligatoria';
    }

    // Validar código postal
    const cpRegex = /^[0-9]{4,6}$/;
    if (!this.formData.cp.trim()) {
      this.errores.cp = 'El código postal es obligatorio';
    } else if (!cpRegex.test(this.formData.cp)) {
      this.errores.cp = 'Código postal inválido';
    }

    // Validar número de tarjeta
    const tarjetaRegex = /^[0-9]{16}$/;
    if (!this.formData.tarjeta.trim()) {
      this.errores.tarjeta = 'El número de tarjeta es obligatorio';
    } else if (!tarjetaRegex.test(this.formData.tarjeta)) {
      this.errores.tarjeta = 'Número de tarjeta inválido';
    }

    // Validar fecha de expiración
    if (!this.formData.expiracion.trim()) {
      this.errores.expiracion = 'La fecha de expiración es obligatoria';
    }

    // Validar CVV
    const cvvRegex = /^[0-9]{3,4}$/;
    if (!this.formData.cvv.trim()) {
      this.errores.cvv = 'El CVV es obligatorio';
    } else if (!cvvRegex.test(this.formData.cvv)) {
      this.errores.cvv = 'CVV inválido';
    }

    return Object.keys(this.errores).length === 0;
  }

  /**
   * Método que se ejecuta al enviar el formulario.
   * Si el formulario es válido, muestra un mensaje de éxito y redirige al usuario a la página de inicio.
   */
  onSubmit() {
    if (this.validarFormulario()) {
      this.mensaje = 'Pedido realizado correctamente';

      // Redirigir después de unos segundos
      setTimeout(() => {
        this.router.navigate(['/inicio']);
      }, 2000);
    }
  }
}

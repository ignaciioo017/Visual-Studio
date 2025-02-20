import { Component } from '@angular/core';
import { ProductoServicio } from '../../service/producto.servicio/producto.servicio.component';
import { Router } from '@angular/router';

/**
 * @description
 * Componente que gestiona la cesta
 * 
 * Este componente se encarga de mostrar los productos añadidos al carrito, calcular el precio
 * total de los productos en el carrito y permitir la realización del pago. Si el carrito está vacío,
 * muestra un mensaje de advertencia antes de proceder al pago.
 * 
 */
@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent {
  carrito: any[] = []; // Lista de productos en el carrito

  constructor(private productoServicio: ProductoServicio, private router: Router) {}

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene los productos añadidos al carrito a través del servicio `ProductoServicio`.
   */
  ngOnInit() {
    this.carrito = this.productoServicio.obtenerCarrito();
  }

  /**
   * Método que calcula el precio total de los productos en el carrito.
   * 
   * @returns {number} El precio total de los productos en el carrito.
   */
  obtenerPrecioTotal(): number {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

  /**
   * Método que gestiona el proceso de pago.
   * Si el carrito está vacío, muestra una advertencia. Si no, simula la realización del pago
   * y navega a la página de formulario de la cesta.
   */
  realizarPago() {
    if (this.carrito.length === 0) {
      alert('Tu carrito está vacío. Añade productos antes de proceder al pago.');
      return;
    }

    alert('Pago realizado');
    this.router.navigate(['/formulario-cesta']);
  }
}

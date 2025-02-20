import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente que representa el encabezado de la aplicación.
 * 
 * Este componente es responsable de mostrar la barra de navegación superior de la aplicación.
 * Generalmente incluye enlaces a las páginas principales de la aplicación y puede resaltar
 * la sección activa en la barra de navegación.
 * 
 * El componente utiliza el enrutador de Angular para gestionar la navegación entre rutas.
 * 
 * Métodos:
 * - `isActive(route: string): boolean`: Verifica si la ruta proporcionada es la ruta activa.
 * - `navigate(route: string): void`: Realiza la navegación hacia la ruta proporcionada.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  /**
   * Método que verifica si la ruta proporcionada es la ruta activa.
   * 
   * @param route La ruta que se quiere verificar.
   * @returns `true` si la ruta proporcionada es la ruta activa, `false` en caso contrario.
   */
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  /**
   * Método que realiza la navegación a la ruta proporcionada.
   * 
   * @param route La ruta a la que se quiere navegar.
   */
  navigate(route: string): void {
    this.router.navigate([route]);
  }
}

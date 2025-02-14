import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoServicio } from '../../service/producto.servicio/producto.servicio.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  productos: any[] = []; // Lista de productos

  /**
   * Constructor que inyecta los servicios necesarios.
   * @param productoServicio Servicio para gestionar productos
   * @param router Servicio de navegación
   */
  constructor(private productoServicio: ProductoServicio, private router: Router) {}

  /**
   * Inicializa los productos al cargar el componente.
   */
  ngOnInit() {
    this.productos = this.productoServicio.obtenerProductos();
  }

  /**
   * Navega a la página de detalles del producto seleccionado.
   * @param producto Producto seleccionado
   */
  verDetalles(producto: any) {
    this.productoServicio.seleccionarProducto(producto);
    this.router.navigate(['/producto', producto.id]);
  }
}

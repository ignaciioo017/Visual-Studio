import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoServicio } from '../../service/producto.servicio/producto.servicio.component';

/**
 * @description
 * Componente que muestra los detalles de un producto y permite agregarlo al carrito de compras.
 */
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto: any; // Información del producto
  mensaje: string = ''; // Variable para mostrar el mensaje

  /**
   * Constructor del componente.
   * 
   * @param route ActivatedRoute para obtener el ID del producto desde la ruta.
   * @param router Router para redirigir al usuario después de agregar el producto al carrito.
   * @param productoService ProductoServicio para obtener la información del producto y gestionarlo en el carrito.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoServicio
  ) {}

  /**
   * Método que se ejecuta cuando el componente es inicializado.
   * Obtiene el ID del producto desde la ruta y lo busca usando el servicio de productos.
   */
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.obtenerProductoPorId(id);
  }

  /**
   * Método que agrega el producto al carrito y muestra un mensaje de éxito.
   * Después de agregar el producto, redirige al usuario al catálogo después de 2 segundos.
   */
  agregarAlCarrito() {
    this.productoService.agregarAlCarrito(this.producto);  // Agrega el producto al carrito

    // Mostrar el mensaje de éxito en la parte superior
    this.mensaje = `${this.producto.nombre} agregado al carrito`;

    // Redirigir al catálogo después de unos segundos (3 segundos por ejemplo)
    setTimeout(() => {
      this.router.navigate(['/catalogo']);
    }, 2000);
  }
}

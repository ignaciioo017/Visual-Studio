import { Injectable } from '@angular/core';

/**
 * @description
 * Servicio donde tenemos creados los productos y un array para pasarlos a la cesta
 */
@Injectable({
  providedIn: 'root'
})
export class ProductoServicio {
  /** Este es el array donde se encuentran los productos */
  private productos = [
    { id: 1, nombre: 'Major Craft Eden 50S 4.5g', descripcion: 'Señuelo especifico para mar', imagen: '/Image/p1.jpg', precio: 12.99 },
    { id: 2, nombre: 'Carrete Shimano', descripcion: 'Carrete de alta precisión para pesca en agua dulce.', imagen: '/Image/p2.png', precio: 45.00 },
    { id: 3, nombre: 'Carrete Shimano', descripcion: 'Carrete Shimano Vanford 2500S hg.', imagen: '/Image/p3.png', precio: 75.00 },
    { id: 4, nombre: 'Señuelo para mar', descripcion: 'Duraflot minniw classic 50cm', imagen: '/Image/p4.png', precio: 7.99 },
    { id: 5, nombre: 'Señuelo para mar', descripcion: 'Señuelo para la pesca de choco, sepia...', imagen: '/Image/p5.png', precio: 5.99 },
    { id: 6, nombre: 'Plomos', descripcion: 'Plomos de barilla de 120g.', imagen: '/Image/p6.png', precio: 2.99 },
    { id: 7, nombre: 'Caña y carrete', descripcion: 'Pack de caña telescópica con carrete ', imagen: '/Image/p7.png', precio: 119.99 },
    { id: 8, nombre: 'Caña de pesca', descripcion: 'Caña de 2.1m de 2 secciones para mar', imagen: '/Image/p8.png', precio: 75 },
    { id: 9, nombre: 'Vinilo pesca', descripcion: 'Vinilo de 7cm y 5g marron para mar', imagen: '/Image/p9.png', precio: 1.99 },
    { id: 10, nombre: 'Vinilo pesca', descripcion: 'Vinilo de 10cm y 15g', imagen: '/Image/p10.png', precio: 89.99 }
  ];

  private carrito: any[] = [];  // Carrito para almacenar los productos agregados

  private productoSeleccionado: any = null;

  /**
   * Constructor del servicio.
   */
  constructor() {}

  /**
   * Obtiene la lista de productos disponibles en la tienda.
   * 
   * @returns Array de productos.
   */
  obtenerProductos() {
    return this.productos;
  }

  /**
   * Obtiene un producto específico por su ID.
   * 
   * @param id ID del producto que se desea obtener.
   * @returns El producto con el ID especificado o undefined si no se encuentra.
   */
  obtenerProductoPorId(id: number) {
    return this.productos.find(prod => prod.id === id);
  }

  /**
   * Selecciona un producto específico para ser mostrado o manipulado.
   * 
   * @param producto Producto que se desea seleccionar.
   */
  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

  /**
   * Obtiene el producto seleccionado.
   * 
   * @returns El producto seleccionado o null si no se ha seleccionado ningún producto.
   */
  obtenerProductoSeleccionado() {
    return this.productoSeleccionado;
  }

  /**
   * Agrega un producto al carrito de compras.
   * 
   * @param producto Producto que se desea agregar al carrito.
   */
  agregarAlCarrito(producto: any) {
    this.carrito.push(producto);  // Agrega el producto al carrito
  }

  /**
   * Obtiene los productos actualmente en el carrito de compras.
   * 
   * @returns Array de productos en el carrito.
   */
  obtenerCarrito() {
    return this.carrito;  // Devuelve los productos en el carrito
  }
}

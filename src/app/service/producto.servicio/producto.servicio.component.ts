import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})

export class ProductoServicio {
  /**Este es el array donde ese encuentran los productos */
  private productos = [
    {
      id: 1,
      nombre: 'Major Craft Eden 50S 4.5g',
      descripcion: 'Señuelo especifico para mar',
      imagen: 'Image/p1.jpg',
      precio: 12.99,
    },
    {
      id: 2,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete de alta precisión para pesca en agua dulce.',
      imagen: 'Image/p2.png',
      precio: 45.00,
    },
    {
      id: 3,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete Shimano Vanford 2500S hg.',
      imagen: 'Image/p3.png',
      precio: 75.00,
    },
    {
      id: 4,
      nombre: 'Señuelo para mar',
      descripcion: ' DURAFLOT MINNOW CLASSIC 50C:',
      imagen: 'Image/p4.png',
      precio: 7.99,
    },
    {
      id: 5,
      nombre: 'Señuelo para mar',
      descripcion: 'DURAFLOT MINNOW CLASSIC 50C:',
      imagen: 'Image/p5.png',
      precio: 5.99,
    },
    {
      id: 6,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete de alta precisión para pesca en agua dulce.',
      imagen: 'Image/p6.png',
      precio: 89.99,
    },
    {
      id: 7,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete de alta precisión para pesca en agua dulce.',
      imagen: 'Image/p7.png',
      precio: 89.99,
    },
    {
      id: 8,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete de alta precisión para pesca en agua dulce.',
      imagen: 'Image/p8.png',
      precio: 89.99,
    },
    {
      id: 9,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete de alta precisión para pesca en agua dulce.',
      imagen: 'Image/p9.png',
      precio: 89.99,
    },
    {
      id: 10,
      nombre: 'Carrete Shimano',
      descripcion: 'Carrete de alta precisión para pesca en agua dulce.',
      imagen: 'Image/p10.png',
      precio: 89.99,
    }
  ];

  private productoSeleccionado: any = null;

  constructor() {}

  obtenerProductos() {
    return this.productos;
  }

  obtenerProductoPorId(id: number) {
    return this.productos.find(prod => prod.id === id);
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

  obtenerProductoSeleccionado() {
    return this.productoSeleccionado;
  }
}
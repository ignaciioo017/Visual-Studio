import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoServicio } from '../../service/producto.servicio/producto.servicio.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoServicio
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.obtenerProductoPorId(id);
  }

  agregarAlCarrito() {
    alert(`${this.producto.nombre} agregado al carrito`);
  }
}

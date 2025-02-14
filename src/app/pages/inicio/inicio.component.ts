import { Component, OnInit } from '@angular/core';
import { MareasService } from '../../service/Api/mareas.servicio';

/**
 * Componente principal donde se muestran las mareas.
 * @component
 */
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  /**
   * Array que almacena la información de las mareas.
   * @type {any[]}
   */
  mareas: any[] = [];

  /**
   * ID del puerto para el cual se obtienen las mareas (Puerto de Cádiz).
   * @type {number}
   */
  idPuerto: number = 40;

  /**
   * Fecha en formato 'YYYYMMDD' para obtener las mareas.
   * @type {string}
   */
  fecha: string = '';

  /**
   * Constructor del componente.
   * @param {MareasService} mareasService - Servicio para obtener las mareas.
   */
  constructor(private mareasService: MareasService) {}

  /**
   * Método que se ejecuta al iniciar el componente.
   * Aquí se obtiene la fecha actual y se realiza la llamada al servicio para obtener las mareas.
   */
  ngOnInit(): void {
    // Obtener la fecha de hoy en formato 'YYYYMMDD'
    const fechaHoy = new Date();
    this.fecha = fechaHoy.toISOString().split('T')[0].replace(/-/g, ''); // Fecha actual en formato 'YYYYMMDD'

    // Llamada al servicio pasando la fecha actual y el puerto
    this.mareasService.obtenerMareas(this.idPuerto, this.fecha).subscribe(
      (data) => {
        if (data?.mareas?.datos?.marea) {
          this.mareas = data.mareas.datos.marea; // Extrae el array correcto
        } else {
          console.error('Formato de datos incorrecto:', data);
          this.mareas = []; // Evita errores si la API devuelve algo inesperado
        }
        console.log(this.mareas); // Ver los datos en la consola
      },
      (error) => {
        console.error('Error al obtener las mareas', error);
      }
    );
  }
}

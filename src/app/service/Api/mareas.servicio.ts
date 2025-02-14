import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class MareasService {
  // URL base para acceder al servicio de mareas.
  private apiUrl = 'https://ideihm.covam.es/api-ihm/getmarea?request=gettide';

  // Constructor para el servicio HttpClient
  constructor(private http: HttpClient) {}

  /**
   * Método para obtener los datos de mareas de un puerto específico en una fecha determinada.
   * @param idPuerto El ID del puerto para el cual se solicitan los datos de mareas.
   * @param fecha La fecha en formato adecuado para la consulta.
   * @returns 
   */
  obtenerMareas(idPuerto: number, fecha: string): Observable<any> {
    // Construye la URL a la API usando el ID del puerto y la fecha
    const url = `${this.apiUrl}&id=${idPuerto}&format=json&date=${fecha}`;
    
    // Realiza la petición a la API
    return this.http.get<any>(url);
  }
}

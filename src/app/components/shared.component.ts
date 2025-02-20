import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer';

/**
 * @module SharedModule
 * 
 * Este módulo contiene los componentes compartidos que pueden ser reutilizados en otras partes de la aplicación.
 */
@NgModule({
  /**
   * Declaraciones de los componentes que pertenecen a este módulo.
   * Estos componentes solo estarán disponibles dentro de este módulo.
   */
  declarations: [
    HeaderComponent,
    FooterComponent
  ],

  /**
   * Módulos que este módulo necesita para funcionar correctamente.
   */
  imports: [
    CommonModule,
    RouterModule
  ],

  /**
   * Componentes y directivas que se exportan para ser usados en otros módulos.
   * Los componentes exportados en este módulo estarán disponibles en cualquier otro módulo que lo importe.
   */
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }

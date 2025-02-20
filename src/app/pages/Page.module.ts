import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicioComponent } from "./inicio/inicio.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { CestaComponent } from "./cesta/cesta.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ProductoComponent } from "./producto/producto.component";
import { FormularioCestaComponent } from "./formulario-cesta/formulario-cesta.component";
import { SharedModule } from "../components/shared.component";
import { RouterModule } from '@angular/router';
import { ProductoServicio } from "../service/producto.servicio/producto.servicio.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

/**
 * @module PageModule
 * 
 * Este módulo agrupa todos los componentes relacionados con las páginas principales de la aplicación.
 * Los componentes gestionan las diferentes secciones de la tienda online, como el catálogo de productos, la cesta de compras, y el formulario de contacto.
 */
@NgModule({
    /**
     * Declaración de los componentes que forman parte de este módulo.
     * Estos componentes se utilizan en las páginas de la aplicación.
     */
    declarations: [
        InicioComponent,
        CatalogoComponent,
        CestaComponent,
        ContactoComponent,
        ProductoComponent,
        FormularioCestaComponent,
    ],

    /**
     * Módulos necesarios para que este módulo funcione correctamente.
     * Incluye módulos para formularios y enrutamiento.
     */
    imports: [
        CommonModule,  // Directivas comunes de Angular
        SharedModule,  // Módulo con componentes compartidos
        RouterModule,  // Enrutamiento
        FormsModule,   // Formularios reactivos y template-driven
        ReactiveFormsModule, // Formularios reactivos
    ],

    /**
     * Exporta los componentes para que puedan ser utilizados en otros módulos.
     */
    exports: [
        InicioComponent,
        CatalogoComponent,
        CestaComponent,
        ContactoComponent,
        ProductoComponent,
        FormularioCestaComponent,
    ], 

    /**
     * Servicios disponibles en este módulo.
     * En este caso, se exporta el servicio de productos.
     */
    providers: [ProductoServicio], 
    bootstrap: []
})
export class PageModule {}

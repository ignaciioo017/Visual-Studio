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


@NgModule({
    declarations:[
        InicioComponent,
        CatalogoComponent,
        CestaComponent,
        ContactoComponent,
        ProductoComponent,
        FormularioCestaComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule
    ],
    exports:[
        InicioComponent,
        CatalogoComponent,
        CestaComponent,
        ContactoComponent,
        ProductoComponent,
        FormularioCestaComponent,
    ], 
    providers: [ProductoServicio], 
    bootstrap: []

})
export class PageModule{}
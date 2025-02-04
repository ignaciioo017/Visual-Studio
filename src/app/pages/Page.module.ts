import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InicioComponent } from "./inicio/inicio.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { CestaComponent } from "./cesta/cesta.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ProductoComponent } from "./producto/producto.component";
import { FormularioCestaComponent } from "./formulario-cesta/formulario-cesta.component";

@NgModule({
    declarations:[
        InicioComponent,
        CatalogoComponent,
        CestaComponent,
        ContactoComponent,
        ProductoComponent,
        FormularioCestaComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        InicioComponent,
        CatalogoComponent,
        CestaComponent,
        ContactoComponent,
        ProductoComponent,
        FormularioCestaComponent
    ]
})
export class PageModule{}
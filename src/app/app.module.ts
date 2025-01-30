import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { FormularioCestaComponent } from './pages/formulario-cesta/formulario-cesta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ServiceComponent } from './service/service.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { InterfaceComponent } from './interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    ProductComponent,
    CartComponent,
    InicioComponent,
    CatalogoComponent,
    ProductoComponent,
    CestaComponent,
    FormularioCestaComponent,
    ContactoComponent,
    ServiceComponent,
    InterfazComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

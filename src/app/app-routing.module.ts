import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { FormularioCestaComponent } from './pages/formulario-cesta/formulario-cesta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent }, // página de inicio
  { path: 'catalogo', component: CatalogoComponent }, // catálogo
  { path: 'producto/:id', component: ProductoComponent }, // producto
  { path: 'cesta', component: CestaComponent }, //cesta
  { path: 'formulario-cesta', component: FormularioCestaComponent }, // formulario cesta
  { path: 'contacto', component: ContactoComponent }, // formulario contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

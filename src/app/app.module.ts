import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/Page.module';
import { SharedModule } from './components/shared.component';
import { ProductoServicio } from './service/producto.servicio/producto.servicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule para usar HttpClient
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    SharedModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule 
  ],
  providers: [
    ProductoServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

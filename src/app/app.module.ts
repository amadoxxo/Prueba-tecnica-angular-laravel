import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    MostrarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

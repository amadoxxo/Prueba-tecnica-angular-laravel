import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
})
export class MostrarClientesComponent implements OnInit {

  public clientes:Cliente[] = []

  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {
    this.clienteService.getAllClientes().subscribe((data:Cliente[]) => {
      this.clientes = data
      console.log(this.clientes);
    })
  }

}

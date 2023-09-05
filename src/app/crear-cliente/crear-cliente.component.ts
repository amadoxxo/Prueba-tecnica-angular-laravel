import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
})
export class CrearClienteComponent implements OnInit {
  public form!: FormGroup;
  public clientes:Cliente[] = []

  constructor(private clienteService:ClienteService){}

  ngOnInit(): void {

    this.form = new FormGroup({
      idcliente: new FormControl(''),
      nombre: new FormControl(''),
      idciudad: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      creado: new FormControl(''),
      estado: new FormControl('')
    })
  }


  submit(){
    this.clienteService.createClientes(this.form.value)
      .subscribe(res => {
        console.log('Cliente creado correctamente');
      })
  }
}

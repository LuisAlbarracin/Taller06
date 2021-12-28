import { Carro } from './../../modelos/carro.model';
import { Component, OnInit } from '@angular/core';
import { ARREGLO_CARROS } from 'src/app/mocks/carro.mock';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  public titulo: string;
  public arregloCarros: Carro[];
  public carroSeleccionado:  Carro;


  constructor() {
    this.titulo = 'listado de carros';
    this.arregloCarros = ARREGLO_CARROS;
    this.carroSeleccionado = this.inicializarCarro();
   }

  ngOnInit(): void {
  }

  // ******* Métodos Obligatorios

  public inicializarCarro(): Carro{
    this.carroSeleccionado = new Carro(0, '', '', 0);
    return this.carroSeleccionado;
  }

  public seleccionarCarro(objCarro: Carro): void{
    this.carroSeleccionado = objCarro;
  }

  // ******** Logica del Negocio

  public crearCarro(): void{
    this.carroSeleccionado.codigo = this.arregloCarros.length + 1;
    this.arregloCarros.push(this.carroSeleccionado);
    this.inicializarCarro();
  }

  public actualizarCarro(): void{
    this.inicializarCarro();
  }

  public borrarCarro(): void{
    if(confirm('En realidad deseas borrar el carro ?')){
      this.arregloCarros = this.arregloCarros.filter(
        (objetoCarro) => objetoCarro != this.carroSeleccionado
      );
      this.inicializarCarro();
    }
  }

}

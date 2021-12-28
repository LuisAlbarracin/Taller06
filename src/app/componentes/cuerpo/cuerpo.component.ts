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
    return new Carro(0, '', '', 0);
  }

  public seleccionarCarro(objCarro: Carro): void{
    this.carroSeleccionado = objCarro;
  }

  // ******** Logica del Negocio

  public crearCarro(): void{

  }


}

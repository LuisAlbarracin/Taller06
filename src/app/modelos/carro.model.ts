export class Carro {
  public codigo: number;
  public placa: string;
  public marca: string;
  public modelo: number;

  constructor(cod:number, pla:string, mar:string, mod:number){
    this.codigo = cod;
    this.placa = pla;
    this.marca = mar;
    this.modelo = mod;
  }

}

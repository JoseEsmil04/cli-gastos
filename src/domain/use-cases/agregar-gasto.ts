export enum TipoGasto {
  comida = 'Comida',
  transporte = 'Transporte',
  ocio = 'Ocio'
}

export interface AgregarGastoUseCase {
  tipoGasto: TipoGasto
  monto: number
  fecha: Date
}


export class AgregarGasto implements AgregarGastoUseCase {
  constructor(
    public tipoGasto: TipoGasto,
    public monto: number,
    public fecha: Date = new Date()
  ) {}

  execute() {

  }
}
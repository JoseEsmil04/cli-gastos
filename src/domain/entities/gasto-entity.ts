export enum GastoTypes {
  alimentacion = 'alimentacion',
  tansporte = 'transporte',
  ocio = 'ocio'
}

export interface GastoInterface {
  tipo: GastoTypes
  monto: number
  creationDate?: Date
  usuarioId: number
}

export class GastoEntity {
  public usuarioId: number
  public monto: number
  public tipo: GastoTypes
  public creationDate: Date

  constructor(opciones: GastoInterface) {
    const {usuarioId, monto, tipo, creationDate = new Date()} = opciones

    this.usuarioId = usuarioId
    this.monto = monto
    this.tipo = tipo
    this.creationDate = creationDate
  }

  static parsearObjeto = (object:{[key: string]: any}): GastoEntity => {
    const { usuarioId, monto, tipo, creationDate } = object

    const formattedGasto = new GastoEntity({
      usuarioId,
      monto,
      tipo,
      creationDate
    })

    return formattedGasto
  }
}
export enum GastoType {
  Alimentacion = 'Alimentacion',
  Transporte = 'Transporte',
  Ocio = 'Ocio'
}

export interface GastoInterface {
  type: GastoType
  amount: number
  creationDate: Date
  userId: string
}

export class GastoEntity {
  public type: GastoType
  public amount: number
  public creationDate: Date
  public userId: string

  constructor(opciones: GastoInterface) {
    const {type, amount, creationDate = new Date(), userId} = opciones

    this.type = type
    this.amount = amount
    this.creationDate = creationDate
    this.userId = userId
  }
}
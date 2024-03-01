import { GastoEntity } from "../entities/gasto-entity"
import { GastoRepository } from "../repository/gasto-repository"

export interface AgregarGastoUseCase {
  execute(options: GastoEntity): Promise<void>
}


export class AgregarGasto implements AgregarGastoUseCase {
  constructor(
    private readonly gastoRepository: GastoRepository
  ) {}

  async execute(options: GastoEntity) {
    const { usuarioId, monto, tipo, creationDate } = options
    
    try {
      const gasto = new GastoEntity({ usuarioId, monto, tipo, creationDate })
      this.gastoRepository.saveGasto(gasto)
      return
    } catch (error) {
      console.error(error)
      return
    }
  }
}
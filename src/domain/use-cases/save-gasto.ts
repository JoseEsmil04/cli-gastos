import { GastoEntity } from "../entities"
import { GastoRepository, UserRepository } from "../repository"

export interface AgregarGastoUseCase {
  execute(options: GastoEntity): Promise<void>
}


export class AgregarGasto implements AgregarGastoUseCase {
  constructor(
    private readonly gastoRepository: GastoRepository,
    private readonly userRepository: UserRepository
  ) {}

  async execute(options: GastoEntity) {
    const { usuarioId, monto, tipo, creationDate } = options

    try {
      const user = await this.userRepository.getUserById(usuarioId)

      if(!user) {
        console.log(`Usuario con el id: ${usuarioId} no encontrado para la creacion del gasto!`)
        return
      }

      const gasto = new GastoEntity({ usuarioId, monto, tipo, creationDate })
      this.gastoRepository.saveGasto(gasto)
      return
    } catch (error) {
      throw `${error}`
    }
  }
}
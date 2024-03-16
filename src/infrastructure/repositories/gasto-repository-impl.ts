import { GastoDatasource } from "../../domain/datasources"
import { GastoEntity, GastoTypes } from "../../domain/entities"
import { GastoRepository } from "../../domain/repository"



export class GastoRepositoryImplementation implements GastoRepository {
  constructor(
    private readonly gastoDatasource: GastoDatasource
  ){}

  async saveGasto(gasto: GastoEntity): Promise<void> {
    return this.gastoDatasource.saveGasto(gasto)
  }

  async getGastos(tipo: GastoTypes): Promise<GastoEntity[]> {
    return this.gastoDatasource.getGastos(tipo)
  }
}
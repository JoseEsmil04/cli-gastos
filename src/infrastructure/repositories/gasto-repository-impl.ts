import { GastoDatasource } from "../../domain/datasources/gasto-datasource";
import { GastoEntity, GastoTypes } from "../../domain/entities/gasto-entity";
import { GastoRepository } from "../../domain/repository/gasto-repository";



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
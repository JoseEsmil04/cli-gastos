import { GastoEntity, GastoTypes } from "../entities/gasto-entity";



export abstract class GastoDatasource {
  abstract saveGasto(gasto: GastoEntity): Promise<void>
  abstract getGastos(tipoGasto: GastoTypes): Promise<GastoEntity[]>
}
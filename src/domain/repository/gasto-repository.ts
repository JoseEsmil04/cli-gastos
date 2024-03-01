import { GastoEntity, GastoTypes } from "../entities/gasto-entity";

export abstract class GastoRepository {
  abstract saveGasto(gasto: GastoEntity): Promise<void>
  abstract getGastos(tipo: GastoTypes): Promise<GastoEntity[]>
}
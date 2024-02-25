import { GastoEntity, GastoType } from "../entities/gasto-entity";

export abstract class GastoRepository {
  abstract saveGasto(gasto: GastoEntity): Promise<void>
  abstract getGastos(type: GastoType): Promise<GastoEntity[]>
}
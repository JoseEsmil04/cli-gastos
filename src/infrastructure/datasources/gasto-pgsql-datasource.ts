import { PrismaClient, GastoType } from "@prisma/client";
import { GastoDatasource } from "../../domain/datasources";
import { GastoEntity, GastoTypes } from "../../domain/entities";
import { PostgresDatasource } from "./user-pgsql-datasource";
import { UpdateMoneyUser } from "../../domain/use-cases/updateMoney-user";


const prisma = new PrismaClient()

const tipoEnum = {
  alimentacion: GastoType.ALIMENTACION,
  transporte: GastoType.TRANSPORTE,
  ocio: GastoType.OCIO
}

export class GastoPostgresDatasource implements GastoDatasource {
  async saveGasto(gasto: GastoEntity): Promise<void> {
    const tipo = tipoEnum[gasto.tipo]

    const user = await prisma.user.findUnique({
      where: {
        id: gasto.usuarioId
      }
    })

    if(user) {
      const operation = user.money -= gasto.monto;

      // Validar si el gasto no es mas caro que el monto disponible
      if(operation >= 0) {
        user.money = operation
        const updateMoneyUser = new UpdateMoneyUser(new PostgresDatasource())
        updateMoneyUser.execute(user.id, user.money)
      } else {
        throw 'No tienes suficiente dinero para registrar este gasto'
      }

    }

    const newGasto = await prisma.gasto.create({
      data: {
        usuarioId: gasto.usuarioId,
        monto: gasto.monto,
        tipo: tipo,
      }
    })

    console.log(`Gasto Registrado!`)
    console.log(newGasto)
  }
  
  async getGastos(tipoGasto: GastoTypes): Promise<GastoEntity[]> {
    const tipo = tipoEnum[tipoGasto]
    const gastos = await prisma.gasto.findMany({
      where: {
        tipo: tipo
      }
    })

    return gastos.map(GastoEntity.parsearObjeto)
  }

}
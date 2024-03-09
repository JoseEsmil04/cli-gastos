import { CreateUser } from "../domain/use-cases/create-user"
import { UpdateMoneyUser } from '../domain/use-cases/updateMoney-user';
import { DeleteUser } from '../domain/use-cases/delete-user';
import { UserRepositoryImplementation } from "../infrastructure/repositories/user-repository-impl";
import { PostgresDatasource } from "../infrastructure/datasources/user-pgsql-datasource";
import { GastoRepositoryImplementation } from "../infrastructure/repositories/gasto-repository-impl";
import { GastoPostgresDatasource } from '../infrastructure/datasources/gasto-pgsql-datasource';
import { AgregarGasto } from "../domain/use-cases/save-gasto";
import { GastoTypes } from "../domain/entities/gasto-entity";
import { GetGastosUseCase } from "../domain/use-cases/get-gastos";

interface Comandos {
  create?: boolean
  list?: boolean
  update?: boolean
  delet?: boolean
  id: number
  name?: string
  money: number
  gasto: boolean
  tipo?: GastoTypes
}

export class ServerApp {

  static async run(options: Comandos) {
    //* Conexion con los datasources
    const userRepository = new UserRepositoryImplementation(
      new PostgresDatasource()
    )

    const gastoRepository = new GastoRepositoryImplementation(
      new GastoPostgresDatasource()
    )
    console.log('****  Iniciando Programa  ****')

    const { create, list, update, delet, id, name, money, gasto, tipo } = options



    if(create && !gasto) {
      const createUser = new CreateUser(userRepository)
      if(!money || name === undefined) {
        console.log(`Debes proporcionar el nombre y monto para crear el usuario`)
        return
      }
      createUser.execute({name, money})

    } else if(update) {
      const updateUser = new UpdateMoneyUser(userRepository)
      if(!id || !money) {
        console.log(`Debes proporcionar el id y nuevo monto para actualizar el usuario!`)
        return
      }
      updateUser.execute(id, money)
    } else if(delet) {
      const deleteUser = new DeleteUser(userRepository)
      return id ? deleteUser.execute(id) : console.log('Debes proporcionar el id del usuario!')
    }

    if(gasto) {
      if(create && tipo) {
        const createGasto = new AgregarGasto(gastoRepository, userRepository)
        createGasto.execute({ usuarioId: id,  monto: money, tipo: tipo, creationDate: new Date()})
      }else if(list && tipo) {
        const getAllGastos = new GetGastosUseCase(gastoRepository)
        getAllGastos.execute(tipo)
      }
    }
  }
}
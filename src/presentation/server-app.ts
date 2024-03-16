import { GastoTypes } from "../domain/entities"
import { AgregarGasto, CreateUser, DeleteUser, GetGastosUseCase, UpdateMoneyUser } from "../domain/use-cases"
import { GastoPostgresDatasource, PostgresDatasource } from "../infrastructure/datasources"
import { GastoRepositoryImplementation, UserRepositoryImplementation } from "../infrastructure/repositories"


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
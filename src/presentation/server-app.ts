import { CreateUser } from "../domain/use-cases/create-user"
import { UpdateMoneyUser } from "../domain/use-cases/updateMoney-user"
import { DeleteUser } from '../domain/use-cases/delete-user';
import { UserRepositoryImplementation } from "../infrastructure/repositories/user-repository-impl";
import { PostgresDatasource } from "../infrastructure/datasources/user-pgsql-datasource";

interface Comandos {
  create?: boolean
  list?: boolean
  update?: boolean
  delet?: boolean
  id?: number
  name?: string
  money?: number
  alimentacion?: string
  transporte?: string
  ocio?: string
}

export class ServerApp {

  static run(options: Comandos) {
    const userRepository = new UserRepositoryImplementation(
      new PostgresDatasource()
    )
    console.log('Iniciando Programa...')

    const { create, list, update, delet, id, name, money, alimentacion, transporte, ocio } = options

    if(create) {
      const createUser = new CreateUser(userRepository)
      if(!money || name === undefined) {
        console.log(`Debes proporcionar el nombre y monto para crear el usuario`)
        return
      }
      createUser.execute({name, money})
    }

    if(update) {
      const updateUser = new UpdateMoneyUser(userRepository)
      if(!id || !money) {
        console.log(`Debes proporcionar el id y nuevo monto para actualizar el usuario!`)
        return
      }
      updateUser.execute(id, money)
    }

    if(delet) {
      const deleteUser = new DeleteUser(userRepository)
      return id ? deleteUser.execute(id) : console.log('Debes proporcionar el id del usuario!')
    }

  }

  
}
import { CreateUser } from "../domain/use-cases/create-user"
import { UpdateMoneyUser } from "../domain/use-cases/updateMoney-user"
import { DeleteUser } from '../domain/use-cases/delete-user';
import { UserRepositoryImplementation } from "../infrastructure/repositories/user-repository-impl";
import { PostgresDatasource } from "../infrastructure/datasources/user-pgsql-datasource";

interface Comandos {
  id?: number
  name?: string
  availableMoney?: number
  borrar?: boolean
  listar?: boolean
  comida?: string
  transporte?: string
  ocio?: string
}

export class ServerApp {

  static run(options: Comandos) {
    const userRepository = new UserRepositoryImplementation(
      new PostgresDatasource()
    )
    console.log('Iniciando Programa...')

    const {id, name, availableMoney, borrar, listar, comida, transporte, ocio} = options

    if(id === undefined && name !== undefined) {
      const createUser = new CreateUser(userRepository)
      if(!availableMoney) {
        console.log(`Debes especificar el monto para crear el usuario`)
        return
      }
      createUser.execute({name, availableMoney})
    }

    if(id !== undefined && availableMoney !== undefined) {
      const updateUser = new UpdateMoneyUser(userRepository)
      updateUser.execute(id, availableMoney)
    }

    if(id !== undefined && borrar) {
      const deleteUser = new DeleteUser(userRepository)
      deleteUser.execute(id)
    }

  }

  
}
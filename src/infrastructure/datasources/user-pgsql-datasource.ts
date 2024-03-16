import { PrismaClient } from "@prisma/client";
import { UserDatasource } from "../../domain/datasources";
import { UserEntity } from "../../domain/entities";

const prismaClient = new PrismaClient()

export class PostgresDatasource implements UserDatasource {
  async createUser(user: UserEntity): Promise<void> {

    const findUser = await prismaClient.user.findFirst({
      where: {
        name: user.name
      }
    })

    if(findUser) {
      console.log(`El usuario con el nombre: ${findUser.name} ya existe.
                  Intenta de nuevo con otro nombre`)
      return
    }

    const newUser = await prismaClient.user.create({
      data: {
        name: user.name,
        money: user.money
      }
    })

    const { id, name, money } = newUser

    console.log(
    `Nuevo Usuario Creado
      id: ${ id }
      nombre: ${name}
      Dinero: ${money}`)
  }

  async getUserById(userId: number): Promise<UserEntity | null> {
    const findUser = await prismaClient.user.findFirst({
      where: {
        id: userId
      }
    })

    return findUser
  }
  
  async updateMoneyUser(userId: number, newMoney: number): Promise<void> {
    const updateMoney = await prismaClient.user.update({
      where: {
        id: userId
      },
      data: {
        money: newMoney
      }
    })

    const {name, id} = updateMoney
    console.log(
    `Dinero Actualizado para Id: ${id} Nombre: ${name}
    Ahora cuenta con ${newMoney}`
    )
  }

  async deleteUser(userId: number): Promise<void> {
    const deleteUserQuery = await prismaClient.user.delete({
      where: {
        id: userId
      }
    })
    
    console.log(`${deleteUserQuery.id} ${deleteUserQuery.name} borrado!`)
  }

}
import { PrismaClient } from "@prisma/client";
import { UserDatasource } from "../../domain/datasources/user-datasource";
import { UserEntity } from "../../domain/entities/user-entity";

const prismaClient = new PrismaClient()

export class PostgresDatasource implements UserDatasource {
  async createUser(user: UserEntity): Promise<void> {

    const newUser = await prismaClient.user.create({
      data: {
        name: user.name,
        availableMoney: user.availableMoney
      }
    })

    const { id, name, availableMoney } = newUser

    console.log(
    `Nuevo Usuario Creado
      id: ${ id }
      nombre: ${name}
      Dinero: ${availableMoney}`)
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
        availableMoney: newMoney
      }
    })

    console.log(`User: ${updateMoney}`)
  }

  async deleteUser(userId: number): Promise<void> {
    const deleteUserQuery = await prismaClient.user.delete({
      where: {
        id: userId
      }
    })
    console.log(`${deleteUserQuery} borrado`)
  }

}
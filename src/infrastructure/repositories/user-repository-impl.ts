import { UserDatasource } from "../../domain/datasources/user-datasource";
import { UserEntity } from "../../domain/entities/user-entity";
import { UserRepository } from "../../domain/repository/user-repository";


export class UserRepositoryImplementation implements UserRepository {
  constructor(
    private readonly userDatasource: UserDatasource
  ){}

  createUser(user: UserEntity): Promise<void> {
    return this.userDatasource.createUser(user)
  }
  getUserById(userId: number): Promise<UserEntity | null> {
    return this.userDatasource.getUserById(userId)
  }
  updateMoneyUser(userId: number, newMoney: number): Promise<void> {
    return this.userDatasource.updateMoneyUser(userId, newMoney)
  }
  deleteUser(userId: number): Promise<void> {
    return this.userDatasource.deleteUser(userId)
  }

}
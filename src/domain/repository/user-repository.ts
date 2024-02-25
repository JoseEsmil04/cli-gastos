import { UserEntity } from "../entities/user-entity";


export abstract class UserRepository {
  abstract saveUser(user: UserEntity): Promise<void>
  abstract updateMoneyUser(userId: string): Promise<void>
  abstract deleteUser(userid: string): Promise<void>
}
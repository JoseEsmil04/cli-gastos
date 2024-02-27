import { UserEntity } from "../entities/user-entity";


export abstract class UserRepository {
  abstract createUser(user: UserEntity): Promise<void>;
  abstract getUserById(userId: number): Promise<UserEntity | null>;
  abstract updateMoneyUser(userId: number, newMoney: number): Promise<void>;
  abstract deleteUser(userId: number): Promise<void>;
}
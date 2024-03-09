import { UserEntity } from "../entities/user-entity"
import { UserRepository } from '../repository/user-repository';

interface CreateUserInterface {
  execute(usuario: UserEntity): Promise<void>
}

export class CreateUser implements CreateUserInterface {

  constructor(
    private readonly userRepository: UserRepository
  ) {

  }

  async execute(options: UserEntity): Promise<void> {
    const { name, money } = options

    try {
      const user = new UserEntity({name, money})
      this.userRepository.createUser(user)
      return
    } catch (error) {
      console.error(`${error}`)
      return
    }
  }
}



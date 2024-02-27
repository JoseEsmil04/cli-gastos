import { UserEntity } from "../entities/user-entity"
import { UserRepository } from '../repository/user-repository';


interface CreateUserInterface {
  execute(usuario: UserEntity): Promise<void>
}

// type SuccessCB = ((succes: string) => void) | undefined
// type ErrorCB = ((error: string) => void) | undefined

export class CreateUser implements CreateUserInterface {

  constructor(
    private readonly userRepository: UserRepository
  ) {

  }

  async execute(options: UserEntity): Promise<void> {
    const { name, availableMoney } = options

    try {
      const user = new UserEntity({name, availableMoney})
      this.userRepository.createUser(user)
      return
    } catch (error) {
      return
    }
  }
}



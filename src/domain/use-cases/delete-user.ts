import { UserRepository } from "../repository"

export class DeleteUser {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async execute(userId: number): Promise<void> {
    try {
      const user = this.userRepository.getUserById(userId)

      if(!user) {
        throw new Error(`Usuario con el id: ${ userId } no encontrado`)
      }

      this.userRepository.deleteUser(userId)
      return 
    } catch (error) {
      throw `Hubo un error al intentar Borrar el User: ${error}`
    }
  }
}
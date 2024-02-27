import { UserRepository } from "../repository/user-repository";


export class DeleteUser {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async execute(userId: number): Promise<void> {
    try {
      const user = this.userRepository.getUserById(userId)

      if(!user) {
        throw new Error(`Usuario con el id: ${userId } no encontrado`)
      }

      this.userRepository.deleteUser(userId)
      console.log(`Usuario Borrado!`)
      return 
    } catch (error) {
      console.error(`Hubo un error al intentar Borrar el User: ${error}`)
      return
    }
  }
}
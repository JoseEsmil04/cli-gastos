import { UserRepository } from "../repository/user-repository";

export class UpdateMoneyUser {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async execute(userId: number, newMoney: number): Promise<void> {
    try {
      const user = await this.userRepository.getUserById(userId)
      
      if (!user) {
        throw new Error('Usuario no encontrado')
      }

      user.availableMoney = newMoney;
      await this.userRepository.updateMoneyUser(userId, newMoney);
      
      console.log(`Dinero actualizado para el usuario ${userId}. Nuevo balance: ${newMoney}`)
    } catch (error) {
      console.error(`${error}`)
    }
  }
}
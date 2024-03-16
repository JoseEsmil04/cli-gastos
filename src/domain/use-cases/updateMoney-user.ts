import { UserRepository } from "../repository";

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

      user.money = newMoney;
      await this.userRepository.updateMoneyUser(userId, newMoney)
    } catch (error) {
      console.error(`${error}`)
    }
  }
}
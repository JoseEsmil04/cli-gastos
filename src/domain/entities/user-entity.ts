interface UserInterface {
  name: string;
  money: number;
}

export class UserEntity {
  public name: string;
  public money: number;

  constructor(opciones: UserInterface) {
    const { name, money } = opciones
    this.name = name;
    this.money = money;
  }
}

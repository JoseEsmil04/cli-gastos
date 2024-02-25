interface UserInterface {
  name: string;
  availableMoney: number;
}

export class UserEntity {
  public name: string;
  public availableMoney: number;

  constructor(opciones: UserInterface) {
    const { name, availableMoney } = opciones
    this.name = name;
    this.availableMoney = availableMoney;
  }
}

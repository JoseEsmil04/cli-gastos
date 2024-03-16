import { GastoRepository } from "../repository";
import { GastoTypes } from '../entities';

interface GetGastosUseCaseInteface {
	execute(tipo: GastoTypes): Promise<void>
}

export class GetGastosUseCase implements GetGastosUseCaseInteface {
	constructor(
		private readonly gastoRepository: GastoRepository
	){}

	async execute(tipo: GastoTypes) {
		try {
			const gastos = await this.gastoRepository.getGastos(tipo)
			console.log(gastos)
			return
		} catch (error) {
			throw `${error}`
		}
	}
}
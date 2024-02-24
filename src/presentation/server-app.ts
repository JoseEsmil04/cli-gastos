import { AgregarDinero } from "../domain/use-cases/agregar-dinero"
import { CrearUsuario } from "../domain/use-cases/crear-usuario"

interface Comandos {
  nombre: string
  monto: number
  resetear?: boolean
  listar?: boolean
  comida?: string
  transporte?: string
  ocio?: string
}

export class ServerApp {

  static run({nombre, monto, resetear, listar, comida, transporte, ocio}: Comandos) {
    console.log('Iniciando Programa...')

    if(!nombre) {
      console.log('Debes especificar el usuario o crear Uno!')
      return
    }

    const crearUsuario = new CrearUsuario()
    crearUsuario.execute({nombre, monto})
  }

  
}
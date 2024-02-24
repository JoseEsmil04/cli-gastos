import { PrismaClient } from "@prisma/client"

interface Usuario {
  nombre: string
  monto?: number
}

interface CrearUsuarioInterface {
  execute(usuario: Usuario): void
}

export class CrearUsuario implements CrearUsuarioInterface {

  async execute({nombre, monto = 0}: Usuario): Promise<void> {
    const prisma = new PrismaClient()

    const getUser = await prisma.usuario.findFirst({
      where: {
        nombre: {
          equals: nombre
        }
      }
    })

    if(getUser) {
      if (getUser.monto !== monto) {
        const actualizar = await prisma.usuario.update({
            where: { id: getUser.id },
            data: { monto: monto }
        });

        console.log(`Monto Actualizado: ${actualizar.nombre} ahora tiene, ${actualizar.monto}`)
        return
      }  
      
      console.log(`Usuario: ${getUser.nombre} ya existe`)
      return
    }

    const newUsuario = await prisma.usuario.create({
      data: {
        nombre,
        monto
      }
    })

    console.log(`Nuevo Usuario ${newUsuario.nombre }creado!`)
  }
}



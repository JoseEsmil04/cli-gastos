import { yarg } from "./config/plugins/yargs-plugin"
import { ServerApp } from "./presentation/server-app"

(async() => {
  await main()
})()

async function main() {
  const {
    n: nombre,
    m: monto = 0,
    x: resetear,
    l: listar,
    c: comida,
    t: transporte,
    o: ocio
  } = yarg
  ServerApp.run({nombre, monto, resetear, listar, comida, transporte, ocio})

  // const prisma = new PrismaClient()
  // // const newUsuario = await prisma.usuario.create({
  // //   data: {
  // //     nombre: 'Maria',
  // //     monto: 34555
  // //   }
  // // })


  // const getUsers = await prisma.usuario.findMany({
  //   where: {
  //     monto: {
  //       gt: 5000
  //     }
  //   }
  // })

  // console.log(getUsers)
}



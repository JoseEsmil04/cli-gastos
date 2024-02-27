import { yarg } from "./config/plugins/yargs-plugin"
import { ServerApp } from "./presentation/server-app"

(async() => {
  await main()
})()

async function main() {
  const {
    i: id,
    n: name,
    a: availableMoney = 0,
    b: borrar,
    l: listar,
    c: comida,
    t: transporte,
    o: ocio
  } = yarg

  ServerApp.run({id, name, availableMoney, borrar, listar, comida, transporte, ocio})

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



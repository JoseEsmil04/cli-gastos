import { PrismaClient } from "@prisma/client"
import { yarg } from "./config/plugins/yargs-plugin"
import { ServerApp } from "./presentation/server-app"

(async() => {
  await main()
})()

async function main() {
  const {
    c: create,
    l: list,
    u: update,
    d: delet,
    i: id,
    n: name,
    m: money = 0,
    g: gasto,
    t: tipo
  } = yarg

  // console.log(create, list, update, delet, id, name, money, alimentacion, transporte, ocio )
  // const prisma = new PrismaClient()
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Anny",
  //     money: 45321,
  //   }
  // })
  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: 2
  //   }
  // });
  
  // if (user) {
  //   const newGasto = await prisma.gasto.create({
  //     data: {
  //       monto: 4000,
  //       tipo: "ALIMENTACION",
  //       usuarioId: user.id // Asigna el id del usuario al campo usuarioId
  //     }
  //   });
  
  //   const updatedUser = await prisma.user.update({
  //     where: {
  //       id: user.id
  //     },
  //     data: {
  //       money: user.money - newGasto.monto
  //     }
  //   });
  
  //   console.log(newGasto, updatedUser);
  // } else {
  //   console.error('No se encontró el usuario');
  // }

  // const gasto = await prisma.gasto.findMany()
  // console.log(typeof gasto[0])
  
  ServerApp.run({ create, list, update, delet, id, name, money, gasto, tipo })
}



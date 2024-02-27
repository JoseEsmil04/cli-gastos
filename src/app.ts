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
    a: alimentacion,
    t: transporte,
    o: ocio
  } = yarg

  console.log(create, list, update, delet, id, name, money, alimentacion, transporte, ocio )


  ServerApp.run({ create, list, update, delet, id, name, money, alimentacion, transporte, ocio })
}



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
  
  ServerApp.run({ create, list, update, delet, id, name, money, gasto, tipo })
}



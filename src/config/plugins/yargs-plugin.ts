import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('i', {
    alias: 'id',
    type: 'number',
    demandOption: false,
    describe: 'id Usuario'
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    demandOption: false,
    describe: 'Usuario agregado/Creado'
  })
  .option('a', {
    alias: 'availableMoney',
    type: 'number',
    default: 0,
    describe: 'Capital agregado'
  })
  .option('b', {
    alias: 'borrar',
    type: 'boolean',
    default: false,
    describe: 'Resetea todos los gastos'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Listar los gastos y el dinero restante'
  })
  .option('c', {
    alias: 'comida',
    type: 'string',
    demandOption: false,
    describe: 'Gasto de Comida'
  })
  .option('t', {
    alias: 'transporte',
    type: 'string',
    demandOption: false,
    describe: 'Gasto de Transporte'
  })
  .option('o', {
    alias: 'ocio',
    type: 'string',
    demandOption: false,
    describe: 'Gasto de Ocio'
  })
  .check((argv, options) => {

    if(isNaN(argv.a)) throw 'El monto debe ser un numero'

    if( argv.n === undefined && argv.i === undefined) {
      throw `Debes Actualizar un usuario existente o crear uno!`
    }

    return true
  })
  .parseSync()
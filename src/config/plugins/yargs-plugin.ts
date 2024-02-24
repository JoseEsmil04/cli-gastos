import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('n', {
    alias: 'nombre',
    type: 'string',
    demandOption: true,
    describe: 'Usuario agregado/Creado'
  })
  .option('m', {
    alias: 'monto',
    type: 'number',
    demandOption: false,
    describe: 'Capital agregado'
  })
  .option('x', {
    alias: 'resetear',
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
  .parseSync()
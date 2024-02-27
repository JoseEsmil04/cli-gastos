import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('c', {
    alias: 'create',
    type: 'boolean',
    default: false,
    describe: 'Crea un usuario o un gasto'
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Listar todos los gastos'
  })
  .option('u', {
    alias: 'update',
    type: 'boolean',
    default: false,
    describe: 'Comando para actualizar el usuario'
  })
  .option('d', {
    alias: 'delet',
    type: 'boolean',
    default: false,
    describe: 'Borra el usuario/gasto'
  })
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
  .option('m', {
    alias: 'money',
    type: 'number',
    default: 0,
    describe: 'Capital agregado'
  })
  .option('a', {
    alias: 'alimentacion',
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

    if(isNaN(argv.m)) throw 'El monto debe ser un numero'

    if(!(argv.c || argv.l || argv.u || argv.d)) {
      throw `Debes proporcionar un comando principal!`
    }

    return true
  })
  .parseSync()
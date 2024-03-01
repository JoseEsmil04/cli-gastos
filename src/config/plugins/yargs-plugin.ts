import yargs from 'yargs'
import { hideBin } from 'yargs/helpers';
import { GastoTypes } from '../../domain/entities/gasto-entity';

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
    default: 1,
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
  .option('g', {
    alias: 'gasto',
    type: 'boolean',
    default: false,
    describe: 'Para crear gasto'
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
  .option('t', {
    alias: 'tipo',
    choices: Object.values(GastoTypes),
    describe: 'Tipo de gasto',
    demandOption: false
  })
  .check((argv, options) => {

    if(isNaN(argv.m)) throw 'El monto debe ser un numero'

    if(isNaN(argv.i)) throw 'El id debe ser un numero'

    if(!(argv.c || argv.l || argv.u || argv.d || argv.t)) {
      throw `Debes proporcionar un comando principal!`
    }

    return true
  })
  .parseSync()
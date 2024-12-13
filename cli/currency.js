import { Command } from 'commander'
import Currency from '../models/Currency.js'

const currencyController = new Command('currency')

currencyController
  .command('convert <num> <from> <to>')
  .description('Log transaction data to the console')
  .action((num, from, to) => {
    const converted = new Currency()
    console.log(converted.convert(num, from, to))
  })

export default currencyController

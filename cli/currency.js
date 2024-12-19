import { Command } from 'commander'
import Currency from '../models/Currency.js'

const currencyController = new Command('currency')

currencyController
  .command('convert <num> <from> <to>')
  .description('Log transaction data to the console')
  .action(async (num, from, to) => {
    const converted = new Currency()
    const result = await converted.convert(num, from, to)
    console.log(result)
  })

export default currencyController

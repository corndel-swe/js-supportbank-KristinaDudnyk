import { Command } from 'commander'
import Invest from '../models/Invest.js'

const investController = new Command('invest')

investController
  .command('simple <num> <rate> <years>')
  .description('Log transaction data to the console')
  .action((num, rate, years) => {
    const invested = new Invest()
    console.log(invested.simple(num, rate, years))
  })

export default investController

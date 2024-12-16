import { Command } from 'commander'
import Bill from '../models/Bill.js'

const billController = new Command('bill')

billController
  .command('split <total> <numOfPeople> [tip]')
  .description('Log transaction data to the console')
  .action((total, numOfPeople, tip) => {
    const splitedBill = new Bill()
    console.log(splitedBill.split(total, numOfPeople, tip || 0))
  })

export default billController

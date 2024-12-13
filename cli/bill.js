import { Command } from 'commander'
import Bill from '../models/Bill.js'

const billController = new Command('bill')

billController
  .command('split <total> <numOfPeople>')
  .description('Log transaction data to the console')
  .action((total, numOfPeople) => {
    const splitedBill = new Bill()
    console.log(splitedBill.split(total, numOfPeople))
  })

export default billController

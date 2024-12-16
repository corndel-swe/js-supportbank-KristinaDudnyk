import { program } from 'commander'
import transactionController from './transaction.js'
import billController from './bill.js'
import currencyController from './currency.js'
import investController from './invest.js'
import salaryTaxController from './salaryTax.js'

program.version('0.1.0').description('SupportBank')
program.addCommand(transactionController)
program.addCommand(billController)
program.addCommand(currencyController)
program.addCommand(investController)
program.addCommand(salaryTaxController)

program.parse(process.argv)

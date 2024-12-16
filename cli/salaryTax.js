import { Command } from 'commander'
import SalaryTax from '../models/SalaryTax.js'

const salaryTaxController = new Command('salary')

salaryTaxController
  .command('tax <salary>')
  .description('Log transaction data to the console')
  .action((salary) => {
    const taxed = new SalaryTax()
    console.log(taxed.tax(salary))
  })

export default salaryTaxController

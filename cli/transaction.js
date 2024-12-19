import { Command } from 'commander'
import Transactions from '../models/Transactions.js'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    const now = new Date()
    const formattedDateTime = now
      .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .replace(/, /g, ' ')
    console.log(`At ${formattedDateTime} ${from} sent ${to} £${amount}`)
  })

transactionController
  .command('summarise all')
  .description('Log transaction data to the console')
  .action(async () => {
    console.log('checking')
    try {
      const transactionNames = new Transactions()
      const transactions = await transactionNames.getBankStatements()
      console.log(transactions)
    } catch (error) {
      console.error('Error summarising transactions:', error)
    }
  })

transactionController
  .command('list <accountName>')
  .description('Log transaction data to the console')
  .action(async (accountName) => {
    console.log('checking')
    try {
      const transactionNames = new Transactions()
      const transactions = await transactionNames.getTransactionsList(
        accountName
      )
      console.log(transactions)
    } catch (error) {
      console.error('Error summarising transactions:', error)
    }
  })

export default transactionController

import { Command } from 'commander'

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

export default transactionController

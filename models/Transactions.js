import fs from 'fs/promises'

class Transactions {
  constructor(person) {
    this.person = person
  }

  static path = new URL('../data/DodgyTransactions2015.csv', import.meta.url)

  isDateFormatValid(dateStr) {
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/
    return pattern.test(dateStr)
  }

  async getTransactionsList(person) {
    let listOfTransactions = []
    try {
      const data = await fs.readFile(Transactions.path, 'utf-8')
      const lines = data.split('\n')

      for (let i = 1; i < lines.length; ++i) {
        const line = lines[i].split(',')
        const sender = line[1]

        if (sender.toLowerCase() === person.toLowerCase()) {
          listOfTransactions.push([line[0], line[3]])
        }
      }
      console.log(listOfTransactions)
    } catch (error) {
      console.error('Error reading or processing transactions:', error)
    }
  }

  async getBankStatements() {
    try {
      let bankStatements = []
      const data = await fs.readFile(Transactions.path, 'utf-8')
      const lines = data.split('\n')
      const uniqueNames = new Set()

      for (let i = 1; i < lines.length; ++i) {
        const line = lines[i].split(',')

        // if (line[0]) ////// this weird line fixed this ==>  [ undefined, 0 ]
        if (!uniqueNames.has(line[1])) {
          bankStatements.push([line[1], 0])
          uniqueNames.add(line[1])
        }
      }
      for (let i = 1; i < lines.length; ++i) {
        const line = lines[i].split(',')
        const sender = line[1]
        const recipient = line[2]
        let amount = 0

        if (!this.isDateFormatValid(line[0])) {
          break
        }
        if (isNaN(parseFloat(line[4]))) {
          break
        } else {
          amount = parseFloat(line[4])
        }

        const foundSubArrIndexSender = bankStatements.findIndex((subArr) =>
          subArr.includes(sender)
        )
        if (foundSubArrIndexSender === -1) {
          break
        }
        bankStatements[foundSubArrIndexSender][1] -= amount

        const foundSubArrIndexRecipient = bankStatements.findIndex((subArr) =>
          subArr.includes(recipient)
        )
        if (foundSubArrIndexRecipient === -1) {
          break
        }

        bankStatements[foundSubArrIndexRecipient][1] += amount
      }
      return bankStatements
    } catch (error) {
      console.error('Error reading or processing transactions:', error)
    }
  }
}

export default Transactions

import fs from 'fs/promises'

export async function readJSONTransactions() {
  // Read the Transactions2013.json file
  const path = new URL('../data/Transactions2013.json')
  // Use JSON.parse to convert the string into an array of objects
  const data = await fs.readFile(path)
  const jsData = JSON.parse(data)

  // and return it
  return jsData
}

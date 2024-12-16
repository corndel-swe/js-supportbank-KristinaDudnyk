import 'dotenv/config'

class ExchangeRate {
  constructor(currFrom, currTo) {
    this.currFrom = currFrom
    this.currTo = currTo
  }
  async getRate(currFrom, currTo) {
    const domain = 'https://openexchangerates.org/api/latest.json'
    const authorization = `?app_id=${process.env.OPENEXCHANGERATES_API_KEY}`
    const url = `${domain}${authorization}&base=${currFrom}&symbols=${currTo}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      return data.rates[currTo]
    } catch (err) {
      console.error(err)
    }
  }
}

export default ExchangeRate

import 'dotenv/config'

class ExchangeRate {
  constructor(currFrom, currTo) {
    this.currFrom = currFrom
    this.currTo = currTo
  }
  async getRate(currFrom, currTo) {
    const url = `https://openexchangerates.org/api/latest.json?app_id=${process.env.OPENEXCHANGERATES_API_KEY}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      return data.rates[currTo]
    } catch (err) {
      console.error(err)
    }
  }
}

export default ExchangeRate

import ExchangeRate from './ExchangeRate.js'

class Currency extends ExchangeRate {
  constructor(num, from, to) {
    super()
    this.num = num
    this.from = from
    this.to = to
  }

  async convert(num, from, to) {
    try {
      const rate = await this.getRate(from, to)
      return (num * rate).toFixed(3)
    } catch (error) {
      console.error('Error in conversion:', error)
      return 'Error in conversion'
    }
  }
}

export default Currency

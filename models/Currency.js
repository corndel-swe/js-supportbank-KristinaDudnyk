class Currency {
  constructor(num, from, to) {
    this.num = num
    this.from = from
    this.to = to
  }

  convert(num, from, to) {
    switch (from) {
      case 'USD':
        switch (to) {
          case 'GBP':
            return (num * 0.8).toFixed(3)
          case 'EUR':
            return (num * 0.92).toFixed(3)
          default:
            throw new Error(`Unsupported target currency: ${to}`)
        }
      default:
        throw new Error(`Unsupported base currency: ${from}`)
    }
  }
}

export default Currency

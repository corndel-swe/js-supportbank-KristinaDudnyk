class Invest {
  constructor(num, rate, years) {
    this.num = num
    this.rate = rate
    this.years = years
  }

  simple(num, rate, years) {
    const compoundInterest = (num * rate * years) / 100
    return compoundInterest + Number(num)
  }

  compound(num, rate, years) {
    return (num * rate * years) / 100
  }
}

export default Invest

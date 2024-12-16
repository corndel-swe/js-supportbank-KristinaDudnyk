class Bill {
  constructor(total, numOfPeople, tip) {
    this.total = total
    this.numOfPeople = numOfPeople
    this.tip = tip
  }

  split(total, numOfPeople, tip) {
    if (numOfPeople === 0) {
      throw new Error('provide a number of people')
    }
    if (!tip) {
      tip = 0
    }
    const newTotal = total - tip
    return Math.round(newTotal / numOfPeople)
  }
}

export default Bill

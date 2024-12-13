class Bill {
  constructor(total, numOfPeople) {
    this.total = total
    this.numOfPeople = numOfPeople
  }

  split(total, numOfPeople) {
    return Math.round(total / numOfPeople)
  }
}

export default Bill

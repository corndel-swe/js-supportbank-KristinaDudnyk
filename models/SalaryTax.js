class SalaryTax {
  constructor(salary) {
    this.salary = salary
  }

  tax(salary) {
    if (salary <= 12570) {
      return 0
    }

    const taxableAllowance = salary - 12570

    if (taxableAllowance <= 50270) {
      return taxableAllowance * (1 - 0.2) + 12570
    }

    if (taxableAllowance <= 125140) {
      return taxableAllowance * (1 - 0.4) + 12570
    }
    if (taxableAllowance > 125140) {
      return salary * (1 - 0.45)
    }
  }
}

export default SalaryTax

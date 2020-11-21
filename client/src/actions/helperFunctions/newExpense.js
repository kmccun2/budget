export const newExpense = (month, title, amount, time, starting, ending) => {
  // Add revenue to money
  if ((starting === undefined || starting <= month.year) && (ending === undefined || ending > month.year)) {
    if (time === 'monthly') month.expenses.push({ name: title, amount: parseFloat(amount) })
    if (time === 'yearly' && month.month === 12) month.expenses.push({ name: title, amount: parseFloat(amount) })
    if (time === 'bianual' && (month.month === 6 || month.month === 12)) month.expenses.push({ name: title, amount: parseFloat(amount) })
    if (time === 'Roth' && month.month === 4) month.expenses.push({ name: title, amount: parseFloat(amount) })
  }
}

export const newRevenue = (month, title, amount, raise, starting, ending) => {
  // Salary calculation for each month given raise amount
  let new_salary = amount
  for (let i = 0; i < month.year - Date().toString().split(' ')[3]; i++) {
    new_salary = (new_salary * (raise + 1)).toFixed(2)
  }
  // Add revenue to money
  if ((starting === undefined || starting <= month.year) && (ending === undefined || ending > month.year))
    month.revenues.push({ name: title, amount: parseFloat(new_salary) })
}

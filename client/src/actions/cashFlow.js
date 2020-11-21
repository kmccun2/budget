import { ADD_MONTHS } from '../actions/types'

// Create transaction routines
export const cashFlow = () => async (dispatch) => {
  // Initialize varibles
  let months = []
  let currentmonth = 0
  // Decide starting month
  switch (Date().toString().split(' ')[1]) {
    case 'Jan':
      currentmonth = 1
      break
    case 'Feb':
      currentmonth = 2
      break
    case 'Mar':
      currentmonth = 3
      break
    case 'Apr':
      currentmonth = 4
      break
    case 'May':
      currentmonth = 5
      break
    case 'Jun':
      currentmonth = 6
      break
    case 'Jul':
      currentmonth = 7
      break
    case 'Aug':
      currentmonth = 8
      break
    case 'Sep':
      currentmonth = 9
      break
    case 'Oct':
      currentmonth = 10
      break
    case 'Nov':
      currentmonth = 11
      break
    case 'Dec':
      currentmonth = 12
      break
    default:
      currentmonth = 0
  }

  // Create object for each monthly period
  for (let i = Date().toString().split(' ')[3]; i < 2093; i++) {
    if (i === Date().toString().split(' ')[3]) {
      if (currentmonth < 2) months.push({ name: 'January', month: 1, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 3) months.push({ name: 'February', month: 2, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 4) months.push({ name: 'March', month: 3, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 5) months.push({ name: 'April', month: 4, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 6) months.push({ name: 'May', month: 5, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 7) months.push({ name: 'June', month: 6, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 8) months.push({ name: 'July', month: 7, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 9) months.push({ name: 'August', month: 8, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 10) months.push({ name: 'September', month: 9, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 11) months.push({ name: 'October', month: 10, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 12) months.push({ name: 'November', month: 11, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      if (currentmonth < 13) months.push({ name: 'December', month: 12, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
    } else {
      months.push({ name: 'January', month: 1, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'February', month: 2, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'March', month: 3, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'April', month: 4, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'May', month: 5, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'June', month: 6, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'July', month: 7, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'August', month: 8, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'September', month: 9, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'October', month: 10, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'November', month: 11, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
      months.push({ name: 'December', month: 12, year: i, revenues: [], expenses: [], on_hand: 0, invested: 0 })
    }
  }
  // Add up revenues
  // Iterate months
  let money_on_hand = 28000

  months.map((month) => {
    // Reveneues
    newRevenue(month, 'Performance', 3402.92, 0.03, undefined, 2052)
    newRevenue(month, 'Pitching Lessons', 500, 0, undefined, 2052)
    newRevenue(month, 'St Joes', 2700, 0, undefined, 2021)
    newRevenue(month, 'St Joes', 2000, 0, 2021, 2052)
    newRevenue(month, 'Machitas', 2000, 0)

    // Expenses
    newExpense(month, 'GMC', 600, 'monthly', undefined, 2026)
    newExpense(month, 'Volkswagen', 600, 'monthly', undefined, 2025)
    newExpense(month, 'House', 1260, 'monthly')
    newExpense(month, 'Other', 800, 'monthly')
    newExpense(month, 'Groceries', 500, 'monthly')
    newExpense(month, 'Eating Out', 500, 'monthly')
    newExpense(month, 'Fuel', 300, 'monthly')
    newExpense(month, 'Cox', 220, 'monthly')
    newExpense(month, 'Verizon', 115, 'monthly')
    newExpense(month, 'Entergy', 108, 'monthly')
    newExpense(month, 'Gas/Water/Trash', 80, 'monthly')
    newExpense(month, 'Olies', 20, 'monthly')
    newExpense(month, 'Spotify', 15, 'monthly')
    newExpense(month, 'Cinemark', 9, 'monthly')
    newExpense(month, 'Progressive', 1316, 'bianual')

    // Add up revenues
    month.revenues.map((rev) => {
      if (rev.amount !== undefined) {
        month.on_hand = month.on_hand + rev.amount
      }
      return month.on_hand
    })

    // Add up revenues
    month.expenses.map((exp) => {
      if (exp.amount !== undefined) {
        month.on_hand = month.on_hand - exp.amount
      }
      return month.on_hand
    })

    // Carry over money on hand to next month
    month.on_hand = money_on_hand + month.on_hand
    money_on_hand = month.on_hand
    month.on_hand = month.on_hand.toFixed(2)

    return month
  })

  dispatch({
    type: ADD_MONTHS,
    payload: {
      months: months,
      sidebarMonth: months[0],
    },
  })
}

// New revenue function
const newRevenue = (month, title, amount, raise, starting, ending) => {
  // Salary calculation for each month given raise amount
  let new_salary = amount
  for (let i = 0; i < month.year - Date().toString().split(' ')[3]; i++) {
    new_salary = (new_salary * (raise + 1)).toFixed(2)
  }
  // Add revenue to money
  if ((starting === undefined || starting <= month.year) && (ending === undefined || ending > month.year))
    month.revenues.push({ name: title, amount: parseFloat(new_salary) })
}

// New expense function
const newExpense = (month, title, amount, time, starting, ending) => {
  // Add revenue to money
  if ((starting === undefined || starting <= month.year) && (ending === undefined || ending > month.year)) {
    if (time === 'monthly') month.expenses.push({ name: title, amount: parseFloat(amount) })
    if (time === 'yearly' && month.month === 12) month.expenses.push({ name: title, amount: parseFloat(amount) })
    if (time === 'bianual' && (month.month === 6 || month.month === 12)) month.expenses.push({ name: title, amount: parseFloat(amount) })
  }
}

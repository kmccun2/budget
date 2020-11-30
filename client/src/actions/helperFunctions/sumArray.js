import { formatNumber } from './formatNumber'

// Add up amounts of an array by it's key name
export const sumArray = (array, key) => {
  let total = 0
  array.map((each) => {
    total += parseFloat(each[key])
    return each
  })
  total = formatNumber(total.toFixed(2))
  return total
}

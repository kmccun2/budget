import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { setSidebarMonth } from '../../actions/cashFlow'
import { formatNumber } from '../../actions/helperFunctions/formatNumber'
import { sumArray } from '../../actions/helperFunctions/sumArray'

const Months = ({ months, setSidebarMonth, sidebarMonth }) => {
  return (
    <div className='months-container'>
      {<div className='break'>{new Date().getFullYear()}</div>}
      {months &&
        months.map((month) => (
          <Fragment key={month.name.toString() + month.year.toString()}>
            <div
              className='month-item'
              onClick={() => {
                setSidebarMonth(month)
              }}
              style={
                sidebarMonth && sidebarMonth.month === month.month && month.year === sidebarMonth.year ? { boxShadow: '0 0 3px 2px #32c2ff' } : {}
              }
            >
              <div>{month.name}</div>
              <div
                style={
                  parseFloat(sumArray(month.on_hand, 'amount').replace(',', '')) < 85000
                    ? { color: 'red', fontWeight: 'bold' }
                    : { color: 'green', fontWeight: 'bold' }
                }
              >
                ${sumArray(month.on_hand, 'amount')}
              </div>
            </div>
            {month.month === 12 && <div className='break'>{parseInt(month.year) + 1}</div>}
          </Fragment>
        ))}
    </div>
  )
}

export default connect(null, { setSidebarMonth })(Months)

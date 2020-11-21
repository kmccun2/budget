import React, { Fragment } from 'react'

const Months = ({ months }) => {
  return (
    <div className='months-container'>
      {months &&
        months.map((month) => (
          <Fragment key={month.name.toString() + month.year.toString()}>
            <div className='month-item'>
              {month.name} {month.year} Money on Hand: ${parseFloat(month.on_hand)}
            </div>
            {month.month === 12 && <div className='break'></div>}
          </Fragment>
        ))}
    </div>
  )
}

export default Months

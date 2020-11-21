import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { setSidebarMonth } from '../../actions/cashFlow'

const Months = ({ months, setSidebarMonth }) => {
  return (
    <div className='months-container'>
      {months &&
        months.map((month) => (
          <Fragment key={month.name.toString() + month.year.toString()}>
            <div className='month-item' onClick={() => setSidebarMonth(month)}>
              {month.name} {month.year} Money on Hand: ${parseFloat(month.on_hand)}
            </div>
            {month.month === 12 && <div className='break'></div>}
          </Fragment>
        ))}
    </div>
  )
}

export default connect(null, { setSidebarMonth })(Months)

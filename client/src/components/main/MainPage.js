import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { cashFlow } from '../../actions/cashFlow'
import Months from '../../components/main/Months'
import Sidebar from '../../components/main/Sidebar'

const MainPage = ({ cashFlow, months, sidebarMonth }) => {
  useEffect(() => {
    cashFlow()
    // eslint-disable-next-line
  }, [])

  return (
    <Fragment>
      <Months months={months} />
      <Sidebar month={sidebarMonth} />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  loading: state.cashFlow.loading,
  months: state.cashFlow.months,
  sidebarMonth: state.cashFlow.sidebarMonth,
})

export default connect(mapStateToProps, { cashFlow })(MainPage)

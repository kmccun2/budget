import React, { Fragment, useEffect, useState } from 'react'
import SidebarSection from './SidebarSection'
import _ from 'lodash'

const Sidebar = ({ month }) => {
  const [totalRevs, setTotalRevs] = useState(0)
  const [totalExps, setTotalExps] = useState(0)
  const [totalInvs, setTotalInvs] = useState(0)

  useEffect(() => {
    let revs = 0
    let exps = 0
    let invs = 0
    if (month.revenues) month.revenues.map((rev) => (revs += rev.amount))
    if (month.expenses) month.expenses.map((exp) => (exps += exp.amount))
    if (month.invested) month.invested.map((inv) => (invs += inv.amount))
    setTotalRevs(parseFloat(revs).toFixed(2))
    setTotalExps(parseFloat(exps).toFixed(2))
    setTotalInvs(parseFloat(invs).toFixed(2))
  }, [month])

  return (
    <div className='sidebar-container'>
      {month ? (
        <Fragment>
          <div className='sidebar-header'>
            {/* Display month and year */}
            {month.name && month.name.toUpperCase()} {month.year}
          </div>
          {/* Display money on Hand */}
          <SidebarSection month={month} header='Money On Hand' value={month.on_hand} />
          <SidebarSection month={month} header='Revenues' value={totalRevs} color='green' sub_items={_.orderBy(month.revenues, 'amount', 'desc')} />
          <SidebarSection month={month} header='Expenses' value={totalExps} color='red' sub_items={_.orderBy(month.expenses, 'amount', 'desc')} />
          <SidebarSection month={month} header='Investments' value={totalInvs} color='red' sub_items={_.orderBy(month.invested, 'amount', 'desc')} />
        </Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Sidebar

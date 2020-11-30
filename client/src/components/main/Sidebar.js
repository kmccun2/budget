import React, { Fragment, useEffect, useState } from 'react'
import SidebarSection from './SidebarSection'
import _ from 'lodash'
import { sumArray } from '../../actions/helperFunctions/sumArray'

const Sidebar = ({ month }) => {
  const [totalOnHand, setTotalOnHand] = useState(0)
  const [totalRevs, setTotalRevs] = useState(0)
  const [totalExps, setTotalExps] = useState(0)
  const [totalInvs, setTotalInvs] = useState(0)

  useEffect(() => {
    if (month.on_hand) setTotalOnHand(sumArray(month.on_hand, 'amount'))
    if (month.revenues) setTotalRevs(sumArray(month.revenues, 'amount'))
    if (month.expenses) setTotalExps(sumArray(month.expenses, 'amount'))
    if (month.invested) setTotalInvs(sumArray(month.invested, 'amount'))
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
          <SidebarSection month={month} header='Money On Hand' value={totalOnHand} color='black' sub_items={month.on_hand} />
          <SidebarSection month={month} header='Revenues' value={totalRevs} color='green' sub_items={_.orderBy(month.revenues, 'amount', 'desc')} />
          <SidebarSection month={month} header='Expenses' value={totalExps} color='red' sub_items={_.orderBy(month.expenses, 'amount', 'desc')} />
          <SidebarSection
            month={month}
            header='Investments'
            value={totalInvs}
            color='black'
            sub_items={_.orderBy(month.invested, 'amount', 'desc')}
          />
        </Fragment>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Sidebar

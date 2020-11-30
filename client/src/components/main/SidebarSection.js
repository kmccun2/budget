import React from 'react'
import { formatNumber } from '../../actions/helperFunctions/formatNumber'

const SidebarSection = ({ header, value, sub_items, color }) => {
  return (
    <div className='sidebar-section'>
      <div className='sbs-item'>
        <div className='sbs-header'>{header}</div>
        <div className='sbs-content' style={{ color: color, fontWeight: 'bold' }}>
          ${value}
        </div>
      </div>
      {sub_items &&
        sub_items.map((item) => (
          <div className='sbs-item' key={item.id} style={{ paddingLeft: 15 }}>
            <div className='sbs-header' style={{ fontSize: 14 }}>
              {item.name}
            </div>
            <div className='sbs-content' style={{ fontSize: 14, color: color }}>
              ${formatNumber(parseFloat(item.amount).toFixed(2))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default SidebarSection

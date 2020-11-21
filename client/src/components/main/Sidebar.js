import React from 'react'

const Sidebar = ({ month }) => {
  return (
    <div className='sidebar-container'>
      {month ? (
        <div className='month-header'>
          {month.name} {month.year}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Sidebar

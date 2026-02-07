import React from 'react'
import Sidebar from './Sidebar'
import Products from './Products'

function MainContent() {
  return (
    <div className='flex m-20 gap-10 justify-end'>
        <Sidebar />
        <Products   />
    </div>
  )
}

export default MainContent
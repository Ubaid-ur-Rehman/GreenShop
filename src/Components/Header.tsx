import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header flex justify-between items-center p-5'>
        <div className='logo'>
            <img src="./Logo.png" className='' alt="" />
        </div>
        <div className='nav'>
            <ul className='flex gap-5'>
                <li className='selected font-bold border-bottom '><a>Home</a></li>
                <li><a>Shop</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
         <div className='flex gap-5 items-center'>
            <img src="./Search.svg" className='' alt="" />
            <img src="./Message.svg" className='' alt="" />
            <button className='green-btn text-white px-4 py-2 rounded'>Login</button>
        </div>
    </div>
  )
}

export default Header
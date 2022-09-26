import React from 'react'
import logo from '../logo.svg'

function Navbar() {
  return (
    <nav className="flex items-center w-full h-11 bg-violet-800 text-white text-opacity-90 text-md font-medium ">
      <ul className="flex justify-between px-40 w-screen">
        <li className="text-lg cursor-pointer text-yellow-400 opacity-100">
          getir
        </li>
        <li className="flex">
          <div className="flex px-2 cursor-pointer">
            <img
              width={'40px'}
              src={logo}
              alt="logo"
            />
            <div>Giriş yap</div>
          </div>
          <div className="flex px-2 cursor-pointer">
            <img
              width={'40px'}
              src={logo}
              alt="logo"
            />
            <div>Kayıt Ol</div>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

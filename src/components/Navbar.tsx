import React from 'react'

export const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 border border-red-500 flex">
      <div className="px-8 py-4">Podcusts</div>
      <ul className="flex w-full justify-end items-center border">
        <li className="px-8">About</li>
        <li className="px-8">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar

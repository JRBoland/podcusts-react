import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="top-0 flex justify-between items-center w-full p-4">
      <Link className="text-xl font-bold hover:text-gray-500 transition transform duration-300" to="/">Podcusts</Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <NavLink className="text-gray-700 hover:text-white transition transform duration-300" to="/about">About</NavLink>
        </li>
        <li>
          <NavLink className="text-gray-700 hover:text-white transition transform duration-300" to="/contact">Contact</NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md rounded z-20 p-4 space-y-4">
          <li>
            <NavLink className="text-gray-700 hover:text-black" to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink className="text-gray-700 hover:text-black" to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar

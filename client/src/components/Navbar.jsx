import React from 'react'
import Buy from './Buy'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-28 items-center h-20 text-green-500 bg-black'>
        <h1 className='text-3xl font-bold'>Pulse</h1>
        <ul className='flex'>
            <li className='p-4 mx-2'><Link className='text-white font-bold text-lg' to="/">Home</Link></li>
            <li className='p-4 mx-2'><Link className='text-white font-bold text-lg' to="/buy">Buy</Link></li>
            <li className='p-4 mx-2'><Link className='text-white font-bold text-lg' to="/list">Holders</Link></li>
        </ul>
    </nav> 
  )
}

export default Navbar

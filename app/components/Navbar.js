import Link from 'next/link'
import React from 'react'
import { ImLocation } from 'react-icons/im'
import { BiMenu } from 'react-icons/bi'
import { IoSearchCircle } from 'react-icons/io5'


const Navbar = () => {
  return (
    <header className='font-nunito text-lg text-lime-600 flex justify-between items-center p-3 z-1000'>
      <div className='flex space-x-10'>
        <Link href="/" className='text-[1.35rem]  font-semibold'>Munchie Map</Link>
        <div className='flex items-center space-x-1'>
          <ImLocation size={28} color='#171717'/>
          <p>Location</p>
        </div>
      </div>

      <div className='flex items-center border-2 border-neutral-800 rounded-full pl-2'>
        <input 
        placeholder='Search Resturants'
        className='flex-grow bg-transparent outline-none placeholder-gray-400 rounded-md px-3'/>
        <IoSearchCircle size={40} color='#65a30d' className=' cursor-pointer'/>
      </div>

      <div className='flex items-center space-x-4'>
        <Link href='/signup'>Sign Up</Link>
        <BiMenu size={30} color='#171717' className='cursor-pointer'/>
      </div>
  </header>
  )
}

export default Navbar
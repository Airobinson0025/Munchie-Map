import Link from 'next/link'
import React from 'react'
import { ImLocation } from 'react-icons/im'
import { BiMenu } from 'react-icons/bi'
import { IoSearchCircle } from 'react-icons/io5'


const Navbar = () => {
  return (
    <header className='font-nunito text-lg text-neutral-200 tracking-wide flex justify-between items-center p-3 bg-neutral-900 shadow-sm shadow-neutral-100/40 z-1000 fixed w-full'>
      <div className='flex space-x-8'>
        <Link href="/" className='text-[1.35rem]  font-semibold'>Munchie Map</Link>
        <div className='flex items-center space-x-1'>
          <ImLocation size={22} color='#65a30d'/>
          <p>Location</p>
        </div>
      </div>

      {/* <div className='flex items-center border-[1px] border-neutral-400 rounded-full pl-2'>
        <input 
        placeholder='Search Resturants'
        className='flex-grow bg-transparent outline-none placeholder-gray-400 rounded-md px-3'/>
        <IoSearchCircle size={40} color='#65a30d' className=' cursor-pointer'/>
      </div> */}

      <div className='flex items-center space-x-6'>
        <div className='flex items-center border-[1px] border-neutral-400 rounded-full pl-2'>
            <input 
            placeholder='Search Resturants'
            className='flex-grow bg-transparent outline-none placeholder-gray-400 rounded-md px-3'/>
            <IoSearchCircle size={40} color='#65a30d' className=' cursor-pointer'/>
        </div>
        <Link href='/signup'>Sign Up</Link>
        <BiMenu size={35} color='#65a30d' className='cursor-pointer'/>
      </div>
  </header>
  )
}

export default Navbar

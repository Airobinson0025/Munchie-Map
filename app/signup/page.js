'use client'
import React, { useState } from 'react'
import Link from 'next/link'


const SignUp = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            fetch('api/user', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({ name, email, username, password })
            })
        
        } catch (error) {

            console.error(error)
            
        }

        setName('')
        setEmail('')
        setUsername('')
        setPassword('')

    }


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        
        <div className='font-nunito w-1/2'> 
            <form onSubmit={handleSubmit} className='flex flex-col space-y-2 p-12 bg-neutral-900 text-white text-lg rounded-xl shadow-lg shadow-slate-400'>
                <h1 className='font-semibold text-center text-3xl'>Create Account</h1>
                <p className='text-center text-md text-gray-400'>Enter your email below to create an account</p>
            
                <label className='font-semibold'>Name:</label>
                <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder='Full Name' 
                className='bg-neutral-800 outline-gray-300 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-400'/>
            
                <label>Email:</label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='example@gmail.com' 
                className='bg-neutral-800 outline-gray-300 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-400 '/>

                <label>Username:</label>
                <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='username' 
                placeholder='Username' 
                className='bg-neutral-800 outline-gray-300 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-400 '/>

               <label>Password</label>
               <input
               value={password}
               onChange={(e) => setPassword(e.target.value)} 
               type='password' 
               placeholder='Password' 
               className='bg-neutral-800 outline-gray-300 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-400 '/>

               <div className='flex space-x-1 justify-center pt-2'>
                <p>Already have an account?</p>
                <Link href='/signin' className='text-lime-600 font-semibold hover:scale-105 hover:underline underline-offset-2 transition duration-200'>Sign In</Link>
               </div>

               <div className='text-center'>
                    <button 
                    type='submit' 
                    className='bg-lime-600 mt-2 py-2 px-8 rounded-lg hover:scale-105 transition duration-200'>Sign Up</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
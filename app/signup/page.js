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
    <div className='flex'>

        <div className='h-screen w-1/2 signup-bg'>
            
        </div>
        
        <div className='font-nunito w-1/2'> 
            <form onSubmit={handleSubmit} className='flex flex-col justify-center space-y-[7px] p-14 bg-neutral-900 text-white text-lg tracking-wide shadow-lg h-screen'>
                <h1 className='font-semibold text-center text-3xl'>Create Account</h1>
                <p className='text-center text-md text-gray-400'>Enter your information below to create an account</p>
            
                <label className='font-semibold text-[1rem]'>Name:</label>
                <input
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type='text' 
                placeholder='Full Name' 
                className='bg-neutral-800 outline-offset-1 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-500'/>
            
                <label className='font-semibold text-[1rem]'>Email:</label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Example@yahoo.com' 
                className='bg-neutral-800 outline-offset-1 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-500 '/>

                <label className='font-semibold text-[1rem]'>Username:</label>
                <input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type='username' 
                placeholder='Username' 
                className='bg-neutral-800 outline-offset-1 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-500 '/>

               <label className='font-semibold text-[1rem]'>Password:</label>
               <input
               value={password}
               onChange={(e) => setPassword(e.target.value)} 
               type='password' 
               placeholder='Password' 
               className='bg-neutral-800 outline-offset-1 py-1 pl-2 rounded-md placeholder-gray-500 border-[1px] border-gray-500 '/>

               <div className='flex space-x-1 justify-center pt-2'>
                <p>Already have an account?</p>
                <Link href='/signin' className='text-lime-600 font-semibold hover:underline underline-offset-2 transition duration-200'>Sign In</Link>
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
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        
        <div className='font-nunito w-1/2'> 
            <form className='flex flex-col space-y-2 p-12 bg-lime-600 text-white text-lg rounded-xl'>
                <h1 className='font-semibold text-center text-3xl pb-2 underline underline-offset-8'>Create Account</h1>
            
                <label className='font-semibold'>Name</label>
                <input type='email' placeholder='Full Name' className='text-neutral-800 outline-none py-1 pl-2 rounded-md '/>
            
                <label>Email</label>
                <input placeholder='example@gmail.com' className='text-neutral-800 outline-none py-1 pl-2 rounded-md '/>

                <label>Username</label>
                <input type='username' placeholder='Username' className='text-neutral-800 outline-none py-1 pl-2 rounded-md '/>

               <label>Password</label>
               <input type='password' placeholder='Password' className='text-neutral-800 outline-none py-1 pl-2 rounded-md '/>

               <label>Confirm Password</label>
               <input type='password' placeholder='Password' className='text-neutral-800 outline-none py-1 pl-2 rounded-md '/>

               <div className='text-center'>
                    <button className='bg-neutral-900 mt-6 py-3 px-8 rounded-lg hover:scale-105 transition duration-200'>Sign Up</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp
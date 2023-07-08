import React from 'react'
import InputFields from './InputFields'
export default function Create() {
  return (
    <div className='create mt-40 ml-96'>
        <h3>Create account</h3>
        <InputFields className="ml-10 h-10 w-80 pl-2 border border-black"  name="First Name" /><br />
        <InputFields className="ml-10 h-10 w-80 pl-2 border border-black"  name="Last Name" /><br />
        <InputFields className="ml-10 h-10 w-80 pl-2 border border-black"  name="Email" /><br />
        <InputFields className="ml-10 h-10 w-80 pl-2 border border-black"  name="Password" /><br />
        <button className='bg-slate-400 w-16 ml-5 rounded-1 text-white '>Create</button>
    </div>
  )
}

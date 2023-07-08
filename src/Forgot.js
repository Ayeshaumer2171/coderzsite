import React from 'react';
import InputFields from './InputFields';
import {Link} from 'react-router-dom';
export default function Forgot() {
  return (
  
<div className='mt-40 ml-96'>
         <h3>Reset Your Password</h3><br />
         <p >We will send you an email to reset your password</p><br />
         <InputFields className="  ml-10  h-10 w-80 pl-2 border border-black"  name="Email" /><br />   
         <div className=' ml-40'>
         <button className='bg-slate-400 w-16 ml-5 rounded-1 text-white '>Sign Up</button><br />
         <Link to='/login' className='text-black ml-5'>Cancel</Link>
         </div>

 </div>

  )
}

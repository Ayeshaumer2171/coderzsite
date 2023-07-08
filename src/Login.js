import React from 'react';
import InputFields from './InputFields';
import {Link} from 'react-router-dom';
function Login() {
  return (
   
<div className=' mt-20 ml-96'>
        <div>
        <h3 className=' content-center ml-40'>LOGIN</h3><br />
        <InputFields className="ml-10 h-10 w-80 pl-2 border border-black"  name="Email" /><br />
        <InputFields className="ml-10 h-10 w-80 pl-2 border border-black"  name="Password" />
         <Link to='/forgot'className='text-black ml-8' >Forgot your Password</Link><br />
         </div>

         <div className=' ml-40 mt-2'>
         <button className='bg-slate-400 w-16 ml-5 rounded-1 text-white '>Sign Up</button><br />
         <Link to='/create' className='text-black'>Create your account</Link><br />
         </div>
 </div>

  )
}

export default Login
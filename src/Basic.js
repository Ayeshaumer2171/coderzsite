import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import InputFields from './InputFields'
import MyImage from './ayeshalogo.png';


import * as Yup from 'yup';
const Basic = () => {

const validate=Yup.object({
  email:Yup.string()
  .email('Email is invalid')
  .required('Email is required'),
  firstname:Yup.string()
  .max(15,'Must be 15 characters or less')
  .required('Required'),
  lastname:Yup.string()
  .max(20,'Must be 20 characters or less')
  .required('Required'),
   phone:Yup.string()
   .max(15,'Must be 15 characters or less')
    .required('Required')

})

return(
  <div>
   <img className='pl-10 pt-10' src={MyImage} alt="My Image" width={100} height={100} />
    {/* <img className='pl-10 pt-10'  src="https://cdn.shopify.com/s/files/1/2277/5269/files/image_3_1_150x.png?v=1641188192" alt=""></img> */}
    <Formik
      initialValues={{
          email: '',
          country:'',
          firstname:'',
          lastname:'',
          address:'',
          suits:'',
          city:'',
          postalcode:'',
          phone:'',                    
    }}
    validationSchema={validate}
      onSubmit={(values) => {
        console.log("values",values)
      }} >

      {formik => (
        <Form className='m-5 pt-10 flex flex-col'>
          
   <div className='flex flex-row w-full justify-between'><p className='text-xl '>Contact information</p><p>Already have an account?<Link to='/login' className='no-underline'><font className="text-blue-500" >Log in</font></Link></p></div>     
          <InputFields  className="border border-black w-full h-10 mt-3 pl-3" label="Contact information"  name="Email" type="email" />
          <p>Email me with news and offers</p>
        
        <p className='mt-5'>Shipping address</p>
          <InputFields className="border border-black w-full h-10  pl-3"   name="Country/Region" type="text" />
          <ErrorMessage name='name' />
        <div className='flex flex-row w-full h-10 mt-2' >  
        <div className='w-full mr-3'>
        <InputFields className="border border-black  w-full h-10 pl-3"   name="First name" type="text" />
        </div>
        <div className='w-full'>
        <InputFields className="border border-black  w-full h-10 pl-3"   name="Last name" type="text" />
        </div>
          </div>
          <InputFields className="border border-black w-full h-10 mt-2 pl-3"   name="Address" type="text" />
          <InputFields className="border border-black w-full h-10 mt-2 pl-3"   name="Appartment,suits,etc (Optional)" type="text" />
          <div className='flex flex-row  w-full h-10  mt-2 '>
            <div className='w-full mr-3'>
          <InputFields  className="border border-black  w-full h-10 pl-3"   name="City" type="text" /></div>
          <div className='w-full'><InputFields className="border border-black  w-full h-10  pl-3"   name="Postal Code" type="text" /></div>
          </div>
          <InputFields className="border border-black w-full h-10 mt-2 pl-3"   name="Phone Number" type="text" />
          <p>Save this information for next time</p>
          <div className='flex flex-row justify-between w-full items-center'>
          <p className='text-blue-500 flex cursor-pointer '><svg focusable="false" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width={10} className='fill-blue-500 ' viewBox="0 0 10 10"><path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path></svg><font className='pb-1'>return to cart</font></p>
    
         <button className=' text-white h-16 rounded-md w-40 bg-blue-500 mb-3'>Continue to Shipping</button>
          </div>
          

        </Form>

      )}
    </Formik>
  </div>
)
      };

export default Basic;
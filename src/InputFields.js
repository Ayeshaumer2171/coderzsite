import React from "react";
import {useField} from 'formik';

const InputFields= ({...props} )=> {
    // const[field,meta]=useField(props);
    return(
    //     <div>
    //      <label htmlfor={field}>{name}</label> 
    //       <input className={`form-control shadow-none ${meta.touched && meta.error && 'is is-invalid'}`}{...props} autoComplete='off' />  */}
    //    <ErrorMessage component='div' name={field.name} className='error' />
    //     </div>
 <div>
     <input placeholder={props.name} {...props} />
 </div>
    )
}
export default InputFields
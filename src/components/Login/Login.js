import { useState } from "react"

import "./login.css"
const Login = () => {
    const[isLogin,SetisLogin]=useState(true);
    const toggle=()=>{
        SetisLogin(prev => !prev);
    }
  return (
    <div className='container login_container '>
        
            <form action="
            ">
             <h2>{isLogin ? 'Login':'signup'}</h2> 
               <input type="email" placeholder='Your-Email' required />
                <input type="password" name="password" id="pas" placeholder='password' required/>
               {!isLogin &&   <input type="password" name="password" id="pass" placeholder='confirm-password' required/>} 
                 <label htmlFor="">{isLogin ? "Don't have an account?":"have an account?" } <a onClick={toggle}>{isLogin ? "signup" : "login"}</a></label>
               
                 <button className='btn btn-primary'>{isLogin?"Login" :"Signup"} </button>
            </form>
        
    </div>
  )
}

export default Login
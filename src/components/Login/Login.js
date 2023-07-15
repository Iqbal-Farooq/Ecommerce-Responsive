import { useState,useRef, useEffect, useCallback} from "react"

import "./login.css"
const Login = () => {
    const[isLogin,SetisLogin]=useState(true);
    const[email,setEmail]=useState('');
    const [isEmailValid,setEmailIsvalid]=useState(false);
    const [emailError,setEmailerror]=useState(true);
    const[password,setPassword]=useState('');
    const [isPasswordValid,setPasswordValid]=useState(false);
    const[passwordError,setPasswordError]=useState(true);

  
   let validateEmail=(email)=>{
        let EmailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const minLength=9;
      return(EmailRegex.test(email) && email.length>=minLength);

     };

    
         const EmailHandler=(e)=>{
      const neweEmail=e.target.value;
      setEmail(neweEmail);
      setEmailIsvalid(validateEmail(neweEmail))
      if(isEmailValid){
          setEmailerror(true);
      }else{
        setEmailerror(false);
      }
      

    }
   
  
    

    const toggle=()=>{
        SetisLogin(prev => !prev);
    }

    const submitHandler=(e)=>{



      e.preventDefault();
      if(isEmailValid && isPasswordValid){
            if(!isLogin){
          fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD06aN7wJjkEk89g54U8UpSaeOuM0BGv0E',{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true,
            }),
           
        }).then(res=>{
            if(res.ok){
                console.log("successfully registered")
                setEmail('');
                setPassword('');
                
              
                alert("Registered Successfully")
                return res.json();
            }else{
                return res.json().then((data)=>{console.log(data)
                alert(data.error.message)}).catch(err=>console.log(err))
            }
        })
       
    }else{
     
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD06aN7wJjkEk89g54U8UpSaeOuM0BGv0E',{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true,
            }),
    }).then((res)=>{
      if(res.ok){
       
        alert("login success");
          setEmail('');
                setPassword('');
    
        return res.json().then(data=>{console.log(data.idToken)
          localStorage.setItem("token",data.idToken)
        });
      }else{
         return res.json().then((data)=>{console.log(data)
                alert(data.error.message)}).catch(err=>console.log(err))
          

      }
    }).catch(err=>console.log(err))
  }

      }else{
        alert("enter valid email and password")
      }


 

  
  }
  
    const handlePasswordChange = (event) => {
      const newPassword=event.target.value;
      setPassword(newPassword);
      setPasswordValid(validatePassword(newPassword));
      if(isPasswordValid){
       setPasswordError(true);
      }else{
        setPasswordError(false)
      }

    }

     const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    return(passwordRegex.test(password)); 
  };
   
   
    

  return (
    <div className='container login_container '>
        
            <form action="
            ">
             <h2>{isLogin ? 'Login':'signup'}</h2> 
               <input className={!emailError?'input_blur':''}
                type="email" 
               placeholder='Your-Email'
                value={email}
                onChange={EmailHandler}

                />
                {!emailError &&<label className="error">enter the valid email address</label>}

                <input className={!passwordError?'input_blur':''} type="password"
                 name="password" id="pas"
                  placeholder='password' 
                  value={password}
                    onChange={handlePasswordChange}
                  />
                  {!passwordError && <label className="error">password should be minimum 6 charecters long with at least  one letter one special charecter and a number</label>}
            
                 <label htmlFor="">{isLogin ? "Don't have an account?":"have an account?" } <a onClick={toggle}>{isLogin ? "signup" : "login"}</a></label>
               
                 <button onClick={submitHandler} className='btn btn-primary'>{isLogin?"Login" :"Signup"} </button>
            </form>
        
    </div>
  )
}

export default Login
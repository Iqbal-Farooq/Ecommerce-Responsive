

import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react'

export const LoginContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{

    }
    
})


const AuthContextProvider = (props) => {
     const InitialToken=localStorage.getItem('token');
      const[TokenState,SetTokenState]=useState(InitialToken);
          const navigate=useNavigate();

   const userIsLogedIn=!!TokenState;

const LoginHandler=(token)=>{
  localStorage.setItem('token',token);
  SetTokenState(token);
  navigate('/products');
}

const logoutHandler=()=>{
    localStorage.removeItem('token');
    SetTokenState(null);
}



    const auth={
    token:TokenState,
    isLoggedIn:userIsLogedIn,
    login:LoginHandler,
    logout:logoutHandler,
}


  return (
    <LoginContext.Provider value={auth}>{props.children}</LoginContext.Provider>
  )
}

export default AuthContextProvider;
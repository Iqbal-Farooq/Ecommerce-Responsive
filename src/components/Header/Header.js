import React from 'react'
import BG from "../../images/bg2.jpg"
import "./header.css"
import Nav from './Nav'
const Header = (props) => {
  return (<>
    <div className='container header_container'>
        <img src={BG} />
    </div>
    <Nav onclick={props.onclick}/>

    </>
  )
}

export default Header
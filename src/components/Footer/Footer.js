import React from 'react'
import {BsGithub} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"
import {BiLogoInstagram} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import "./footer.css"
const Footer = () => {
  let date=new Date().getFullYear();
  
  return (
    <div className='footer'>
        <div className="container footer_container">
            <div className="copy_right">
            &copy; {date} all rights reserved

            </div>
            <div className="links">
                <a href="https://github.com/Iqbal-Farooq" target='_blank'>
                <BsGithub />

                </a>
                <a href="https://www.facebook.com/profile.php?id=100091251907056" target='_blank'>
                <FaFacebook /></a>
                <a href="https://www.linkedin.com/in/iqbal-ahmad-dar-251179234/" target='_blank'><AiFillLinkedin /></a>
                 <a href="https://api.whatsapp.com/send?phone+917780908889" target='_blank'><BsWhatsapp /></a>
                  <a ><BiLogoInstagram /></a>
               
           
            </div>
        </div>
    </div>
  )
}

export default Footer
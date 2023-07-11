import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='container contact_container '>
        
            <form action="
            ">
             <h2>contact us</h2>
                <input type="text" placeholder='Your Name' required />
                <input type="email" placeholder='Your-Email' required />
                 <textarea name="msg" id="" rows='2' placeholder='message' ></textarea>
                <button className='btn btn-primary'>Submit </button>
            </form>
        
    </div>
  )
}

export default Contact;
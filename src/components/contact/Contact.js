
import React,{useState} from 'react'
import "./contact.css"
const Contact = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[message,setMessage]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    alert('thanks for contacting us');
    setEmail('');
    setName('');
    setMessage('');

    
  }
  return (
    <div className='container contact_container '>
        
            <form action="
            ">
             <h2>contact us</h2>
                <input type="text"
                 placeholder='Your Name'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                  required />
                <input type="email"
                 placeholder='Your-Email'
                  value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 
                  required />
                 <textarea name="msg" 
                 id="" rows='2' 
                 placeholder='message'
                  value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                <button className='btn btn-primary' onClick={submitHandler}>Submit </button>
            </form>
        
    </div>
  )
}

export default Contact;
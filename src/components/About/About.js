import React from 'react'
import "./about.css"
import img1 from "../../images/bg4.jpg"
import Context from '../Context/Context'
import { useContext } from 'react'
const About = () => {
  const ctx=useContext(Context);
  console.log(ctx.items);
  return (
    <div className='container about_container'>
    <div className="image">
    <img src={img1} alt='img' />

    </div>
    <div className="container content">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum amet dolor deserunt ex, aut deleniti modi consequuntur voluptate ut. Autem culpa molestiae quidem illo amet, vel sint iure laborum aliquid.</p>
    </div>

        
    </div>
  )
}

export default About
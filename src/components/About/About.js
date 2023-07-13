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
   
    <div className="container_content">
      <p>Welcome to Our eCommerce Store!</p>

      <p>
         we are passionate about providing high-quality products and exceptional customer service. With years of experience in the industry, we have built a reputation for offering an extensive range of premium products that meet the diverse needs and preferences of our customers.
      </p>

      <p>
        Our mission is to make your online shopping experience enjoyable, convenient, and secure. We believe in the power of eCommerce to bring you the finest products from around the world, right to your doorstep. Whether you're searching for trendy fashion, innovative gadgets, home decor, or health and beauty essentials, we've got you covered.
      </p>
      <p>
        What sets us apart is our commitment to excellence. We carefully curate our product selection, partnering with trusted suppliers and brands that share our values. Every item in our inventory goes through rigorous quality checks to ensure that it meets our high standards.
      </p>
      <p>
        We understand the importance of customer satisfaction, which is why we prioritize providing exceptional support. Our friendly and knowledgeable customer service team is ready to assist you with any questions, concerns, or inquiries you may have. Your satisfaction is our top priority, and we strive to exceed your expectations at every step.
      </p>

      <p>
        we believe in giving back to the community. We actively engage in sustainable practices, such as eco-friendly packaging and supporting charitable causes. By shopping with us, you contribute to our efforts to make a positive impact on society and the environment.
      </p>

      <p>
        Thank you for choosing Us. We are excited to be your trusted online shopping destination. Explore our wide range of products, enjoy a seamless shopping experience, and let us help you discover the perfect items that enhance your lifestyle.
      </p>

      <p>
        Happy shopping!
      </p>
    </div>

        
    </div>
  )
}

export default About
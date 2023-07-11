import React from 'react'
import "./home.css";
const Home = () => {
  const data=[
    {
    id:1,
    date:"12-09-2023",
    singer:"Ishfaq Kawa",
    location:"Gulmarg"

  },
    {
    id:2,
    date:"18-09-2023",
    singer:"Mahi Aamir",
    location:"Pahelgam",

  },
    {
    id:3,
    date:"10-10-2023",
    singer:"Waqar Khan",
    location:"Lolab"

  },
    {
    id:4,
    date:"8-11-2023",
    singer:"Anu Anaf",
    location:"Bangus Valley"

  },
  {
    id:5,
    date:"19-11-2023",
    singer:"Umer Nazir",
    location:"Iqbal Park"

  },
  {
    id:6,
    date:"15-12-2023",
    singer:"Yawar Wani",
    location:"Sonamarg"

  },
  {
    id:7,
    date:"28-12-2023",
    singer:"Uzma Shafi",
    location:"Dal Lake"

  }
]
  return (
    <div className="home">
    <div className=' home_container'>
      <div className="generics">
<h2>The Generics</h2>
      </div>
      <div className="play">
         <img className="play-btn"
          src={"https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-vector-play-icon-png-image_932964.jpg"} alt='img'></img>

      </div>
      <div className="album">
<h3>Get Our Latest Album</h3>
      </div>
   
    </div>
       <div className="container tours">

      
      {
        data.map((data)=>{return <div>
        <div className='tables'>
        <div>
         {data.date}
        </div>
         <div>
         {data.singer}
        </div>
        
         <div>
           {data.location}
        </div>
        <div>
          <button className='btn btn-primary'>Book Ticket</button>
        </div>
       
        </div>
        <hr></hr>
        </div>
       
        })
      }
    
      {/* </table> */}

      </div>
    </div>
  )
}

export default Home
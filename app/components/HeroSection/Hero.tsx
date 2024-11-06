import Image from 'next/image';
import Style from "./Hero.module.css"
import React from 'react'

function HeroScetion() {
  return (
    <div>
      <div className={Style.background}>
      <Image
        src="/3rd.png" 
        alt="A description of the image"
        width={200} 
       style={{marginLeft:"20%",paddingTop:"50px"}}
        height={10} 
      />
      </div>
        <div className={Style.title}>
           <b> <h1>The best place for <br />
            a Shopeing </h1></b>
            <span style={{fontSize:"8px",width:"210px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta eaque possimus aut natus? Veritatis.</span>
        </div>
        <button className={Style.btn} type='submit'>Get Started</button>


       
      
    </div>
  )
}

export default HeroScetion;

import Navbar from '../components/Header/Navbar/Nav';
import HeroScetion from '../components/HeroSection/Hero';
import Footer from '../components/Header/Footer';
import Style from "./MyWebsite.module.css"
import Image from 'next/image';

import React from 'react'

function Page() {
  return (
    <div>
      <Navbar />
      <HeroScetion></HeroScetion>
      <h4 style={{marginTop:"15%",padding:"15px"}}>Top Sells</h4>
      <div className={Style.cta}>
          <div className={Style.img}>
          <Image
        src="/first..jpeg" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

      {/* 2nd */}

      <div className={Style.img}>
          <Image
        src="/2nd.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

        {/* 3rd */}

        <div className={Style.img}>
          <Image
        src="/3rd.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

      {/* 4th */}


      <div className={Style.img}>
          <Image
        src="/4th.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

      {/* 5th */}

      <div className={Style.img}>
          <Image
        src="/5th.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>
      </div>

      <div className={Style.cta}>
          <div className={Style.img}>
          <Image
        src="/first..jpeg" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

      {/* 2nd */}

      <div className={Style.img}>
          <Image
        src="/2nd.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

        {/* 3rd */}

        <div className={Style.img}>
          <Image
        src="/3rd.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>

      {/* 4th */}


      <div className={Style.img}>
          <Image
        src="/4th.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'><a href="#">Buy Now!</a></button>
      </div>
      </div>

      {/* 5th */}

      <div className={Style.img}>
          <Image
        src="/5th.png" 
        alt="A description of the image"
        width={100}
        height={100}        
      />
      <h1>Title</h1>
      <p style={{fontSize:"6px"}}>This is Sub heading of image
      by it with cheep price</p>
      <div className={Style.subHeading}>
      <p style={{fontSize:"8px", marginTop:"3px"}}>Price : $25</p>
      <button className={Style.btn} type='submit'>Buy Now!</button>
      </div>
      </div>
      </div>
      <div className='flex'>
      <Image 
                src={'/shoes-banner.png'}
                alt='Image of Figma'
                width={300}
                height={50}  
                style={{height:"180px"}}              
            />
            <Image 
                src={'/shoes-2.png'}
                alt='Image of Figma'
                width={400}
                height={50}  
                style={{height:"180px"}}              
            />
      </div>

      <div  style={{marginTop:"10px"}} className={Style.lastsection}>
        <h3 style={{padding:"20px"}}>How it Works</h3>
        <div className='flex' style={{justifyContent:"space-evenly"}}>
        <div className={Style.work}>
        </div>
        <div className={Style.work}>

        </div>
        <div className={Style.work}>

        </div>
        <div className={Style.work}>

        </div>
        </div>
      </div>
      <Footer></Footer>
      </div>
  )
}

export default Page;

import Image from 'next/image';
import React from 'react'

function page() {
  return (
    <div>
        <div style={{backgroundColor:"#A29875"}} className='text-white font-Algerian text-2xl h-134 px-2'>
            MANZZARI
        </div>
        <div className='flex '>
          <div className='mt-20 p-8 ' style={{width:"400px"}}>
            <h1 style={{fontFamily:"libre Bodoni"}} className=''>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
            <p style={{fontFamily:"libre Bodoni" , width:"300px"}} className='text-xs'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

            <button type='submit' className='w-28 h-58 bg-[#A29875] text-white p-1 rounded-md '>Explore Now</button>
            </div>
            {/* <Image 
                src={'/images/figma-img.png'}
                alt='Image of Figma'
                width={30}
              height={30}
              style={{width:"250px"}}
            /> */}
            <img style={{width:"200px", height:"220px"}} className='mt-8' src="/images/figma-img.png" alt="" />
        </div>
        
    </div>
  )
}

export default page;



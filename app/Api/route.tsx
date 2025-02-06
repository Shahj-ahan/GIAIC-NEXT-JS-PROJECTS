// import { Description } from "@radix-ui/react-dialog"
// import { NextResponse } from "next/server"



// export const GET = async () => {
    
//     const data = [
//         {title : "Rolex Watch", id: 1, description : "Rolex Watch is a watch brand that offers high-quality watches at affordable prices"},
//         {title : "casio Watch", id: 2, description : "casio Watch is a watch brand that offers high-quality watches at affordable prices"}
    
//     ]
//     return NextResponse.json({massage:"We  Create our First Api"},
//         {status : 200}
//     )
// }

// "use client"
// import React, { useEffect} from 'react'

// const products = ()=>{

//     const API = 'https://hn.algolia.com/api/v1/search?query=html'
    
//     const  fecthApiData = async (Url) =>{
//         try {
//     const res = await fetch(Url);
//     const data = await res.json(); 
//     console.log(data);
    

//     }catch{
//         console.log("Error")
//      }
//     }
//     useEffect(()=>{
      
//         fecthApiData(API);
//     }, []);


//   return (
//     <div>
//         <h2>My New Post</h2>
//         </div>
//   )
// }


// export default products;


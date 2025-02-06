// import { NextRequest, NextResponse } from 'next/server'

// export  function GET(request:NextRequest) {
//     const url = request.nextUrl
//     const name = url.searchParams.get('name');   
//     const age = url.searchParams.get('age');   

//     if(age =="20"){
//       return new NextResponse(`your age is equal to ${age}`)  
//       }
//   return NextResponse.json({url:url, name:name,age:age})
  
// }

// import { NextRequest, NextResponse } from 'next/server'

// export async function  POST(request:NextRequest) {
//   const {name , age , Status} = await request.json()

  
//   return  NextResponse.json({name, age ,Status})
// }

// import { NextRequest, NextResponse } from 'next/server'

// export async function  PUT(request:NextRequest) {
//   const {name , age , Status} = await request.json()

  
//   return  NextResponse.json(`${name}, ${age}, ${Status} , "Has Your Criteria Your Data Was Updated"}`)
// }

import { NextRequest, NextResponse } from 'next/server'

export async function  DELETE(request:NextRequest) {
  const { Status} = await request.json()

  
  return  NextResponse.json(`${Status} , "Status Has Been Deleted"}`)
}

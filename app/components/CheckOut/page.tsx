'use client';
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import Footer from '../Footer/page';
import Navbar from '../Navbar/page';

function CheckOut() {
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);

  return (
    <div>
      <div>
        <Navbar />
        <div className="relative flex items-center justify-center h-[300px]">
          <Image
            src="/Hackathon/menu-image.png"
            alt="Background for Our Menu"
            layout="fill"
            objectFit="cover"
            className="-z-10"
          />
          <div className="text-center text-white z-10">
            <h1 className="text-3xl font-bold">Cheekout Page</h1>
            <p className="text-sm mt-2">
              <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'> Cheekout</span>
            </p>
          </div>
        </div>
      </div>


      <div className="flex justify-center p-10 bg-gray-100">
        <div className="w-3/5 bg-white p-6 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="border p-2 rounded" />
            <input type="text" placeholder="Last name" className="border p-2 rounded" />
            <input type="email" placeholder="Email address" className="border p-2 rounded" />
            <input type="text" placeholder="Phone number" className="border p-2 rounded" />
            <input type="text" placeholder="Company" className="border p-2 rounded" />
            <select className="border p-2 rounded">
              <option>Choose country</option>
            </select>
            <select className="border p-2 rounded">
              <option>Choose city</option>
            </select>
            <input type="text" placeholder="Zip code" className="border p-2 rounded" />
            <input type="text" placeholder="Address 1" className="border p-2 rounded col-span-2" />
            <input type="text" placeholder="Address 2" className="border p-2 rounded col-span-2" />
          </div>

          <div className="mt-4">
            <input type="checkbox" id="billing" checked={billingSameAsShipping} onChange={() => setBillingSameAsShipping(!billingSameAsShipping)} />
            <label htmlFor="billing" className="ml-2">Same as shipping address</label>
          </div>

          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 border rounded text-gray-700">Back to cart</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">Proceed to shipping →</button>
          </div>
        </div>

        <div className="w-1/3 bg-white p-6 shadow-md rounded-md ml-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {[1, 2, 3,].map((item, index) => (
            <div key={index} className="flex items-center border-b py-2">
              <img src="/Hackathon/checkout.png" alt="Chicken Tikka Kabab" className="w-12 h-12 mr-4" />
              <div>
                <p className="font-semibold">Chicken Tikka Kabab</p>
                <p className="text-sm text-gray-500">150 gm net</p>
                <p className="text-sm">50$</p>
              </div>
            </div>
          ))}
          <div className="mt-4 text-sm">
            <p>Sub-total: <span className="float-right">130$</span></p>
            <p>Shipping: <span className="float-right">Free</span></p>
            <p>Discount: <span className="float-right">25%</span></p>
            <p>Tax: <span className="float-right">54.76$</span></p>
            <p className="font-bold text-lg">Total: <span className="float-right">432.65$</span></p>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded">Place an order →</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CheckOut
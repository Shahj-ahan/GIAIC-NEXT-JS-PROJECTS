import Image from 'next/image'
import React from 'react'
import Header from '../Header/page'
import Footer from '../Footer/page'
import Navbar from '../Navbar/page'

function OurChefs() {
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
                        <h1 className="text-3xl font-bold">Our Chef</h1>
                        <p className="text-sm mt-2">
                            <a href="/" className="hover:underline">Home</a> › <span className='text-orange-500'>Chef</span>
                        </p>
                    </div>
                </div>
            </div>


            <div className='flex justify-center mt-10 mb-20'>
                <div className=" grid grid-cols-1 gap-[16px]  md:grid-cols-3 lg ">
                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-1.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-2.png"
                            alt="chocolate image"
                            width={260}
                            height={150}
                            className="h-[280px] "
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-3.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-4.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-5.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-6.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-7.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-8.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-9.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-10.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-11.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>

                    <div>
                        <Image
                            src="/Hackathon/chefs/chef-12.png"
                            alt="Background for Our Menu"
                            width={260}
                            height={150}
                            className="h-[280px]"
                        />
                        <h2 className='flex gap-16 font-bold'>Fresh Lime </h2>
                        <span className='font-light'> $38.00 <span><del className='text-yellow-400 font-light'>$45.00</del></span></span>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default OurChefs
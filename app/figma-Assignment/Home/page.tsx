import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGlobe } from "react-icons/fa";
import Navbar from '../../components/Navbar/page';


function FigmaProject() {
  return (
    <main>
      <div className="flex flex-col md:flex-row bg-[rgba(247,247,247,1)] p-4 md:pr-16 md:pl-16">
        <h4 className="text-[14px] w-full md:w-auto text-center md:text-left">
          Phone Number: 956 742 455 678
          <span className="border-l-2 border-slate-500 px-2">
            Email: info@ddsgnr.com
          </span>
        </h4>

        <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-600 text-xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-700 text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-800 text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-800 text-xl" />
          </a>
        </div>
      </div>

      <Navbar />

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex  flex-col items-center lg:items-start text-center lg:text-left space-y-4 mt-12
">
          <h1 className="text-[50px] font-bold">Learn new skills <br /> online with ease</h1>
          <p className="text-gray-600 max-w-md text-[18px]">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <button className="px-4 py-2 bg-black w-full md:w-[178px] h-[48px] text-white rounded-lg hover:bg-black">
              Start learning now
            </button>
            <button className="px-4 py-2 bg-gray-200 w-full md:w-[178px] h-[48px] text-black rounded-lg hover:bg-gray-300">
              Explore Courses
            </button>
          </div>

        </div>

        <div className="w-full lg:w-1/2 ">
          <Image
            src="/images/bg-.png"
            alt="Background Image"
            layout="responsive"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="bg-[#F7F7F7] p-8 flex flex-col lg:flex-row items-center">
        <h3 className="text-lg font-semibold gap-4 px-4 lg:px-24 text-center">
          Trusted by 2000+ companies <br /> worldwide.
        </h3>
        <div className="flex flex-wrap justify-center gap-4 px-2 mt-4 lg:mt-0">
          <div className="flex justify-center">
            <Image
              src="/images/logoIpsum.png"
              alt="Background Image"
              layout="intrinsic"
              width={123}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/ooo.png"
              alt="Background Image"
              layout="intrinsic"
              width={123}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/lorem.png"
              alt="Background Image"
              layout="intrinsic"
              width={123}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/loogo.png"
              alt="Background Image"
              layout="intrinsic"
              width={123}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logoispum.png"
              alt="Background Image"
              layout="intrinsic"
              width={123}
              height={32}
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/image.png"
              alt="Background Image"
              layout="intrinsic"
              width={123}
              height={32}
            />
          </div>
        </div>
      </div>

      <div className='pt-[112px] px-[64px] text-center '>
        <h1 className='text-[48px] font-bold'>
          Explore Courses By Category
        </h1>
        <p className='text-[18px] text-center mt-3'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>



      <div className="mt-12 flex flex-wrap gap-8 justify-center">

        <div className="w-full sm:w-[420px] h-[132px] bg-gray-100 p-8 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-18 h-16 text-black-500 bg-white p-4 rounded-[8px]">
            <path d="M12 1L15.09 9H8.91L12 1z"></path>
            <rect x="9" y="9" width="6" height="6" rx="1"></rect>
            <path d="M12 15v4m0 4h4M8 23h4m4-4h4m0-8h-4m-8 0H4"></path>
          </svg>
          <div className="ml-4 p-4">
            <h3 className="text-xl font-semibold text-gray-800">Design & Development</h3>
            <p className="text-gray-600">50+ Courses Available</p>
          </div>
        </div>

        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px]">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800 bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Development</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[420px] h-[132px] bg-[#F7F7F7] rounded-[5px] hidden sm:block">
          <div className="flex p-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-18 h-16 text-gray-800  bg-white p-4 rounded-[8px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 7.5L7.5 10H4.5v4h3l3.75 2.5v-9zm5.25 2.25c.597.597.975 1.419.975 2.25s-.378 1.653-.975 2.25m2.25-6c1.194 1.194 1.875 2.813 1.875 4.5s-.681 3.306-1.875 4.5" />
            </svg>
            <div className="ml-4 p-2">
              <h3 className="text-xl font-semibold text-gray-800">Self Development</h3>
              <p className="text-gray-600">50+ Courses Available</p>
            </div>
          </div>
        </div>
        <div className="w-full  text-center mt-8">
          <button className="bg-white border-[2px] text-black py-2 px-4 rounded-lg">View All Courses</button>
        </div>
      </div>

      <div className="p-6 sm:p-10 lg:p-[112px]">
        <h1 className="text-2xl py-4 sm:text-3xl lg:text-[48px] font-bold text-center">
          Our Achievements
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-[18px] p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              +200
              <p className="text-sm p-1 font-normal sm:text-base lg:text-[18px]">Courses</p>
            </h1>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              50K
              <p className="text-sm p-1 font-normal sm:text-base lg:text-[18px]">Mentors</p>
            </h1>
          </div>
          <div>
            <h1 className="text-xl  sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              370K
              <p className="text-sm p-1 font-normal sm:text-base lg:text-[18px]">Students</p>
            </h1>
          </div>
          <div>
            <h1 className="text-xl  sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              100+
              <p className="text-sm p-1 font-normal sm:text-base lg:text-[18px]">Recognition</p>
            </h1>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-10 lg:p-[112px] ">
        <h1 className="text-2xl py-4 sm:text-3xl lg:text-[48px] font-bold text-center">
          Our Achievements
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-[18px] p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              +200
              <p className="text-sm p-1  font-normal sm:text-base lg:text-[18px]">Courses</p>
            </h1>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              50K
              <p className="text-sm p-1 font-normal sm:text-base lg:text-[18px]">Mentors</p>
            </h1>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              370K
              <p className="text-sm p-1 font-normal sm:text-base lg:text-[18px]">Students</p>
            </h1>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold w-full py-4 text-center rounded-lg">
              100+
              <p className="text-sm font-normal p-1 sm:text-base lg:text-[18px]">Recognition</p>
            </h1>
          </div>
        </div>
      </div>

      <div className='p-6 sm:p-2 lg:p-[50px]' >
        <h1 className="text-2xl py-4 sm:text-3xl lg:text-[48px] font-bold text-center">
          Courses
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-[18px] p-2">
          Your Ultimate Guide to learning
        </p>
      </div>

      <div className='flex justify-center gap-5 py-8'>
        <p className='border-b border-black rounded-b-l '>Popular</p>
        <p>Recommended</p>
        <p>Best  Price</p>
      </div>



      <div className="flex flex-wrap gap-6 justify-center mt-24">
        <div className="w-full sm:w-[416px] md:w-[416px] lg:w-[416px] h-[300px] relative">
          <div>
            <Image
              className="p-1"
              src="/images/card-1.png" 
              alt="Background Image"
              layout="responsive"
              width={416}
              height={300}
            />
          </div>
          <div className="absolute top-[280px] left-0 right-0 bottom-0 flex items-center bg-white gap-[250px] bg-opacity-50 text-black">
            <p className="p-4">Design</p>
            <div className="flex">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-6 h-6 ml-2" />
              5.0
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-[24px] font-bold">UX/UI Design 201</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className="flex gap-8 justify-between">
            <button className="bg-white border-[2px] text-black py-2 px-4 rounded-lg">Enroll Now</button>
            <p className="text-[18px] font-bold">${400}</p>
          </div>
        </div>

        <div className="w-full sm:w-[416px] md:w-[416px] lg:w-[416px] h-[300px] relative">
          <div>
            <Image
              className="p-1"
              src="/images/card-2.png" 
              alt="Background Image"
              layout="responsive"
              width={416}
              height={300}
            />
          </div>
          {/* Content */}
          <div className="absolute top-[280px] left-0 right-0 bottom-0 flex items-center bg-white gap-[250px] bg-opacity-50 text-black">
            <p className="p-4">Programming</p>
            <div className="flex">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-6 h-6 ml-2" />
              4.8
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-[24px] font-bold">Introduction to Python</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className="flex gap-8 justify-between">
            <button className="bg-white border-[2px] text-black py-2 px-4 rounded-lg">Enroll Now</button>
            <p className="text-[18px] font-bold">${500}</p>
          </div>
        </div>

        <div className="w-full sm:w-[416px] md:w-[416px] lg:w-[416px] h-[300px] relative">
          <div>
            <Image
              className="p-1"
              src="/images/card-3.png" 
              alt="Background Image"
              layout="responsive"
              width={416}
              height={300}
            />
          </div>
       
          <div className="absolute top-[280px] left-0 right-0 bottom-0 flex items-center bg-white gap-[250px] bg-opacity-50 text-black">
            <p className="p-4">Business</p>
            <div className="flex">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-6 h-6 ml-2" />
              4.9
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-[24px] font-bold">Data Analysis for Beginners</h1>
            <p className="p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className="flex gap-8 justify-between">
            <button className="bg-white border-[2px] text-black py-2 px-4 rounded-lg">Enroll Now</button>
            <p className="text-[18px] font-bold">${350}</p>
          </div>
        </div>
      </div>



      <div className="flex flex-wrap gap-6 justify-center  pt-24 mt-24">
        <div className="w-full sm:w-[416px] md:w-[416px] lg:w-[416px] h-auto relative">
          <div>
            <Image
              className="p-1"
              src="/images/card-1.png" 
              alt="Background Image"
              layout="responsive"
              width={416}
              height={300}
            />
          </div>
          <div className="absolute top-[280px] left-0 right-0 flex items-center bg-white bg-opacity-50 text-black p-4">
            <p>Design</p>
            <div className="flex ml-auto items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-6 h-6 ml-2" />
              <span>5.0</span>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-[24px] font-bold">UX/UI Design 201</h1>
            <p className="p-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex justify-between items-center p-4">
            <button className="bg-white border-2 border-black text-black py-2 px-4 rounded-lg hover:bg-gray-100">
              Enroll Now
            </button>
            <p className="text-[18px] font-bold">$400</p>
          </div>
        </div>

        <div className="w-full sm:w-[416px] md:w-[416px] lg:w-[416px] h-auto relative">
          <div>
            <Image
              className="p-1"
              src="/images/card-2.png" 
              alt="Background Image"
              layout="responsive"
              width={416}
              height={300}
            />
          </div>
          <div className="absolute top-[280px] left-0 right-0 flex items-center bg-white bg-opacity-50 text-black p-4">
            <p>Programming</p>
            <div className="flex ml-auto items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-6 h-6 ml-2" />
              <span>4.8</span>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-[24px] font-bold">Introduction to Python</h1>
            <p className="p-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex justify-between items-center p-4">
            <button className="bg-white border-2 border-black text-black py-2 px-4 rounded-lg hover:bg-gray-100">
              Enroll Now
            </button>
            <p className="text-[18px] font-bold">$500</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full sm:w-[416px] md:w-[416px] lg:w-[416px] h-auto relative">
          <div>
            <Image
              className="p-1"
              src="/images/card-3.png" 
              alt="Background Image"
              layout="responsive"
              width={416}
              height={300}
            />
          </div>
          <div className="absolute top-[280px] left-0 right-0 flex items-center bg-white bg-opacity-50 text-black p-4">
            <p>Business</p>
            <div className="flex ml-auto items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-6 h-6 ml-2" />
              <span>4.9</span>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-[24px] font-bold">Data Analysis for Beginners</h1>
            <p className="p-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex justify-between items-center p-4">
            <button className="bg-white border-2 border-black text-black py-2 px-4 rounded-lg hover:bg-gray-100">
              Enroll Now
            </button>
            <p className="text-[18px] font-bold">$350</p>
          </div>

        </div>
        <div className='mt-8'>
          <button className="bg-white  border-[2px] text-black py-2 px-4 rounded-lg">View All Courses</button>
        </div>
      </div>

      <div className="bg-[#F7F7F7] mt-28">
        <div className="p-6 sm:p-2 lg:p-[50px]">
          <h1 className="text-2xl py-4 sm:text-3xl lg:text-[48px] font-bold text-center">
            Our Team
          </h1>
          <p className="text-center text-sm sm:text-base lg:text-[18px] p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-8">
          <div className="w-full sm:w-[300px] lg:w-[400px] p-4 flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] relative flex-shrink-0">
              <Image
                src="/images/team-1.png"
                alt="James Nduku"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[20px] font-bold leading-tight">James Nduku</h1>
              <span className="text-[18px] text-gray-600">Marketing Coordinator</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>

          <div className="w-full sm:w-[300px] lg:w-[400px] p-4 flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] relative flex-shrink-0">
              <Image
                src="/images/team-1.png"
                alt="James Nduku"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[20px] font-bold leading-tight">James Nduku</h1>
              <span className="text-[18px] text-gray-600">Marketing Coordinator</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-[300px] lg:w-[400px] p-4  flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] relative flex-shrink-0">
              <Image
                src="/images/team-1.png" 
                alt="James Nduku"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[20px] font-bold leading-tight">James Nduku</h1>
              <span className="text-[18px] text-gray-600">Marketing Coordinator</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-[300px] lg:w-[400px] p-4 flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] relative flex-shrink-0">
              <Image
                src="/images/team-1.png" 
                alt="James Nduku"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[20px] font-bold leading-tight">James Nduku</h1>
              <span className="text-[18px] text-gray-600">Marketing Coordinator</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-[300px] lg:w-[400px] p-4 flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] relative flex-shrink-0">
              <Image
                src="/images/team-1.png" 
                alt="James Nduku"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[20px] font-bold leading-tight">James Nduku</h1>
              <span className="text-[18px] text-gray-600">Marketing Coordinator</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-[300px] lg:w-[400px] p-4 flex flex-col items-center text-center">
            <div className="w-[80px] h-[80px] relative flex-shrink-0">
              <Image
                src="/images/team-1.png" 
                alt="James Nduku"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-4">
              <h1 className="text-[20px] font-bold leading-tight">James Nduku</h1>
              <span className="text-[18px] text-gray-600">Marketing Coordinator</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-28 px-[64px]'>
          <h1 className='text-[48px] font-bold'>Customer testimonials</h1>
          <p className='text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-wrap p-8 justify-center gap-6 relative">
          <div className="space-x-1 border border-black w-full sm:w-[362px] h-auto p-[32px]">
            <div className="flex py-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-black" size={24} />
              ))}
            </div>
            <div>
              <p className="text-[18px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="flex items-center py-4">
              <div className="w-[54px] h-[54px] relative">
                <Image
                  className="rounded-full"
                  src="/images/team-2.png"
                  alt="James Nduku"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex pl-4">
                <p>
                  James Nduku <span>Software Developer</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-x-1 border border-black w-full sm:w-[362px] h-auto p-[32px] ">
            <div className="flex py-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-black" size={24} />
              ))}
            </div>
            <div>
              <p className="text-[18px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="flex items-center py-4">
              <div className="w-[54px] h-[54px] relative">
                <Image
                  className="rounded-full"
                  src="/images/team-1.png"
                  alt="Erick Kipkemboi"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex pl-4">
                <p>
                  Erick Kipkemboi <span>Scrum Master</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-x-1 border border-black w-full sm:w-[362px] h-auto p-[32px]">
            <div className="flex py-4">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-black" size={24} />
              ))}
            </div>
            <div>
              <p className="text-[18px]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="flex items-center py-4">
              <div className="w-[54px] h-[54px] relative">
                <Image
                  className="rounded-full"
                  src="/images/team-3.png"
                  alt="Stephen Kerubo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex pl-4">
                <p>
                  Stephen Kerubo <span>UI/UX Designer</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-[80px] items-center">
        <div>
          <h1 className="text-[18px] font-bold">Subscribe to our newsletter</h1>
          <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* footer section */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-[12px] w-[262px] border border-black-700 rounded-[5px]"
            />
            <input
              type="text"
              placeholder="Subscribe"
              className="p-[12px] w-[120px] border border-black-700 rounded-[5px]"
            />
          </div>
          <p className="text-[14px] text-gray-500 mt-2">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>


      <div className="p-8 bg-gray-100 flex flex-wrap justify-between gap-8 lg:gap-32 lg:p-24">
        <div className="w-full lg:w-auto">
          <h1 className="text-[24px] font-bold mb-4">Ddsgnr</h1>
        </div>
        <div className="w-full lg:w-auto flex flex-col gap-6">
          <h1 className="text-[20px] font-semibold mb-4">Courses</h1>
          <div className="flex flex-col gap-2">
            <Link href="" className="text-black hover:underline">Business</Link>
            <Link href="" className="text-black hover:underline">Development</Link>
            <Link href="" className="text-black hover:underline">Technology</Link>
            <Link href="" className="text-black hover:underline">Design</Link>
            <Link href="" className="text-black hover:underline">Programming</Link>
          </div>
        </div>

        <div className="w-full lg:w-auto flex flex-col gap-6">
          <h1 className="text-[20px] font-semibold mb-4">Resources</h1>
          <div className="flex flex-col gap-2">
            <Link href="" className="text-black hover:underline">Career</Link>
            <Link href="" className="text-black hover:underline">Resume</Link>
            <Link href="" className="text-black hover:underline">Learning</Link>
            <Link href="" className="text-black hover:underline">Interview Preparation</Link>
            <Link href="" className="text-black hover:underline">Jobs</Link>
          </div>
        </div>

        {/* Column 4: About Us */}
        <div className="w-full lg:w-auto flex flex-col gap-6">
          <h1 className="text-[20px] font-semibold mb-4">About Us</h1>
          <div className="flex flex-col gap-2">
            <Link href="" className="text-black hover:underline">Contact</Link>
            <Link href="" className="text-black hover:underline">Help/Support</Link>
            <Link href="" className="text-black hover:underline">FAQ</Link>
            <Link href="" className="text-black hover:underline">Terms and Conditions</Link>
            <Link href="" className="text-black hover:underline">Partners</Link>
          </div>
        </div>
      </div>

      <div className="flex mb-12 mt-12 border-t-2  border-black justify-evenly flex-col md:flex-row bg-white p-4 md:pr-16 md:pl-16 sm:justify-center">
        <h4 className="text-[14px] w-full md:w-auto text-center md:text-left">
        2023 Ddsgnr. All right reserved.
        </h4>
        <h4 className="text-[14px] w-full md:w-auto text-center md:text-left">
        Privacy Policy
        </h4>
        <h4 className="text-[14px] w-full md:w-auto text-center md:text-left">
        Terms of Service
        </h4>
        <h4 className="text-[14px] w-full md:w-auto text-center md:text-left">
        Cookies Settings
        </h4>
        <div className="flex justify-center md:justify-end gap-4 mt-2 md:mt-0 w-full md:w-auto">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-600 text-xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-700 text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-800 text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-800 text-xl" />
          </a>
        </div>
      </div>
              
    </main>
  );
}
export default FigmaProject;
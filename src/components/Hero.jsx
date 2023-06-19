import React from 'react'
import { heroImg } from '../assets'
import {AiOutlineSearch} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='w-full py-18 '>
      <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 p-12 max-w-[600px]'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='text-2xl py-2 text-[#20B486] font-medium'>
            START TO SUCCESS
          </p>
          <h1 className='md:text-4xl text-3xl font-semibold'>
            Acces To <span className='text-[#20B486]'>5000</span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions
          </h1>
          <p className='text-lg py-2 text-gray-600'>
            Various versions have evolved over the years, sometimes by accident{' '}
          </p>
          <form className='max-w-[700px] border py-2 rounded-md shadow-lg flex justify-between'>
            <input
              className='bg-white px-2 '
              type='text'
              placeholder='What do want to learn?'
            />

            <button className=''>
              <AiOutlineSearch
                size={20}
                className='icon px-5'
                style={{color:'black'}}

              />
            </button>


          </form>
        </div>
        <img className = 'order-first'src={heroImg} alt='heroimg' />
      </div>
    </div>
  )
}

export default Hero

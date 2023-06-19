import React from 'react'
import { companyLogo1,companyLogo2,companyLogo3,companyLogo4 } from '../assets'
const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
      <div className='md:max-w-[1480px] m-auto p-12 max-w-[670px]'>
        <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 20,0000 teams around the world.</h1>
        <p className='text-center text-[#536E96] text-xl p-3'>Leading companies use the same coursess to help employees keep their skils fresh</p>
        <div className=' py-3   '>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-2'>
            <img src={companyLogo1} alt="" />
            <img src={companyLogo2} alt="" />
            <img src={companyLogo3} alt="" />
            <img src={companyLogo4} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies

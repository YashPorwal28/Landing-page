import React from 'react'
import { blogImg1 } from '../assets'
import StarRating from './StarRating'

const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden rounded-2xl m-3'>
      <img className='w-full h-40 object-cover ' src={blogImg1} alt='' />
      <div className='p-5 border border-bottom'>
        <h1 className='py-2'>Python programming</h1>
        <StarRating rating={2} />
      </div>

      <h3 className='p-5'>$500</h3>

      <div className='absolute top-0 bg-white m-2 p-1 rounded-xl'>HTML</div>
    </div>
  )
}

export default Card

import React from 'react'

function Details() {
  return (
    <div className='flex'>
        <div className='w-1/2 bg-gray-50 rounded-md p-10 m-4'>
            <div className='flex justify-between relative'>
                <div className='w-1/2'>
                    <img  style={{    position: 'absolute', top: '-110px', left: '-20px'}}
                     src="/plants/p8.png" alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='font-extrabold text-2xl text-gray-700'>Summer cactus
& succulents</h2>
<p className='text-gray-600'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
<button className='green-btn p-3 m-3 rounded text-white font-semibold'>Find More</button>
                </div>
            </div>
        </div>
        <div className='w-1/2 bg-gray-50 rounded-md p-10 m-4'>
            <div className='flex justify-between relative'>
                <div className='w-1/2'>
                    <img  style={{    position: 'absolute', top: '-110px', left: '-20px'}}
                     src="/plants/p8.png" alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='font-extrabold text-2xl text-gray-700'>Summer cactus
& succulents</h2>
<p className='text-gray-600'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
<button className='green-btn p-3 m-3 rounded text-white font-semibold'>Find More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details
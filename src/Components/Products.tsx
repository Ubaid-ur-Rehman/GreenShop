import React from 'react';
import { products } from '../data/products';

function Products() {
  return (
    <div className='flex w-4/6'>
        {/* <h1 className='text-2xl font-bold text-gray-800'>Products</h1> */}
        <div className='flex flex-wrap justify-start gap-2 mt-6 '>
            {products.map(product => (
            <a href="#" className='text-green-600 font-semibold mb-4'>
                <div key={product.id} className='border-amber-50 shadow  rounded-md p-4 m-2  w-54'>
                    <img src={product.image} alt={product.name} className='w-full h-50 object-cover mb-2' />
                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-semibold'>{product.name}</h2>
                    <p className='text-gray-600'>${product.price}</p>
                    </div>
            </a>
            ))}
        </div>
    </div>
  )
}

export default Products
import React from 'react'

const Category = () => {
  return (
    <div className='h-screen border-t-4 mt-8 '>

        <div className='w-4/5 m-auto  '>
            <div className='flex justify-between mt-6'> 
                <button className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>All</button>
                <button className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>T-Shirt</button>
                <button className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>Shirt</button>
                <button className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>Jeans</button>
            </div>

            <div className='flex justify-center mt-6 gap-6 flex-col sm:flex-row px-5 '>
        <div className='bg-white p-4 '>
            <div className=' '>
          <img className='w-full h-64' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750" alt="images" />
              <h2 className=' text-2xl font-bold '>T-Shirt</h2>
              <h3 className=' text-xl font-bold'>MRP Rs. 1,490.00</h3>
              <h3 className=' text-gray-500'>Smooth 'AIRism' with the look of cotton.</h3>
            </div>
            <button className=' bg-zinc-600 text-white p-2 rounded font-bold '>ADD TO CART</button>
        </div>
        <div className='bg-white p-4 '>
            <div className=' '>
          <img className='w-full h-64' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750" alt="images" />
              <h2 className=' text-2xl font-bold '>T-Shirt</h2>
              <h3 className=' text-xl font-bold'>MRP Rs. 1,490.00</h3>
              <h3 className=' text-gray-500'>Smooth 'AIRism' with the look of cotton.</h3>
            </div>
            <button className=' bg-zinc-600 text-white p-2 rounded font-bold '>ADD TO CART</button>
        </div>
        <div className='bg-white p-4 '>
            <div className=' '>
          <img className='w-full h-64' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750" alt="images" />
              <h2 className=' text-2xl font-bold '>T-Shirt</h2>
              <h3 className=' text-xl font-bold'>MRP Rs. 1,490.00</h3>
              <h3 className=' text-gray-500'>Smooth 'AIRism' with the look of cotton.</h3>
            </div>
            <button className=' bg-zinc-600 text-white p-2 rounded font-bold '>ADD TO CART</button>
        </div>
      </div>

        </div>

    </div>
  )
}

export default Category
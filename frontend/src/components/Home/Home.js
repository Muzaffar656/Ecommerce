import React from 'react'
// rgb(243 244 246);
const Home = () => {
  return (
    <div className=' bg-home-grey h-screen border-t-4 mt-8 '>
    <div className='w-4/5 m-auto  '></div>
      <div className=' sm:flex-row flex  flex-col px-5   sm:px-0 justify-center mt-6 gap-6 '>
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
  )
}

export default Home
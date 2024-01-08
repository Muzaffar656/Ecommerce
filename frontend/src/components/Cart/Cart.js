import React from 'react'

const Cart = () => {
  return (
    <div  className='h-screen border-t-4 mt-8 '>
    
    <div className='w-4/5 m-auto  ' >
    
        <h1 className=' font-bold text-3xl mt-5'>Shopping Cart</h1>

            <div className='flex mt-5  border-t-2'>

            <div className=' flex items-center gap-7 mt-6'>
               
                    <img className=' h-48' src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462401/item/goods_27_462401.jpg?width=750" alt="" />
                    <div>
                    <h2 className=' text-2xl font-bold '>T-Shirt</h2>
              <h3 className=' text-xl font-bold'>MRP Rs. 1,490.00</h3>
              <h3 className=' text-gray-500'>Smooth 'AIRism' with the look of cotton.</h3>
                    </div>
                    
                    <select name="quantity" id="12" className='py-4 px-5'>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                    </select>

                        <button className='border px-4 py-2 rounded font-medium'>Remove</button>

            </div>

            </div>
    </div>
    
    </div>
  )
}

export default Cart
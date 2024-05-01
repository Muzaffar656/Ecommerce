import React,{useState} from 'react'

const Category = () => {
  const [products, setProducts] = useState([])
  const product = [
    {
      id: "dsjbfdjksfgbi",
      img: "https://levi.in/cdn/shop/files/329080243_01_Style_Shot_24d15e34-407b-42ba-9cea-c2531cc737df.jpg?v=1695736392",
      name: "T-Shirt",
      price: 1490,
      description: "Smooth 'AIRism' with the look of cotton.",
      category:"tshirt"
    },
    {
      id: "uyepioednm",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQXJLkyIo-mRwH2EFgdkDY_1XlVY6C6QJi4y_LLJVyW8rnAl4YuxDriCNW3-damQJa0fvKkK93IQF6UG6sS_hxuaXRNOgkNO-YtecZ5nOX3AgL7e-wH3F1Wfw",
      name: "Jeans",
      price: 1399,
      description: "LEVI'S 512 Slim Tapered Fit Men Jeans",
      category:"jeans"
    },
    {
      id: "ijsdhiuic",
      img: "https://levi.in/cdn/shop/files/329080243_01_Style_Shot_24d15e34-407b-42ba-9cea-c2531cc737df.jpg?v=1695736392",
      name: "Shirt",
      price: 1290,
      description: "MEN'S CHECKERED SLIM FIT SHIRT.",
      category:"shirt"
    },
  ];


  const filterProducts = (cat)=>{
    if(cat === "All"){
      setProducts(product)
    }else{

    const update = product.filter((el)=>el.category === cat)
    setProducts(update)
    }
  }
  return (
    <div className='h-screen border-t-4 mt-8 '>

        <div className='w-4/5 m-auto  '>
            <div className='flex justify-between mt-6'> 
                <button onClick={()=>{filterProducts("All")}} className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>All</button>
                <button onClick={()=>{filterProducts("tshirt")}} className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>T-Shirt</button>
                <button onClick={()=>{filterProducts("shirt")}} className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>Shirt</button>
                <button onClick={()=>{filterProducts("jeans")}} className=' hover:bg-white hover:text-black hover:border bg-gray-500 text-white font-semibold px-3 py-2 rounded'>Jeans</button>
            </div>

            <div className='flex justify-center mt-6 gap-6 flex-col sm:flex-row px-5 '>
            {
              products.map((el,index)=>{
                return(
        <div key={index} className='bg-white p-4 '>
            <div className=' '>
          <img className='w-full h-64' src={el.img} alt="images" />
              <h2 className=' text-2xl font-bold '>{el.name}</h2>
              <h3 className=' text-xl font-bold'>MRP Rs. {el.price}</h3>
              <h3 className=' text-gray-500'>{el.description}</h3>
            </div>
            <button className=' bg-zinc-600 text-white p-2 rounded font-bold '>ADD TO CART</button>
        </div>

                )
              })
            }

      </div>

        </div>

    </div>
  )
}

export default Category